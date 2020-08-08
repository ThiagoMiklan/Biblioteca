import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/tools/exporter.js',
  output: 
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ '@babel/plugin-external-helpers', "@babel/plugin-transform-flow-strip-types"]
    }),
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions
    }),
    commonjs()
  ]
}