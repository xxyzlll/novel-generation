import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (path: string): string => resolve(root, path)
const root: string = process.cwd()

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: pathResolve('src') },
        ]
    },
    plugins: [vue()],
})
