import { Link, Config } from '../components/Footer'

export const resources: Config[] = [
  {
    title: 'Features',
    links: [{ label: 'Link Shortening', url: '#' }, { label: 'Branded Links', url: '#' }, { label: 'Analytics', url: '#' }]
  },
  {
    title: 'Resources',
    links: [{ label: 'Blog', url: '#' }, { label: 'Developers', url: '#' }, { label: 'Support', url: '#' }]
  },
  {
    title: 'Company',
    links: [{ label: 'About', url: '#' }, { label: 'Our Team', url: '#' }, { label: 'Careers', url: '#' }, { label: 'Contact', url: '#' }]
  },

]

export const social: Link[] = [
  { label: 'Facebook', url: '#', icon: 'fb' },
  { label: 'Twitter', url: '#', icon: 'tw' },
  { label: 'Pinterest', url: '#', icon: 'pi' },
  { label: 'Instagram', url: '#', icon: 'in' }
]