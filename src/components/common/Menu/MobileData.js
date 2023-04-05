const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    title: 'Home',
    link: '/',
    submenus: [
      { title: 'Home Style 1', link: '/' },
      { title: 'Home Style 2', link: '/home-2' },
      { title: 'Home Style 3', link: '/home-3' },
    ]
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    hasDropdown: true,
    title: 'Pages',
    link: '/about',
    submenus: [
      { title: 'Team', link: '/team' },
      { title: 'Team Details', link: '/team-details' },
      { title: 'Service', link: '/service' },
      { title: 'Service Details', link: '/service-details' },
      { title: 'Price', link: '/price' },
      { title: 'Contact', link: '/contact' },
      { title: 'Faq', link: '/faq' },
    ]
  },
  {
    id: 4,
    hasDropdown: true,
    title: 'Portfolio',
    link: '/portfolio',
    submenus: [
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Portfolio Details', link: '/portfolio-details' },
    ]
  },
  {
    id: 5,
    hasDropdown: true,
    title: 'Blog',
    link: '/blog',
    submenus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
]

export default menu_data;
