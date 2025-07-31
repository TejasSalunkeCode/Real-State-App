import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server :{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
//   plugins: [react()],
// });
