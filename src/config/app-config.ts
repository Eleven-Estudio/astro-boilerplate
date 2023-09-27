
export const APP_CONFIG = {
  site_name: 'Astro boilerplate',
  title: 'Astro boilerplate',
  description: 'Boilerplate built with Astro using React and Tailwind CSS',
  author: 'Creator',
  theme_color: '#000000',
  locale_region: 'es-GT',
  locale: 'es'
}

export const OPEN_GRAPH = {
  type: 'website',
  title: 'Astro boilerplate', // 55 to 60 characters
  description: 'Boilerplate built with Astro using React and Tailwind CSS', // 50 to 300 characters
  image: 'https://placehold.co/600x400.png' // URL to image 1200x630, size less than 1MB
}

export const ROUTER = {
  HOME: {
    path: '/',
    name: 'Home'
  }
}

export const ROUTES = Object.values(ROUTER) as Array<{
  path: string
  name: string
}>
