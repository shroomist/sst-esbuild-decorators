import esbuildPluginTsc from "esbuild-plugin-tsc"
import path from "path"

export default [
  esbuildPluginTsc({
    tsconfigPath: path.join('./', 'tsconfig.json'),
    force: true,
  })
]
