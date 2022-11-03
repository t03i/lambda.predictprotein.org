import React, { useEffect } from "react";
import styled from "styled-components";

import { useStructure } from "../../hooks/useStructure";
import MolstarViewer from "../MolstarViewer";

export default function StructureDisplay() {
    const { isError, isSuccess, isLoading, data } = useStructure();

    const renderAction = () => {
        if (isLoading) return <StructureDisplayLoading />;
        if (isError) return <StructureDisplayError />;
        if (isSuccess) return <StructureDisplayLoaded data={data} />;
    };

    return <>{renderAction()}</>;
}

function StructureDisplayLoaded({ data }) {
    const viewerRef = React.useRef(null);
    const { source, ...customData } = data;

    // useEffect(() => {
    //     if (!viewerRef) return;
    //     console.log(viewerRef.current);
    //     var viewerInstance = new window.PDBeMolstarPlugin();
    //     viewerInstance.render(viewerRef.current, {
    //         ...VIEWER_OPTIONS,
    //         customData: customData,
    //     });
    //     return () => viewerInstance.clear();
    // }, [customData, viewerRef]);

    return <MolstarViewer {...customData} />;
}

function StructureDisplayLoading() {}
function StructureDisplayError() {}
