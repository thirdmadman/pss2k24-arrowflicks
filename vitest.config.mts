import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/config/setupTests.ts',
    css: true,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    coverage: {
      provider: 'v8',
      enabled: true,
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/vite-env.d.ts',
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '__tests__/__mocks__/**',
        'src/types/**',
        'src/config/**',
        'src/constants.ts',
      ],
    },
  },
});
