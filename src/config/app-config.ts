export const AppConfig = {
  site_name: 'Astro boilerplate',
  title: 'Astro boilerplate',
  description: 'Boilerplate built with Astro using React and Tailwind CSS',
  author: 'Creator',
  theme_color: '#0b0b0b',
  locale_region: 'es-GT',
  locale: 'es'
}

export const OpenGraph = {
  type: 'website',
  title: 'Astro boilerplate',
  description: 'Boilerplate built with Astro using React and Tailwind CSS',
  image: 'https://placehold.co/600x400.png'
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
