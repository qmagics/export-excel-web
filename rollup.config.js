import path from 'path';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const outputList = [
    {
        format: "es",
        file: path.resolve(__dirname, `./lib/index.esm.js`)
    },
    {
        format: "amd",
        file: path.resolve(__dirname, `./lib/index.amd.js`)
    },
    {
        format: "umd",
        file: path.resolve(__dirname, `./lib/index.js`),
        name: "ExportExcelWeb"
    },
    {
        format: "umd",
        file: path.resolve(__dirname, `./docs/export-excel-web.js`),
        name: "ExportExcelWeb"
    }
];

export default {
    input: path.resolve(__dirname, './src/index.js'),
    output: outputList,
    plugins: [
        babel(),
        terser()
    ]
}