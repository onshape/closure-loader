/* eslint-disable */
import exportPath from './export-path';

function createNestedNamespaces(root, dottedPaths) {
    dottedPaths.forEach(function (n) {
        exportPath(root, n);
    });
}

module.exports = {
    createNestedNamespaces: createNestedNamespaces,
};
