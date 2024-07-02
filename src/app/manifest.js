export default function manifest() {
    return {
      name: 'Blog By Amaan',
      short_name: 'Amaan Bhati Blog App',
      description: 'Blog App coded and crafted on top of Nextjs',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/logo.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/logo.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }