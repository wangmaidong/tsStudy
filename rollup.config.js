  // rollup.config.js
  import ts from 'rollup-plugin-typescript2'
  import {
    nodeResolve
  } from '@rollup/plugin-node-resolve';
  import serve from 'rollup-plugin-serve';
  import path from 'path'
  import {
    fileURLToPath
  } from 'url'
  const filName = fileURLToPath(
    import.meta.url)
  const __dirname = path.resolve(filName)
  console.log(filName)
  console.log(__dirname)

  export default {
    input: 'src/index.ts',
    output: {
      format: 'iife',
      file: path.resolve('dist/bundle.js'),
      sourcemap: true
    },
    plugins: [
      nodeResolve({
        extensions: ['.js', '.ts']
      }),
      ts({
        tsconfig: path.resolve('tsconfig.json')
      }),
      serve({
        open: true,
        openPage: '/public/index.html',
        port: 3000,
        contentBase: ''
      })
    ]
  }