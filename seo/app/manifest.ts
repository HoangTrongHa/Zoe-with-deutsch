import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muối Deutsch Center - Trung tâm tiếng Đức',
    short_name: 'Muối Deutsch',
    description: 'Trung tâm tiếng Đức uy tín, phương pháp giảng dạy hiện đại - Học tiếng Đức dễ như muối bỏ bể',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
