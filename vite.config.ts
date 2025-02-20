import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const pathResolve = (path: string): string => resolve(root, path)
const root: string = process.cwd()

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: pathResolve('src') },
        ]
    },
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
})
