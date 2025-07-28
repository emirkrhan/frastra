export default function sitemap() {
  const baseUrl = 'https://frastra.vercel.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/get-started/introduction`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-started/installation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-started/typography`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Component pages
  const components = [
    'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'button', 'card',
    'checkbox', 'dropdown-menu', 'footer', 'input', 'list', 'modal', 'navbar',
    'pagination', 'radio-group', 'select', 'skeleton', 'spinner', 'switch',
    'table', 'tabs', 'textarea', 'toast', 'tooltip'
  ]

  const componentPages = components.map(component => ({
    url: `${baseUrl}/components/${component}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Layout pages
  const layoutPages = [
    'box', 'flex', 'grid', 'aspect-ratio'
  ].map(layout => ({
    url: `${baseUrl}/layout/${layout}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticPages, ...componentPages, ...layoutPages]
}