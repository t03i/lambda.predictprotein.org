import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { DefaultPluginSpec } from "molstar/lib/mol-plugin/spec";
import { DefaultPluginUISpec } from "molstar/lib/mol-plugin-ui/spec";
import { createPluginAsync } from "molstar/lib/mol-plugin-ui/index";
import { PluginContext } from "molstar/lib/mol-plugin/context";
import "molstar/build/viewer/molstar.css";
import { ParamDefinition } from "molstar/lib/mol-util/param-definition";
import { CameraHelperParams } from "molstar/lib/mol-canvas3d/helper/camera-helper";

import { pushNotification, Notification } from "../stores/notificationStore";

// Implementation based on https://github.com/samirelanduk/molstar-react

const StructureViewerElement = styled.div`
    float: inherit;
    width: inherit;
    height: 700px;
    position: relative;
    background-color: #d9d9d9;
`;

async function loadStructure(url, format, plugin) {
    if (plugin) {
        plugin.clear();

        const structureUrl = url;
        if (!structureUrl) return;
        const data = await plugin.builders.data.download(
            { url: structureUrl },
            { state: { isGhost: true } }
        );

        const traj = await plugin.builders.structure.parseTrajectory(
            data,
            format
        );

        await plugin.builders.structure.hierarchy.applyPreset(traj, "default");
    }
}

export default function MolstarViewer({ url, format, ...props }) {
    const parentRef = useRef(null);
    const canvasRef = useRef(null);
    const plugin = useRef(null);

    useEffect(() => {
        (async () => {
            plugin.current = new PluginContext(DefaultPluginSpec());
            if (
                !plugin.current.initViewer(canvasRef.current, parentRef.current)
            ) {
                pushNotification(
                    Notification("Error initializing Mol* viewer.")
                );
            }
            await plugin.current.init();

            plugin.current.canvas3d?.setProps({
                camera: {
                    helper: {
                        axes: ParamDefinition.getDefaultValues(
                            CameraHelperParams
                        ).axes,
                    },
                },
            });
            await loadStructure(url, format, plugin.current);
        })();
        return () => (plugin.current = null);
    }, [url, format]);

    return (
        <StructureViewerElement ref={parentRef} {...props}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
        </StructureViewerElement>
    );
}
