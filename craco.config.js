const path = require("path");
const aliases = require("./jsconfig.aliases.json");
function getWebpackAliasesFromPaths(configPaths) {
    const alias = Object.entries(configPaths).reduce(
        (webpackAliases, [configAlias, configPathList]) => {
            const [aliasKey] = configAlias.split("/");
            const [relativePathToDir] = configPathList[0].split("/*");
            return {
                ...webpackAliases,
                [aliasKey]: path.resolve(__dirname, relativePathToDir),
            };
        },
        {}
    );
    console.log(alias);
    return alias;
}
module.exports = {
    webpack: {
        alias: getWebpackAliasesFromPaths(aliases.compilerOptions.paths),
    },
};
