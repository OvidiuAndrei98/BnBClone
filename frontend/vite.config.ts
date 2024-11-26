import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import vitePluginImp from 'vite-plugin-imp';
import checker from 'vite-plugin-checker';
import noderesolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default ({ mode }) => {
    // use .env variables during build
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    return defineConfig({
        envPrefix: 'REACT_APP_',
        build: {
            outDir: 'build',
            rollupOptions: {
                plugins: [
                    noderesolve(),
                ],
            }
        },
        optimizeDeps: {
            include: [
                'react-is',
            ],
        },
        plugins: [
            react(),
            viteTsconfigPaths(),
            svgrPlugin(),
            // Import antd styles
            vitePluginImp({
                libList: [
                    {
                        libName: 'antd',
                        style: (name) => `antd/es/${name}/style`,
                    },
                ],
            }),
            // Show warnings at build time and during development from eslint and typescript
            checker({
                typescript: true,
                eslint: {
                    lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
                    dev: {
                        logLevel: ['error'],
                    },
                },
            }),
        ],
    });
};
