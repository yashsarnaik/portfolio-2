import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiSnapchat,
  SiX
} from '@icons-pack/react-simple-icons'
import { FlameIcon, MonitorIcon, UserCircleIcon } from 'lucide-react'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    text: 'Projects'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    text: 'About'
  },
  {
    icon: <MonitorIcon className='size-3.5' />,
    href: '/uses',
    text: 'Uses'
  }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        text: 'Home'
      },

      {
        href: '/about',
        text: 'About'
      }
    ]
  },
  {
    id: 2,
    links: [
      {
        href: '/uses',
        text: 'Uses'
      },
      {
        href: '/projects',
        text: 'Projects'
      },
      {
        href: 'https://links.honghong.me',
        text: 'Links'
      }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: 'https://www.facebook.com/tszhong0411/',
        text: 'Facebook'
      },
      {
        href: 'https://www.instagram.com/tszhong0411/',
        text: 'Instagram'
      },
      {
        href: 'https://github.com/tszhong0411',
        text: 'GitHub'
      },
      {
        href: 'https://www.youtube.com/@tszhong0411',
        text: 'YouTube'
      }
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/tszhong0411',
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: 'https://www.facebook.com/tszhong0411/',
    title: 'LinkedIn',
    icon: SiLinkedin
  },
  {
    href: 'https://www.instagram.com/tszhong0411/',
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: 'https://x.com/tszhong0411',
    title: 'X',
    icon: SiX
  },
  {
    href: 'https://www.youtube.com/@tszhong0411',
    title: 'Snapchat',
    icon: SiSnapchat
  }
]
