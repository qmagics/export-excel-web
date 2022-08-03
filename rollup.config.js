import path from 'path';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import html from 'rollup-plugin-html';

const outputList = [
    {
        format: "es",
        sourcemap: true,
        file: path.resolve(__dirname, `./lib/index.esm.js`)
    },
    {
        format: "amd",
        sourcemap: true,
        file: path.resolve(__dirname, `./lib/index.amd.js`)
    },
    {
        format: "umd",
        sourcemap: true,
        file: path.resolve(__dirname, `./lib/index.js`),
        name: "ExportExcelWeb"
    }
];

export default {
    input: path.resolve(__dirname, './src/index.js'),
    output: outputList,
    plugins: [
        babel(),
        terser(),
        html({
            include: '**/*.html'
        })
    ]
}