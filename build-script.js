import { build } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

async function runBuild() {
  console.log('Starting build process...');
  
  try {
    // Define the build configuration
    const config = {
      plugins: [react()],
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: false,
        minify: 'esbuild',
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
        },
      },
    };

    // Run the build
    await build({
      ...config,
    });

    console.log('Build completed successfully!');
    
    // Ensure the dist directory exists
    if (fs.existsSync('./dist')) {
      console.log('Dist directory created successfully');
      
      // Create a simple health check
      const indexPath = path.resolve('./dist', 'index.html');
      if (fs.existsSync(indexPath)) {
        console.log('✓ index.html created successfully');
      } else {
        console.error('✗ index.html not found in dist directory');
      }
    } else {
      console.error('✗ Dist directory not created');
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Run the build
runBuild();