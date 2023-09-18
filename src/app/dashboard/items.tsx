'use client'

import {
  IconBrandGithub,
  IconBrandYoutube,
  IconClock,
  IconPencil,
  IconUser
} from '@tabler/icons-react'
import dayjs from 'dayjs'
import React from 'react'
import useSWR from 'swr'

import { Skeleton } from '@/components/ui'
import fetcher from '@/lib/fetcher'
import {
  type Github,
  type Likes,
  type Views,
  type Wakatime,
  type YouTube
} from '@/types'

/**
 * A metric card with an icon, title, link, and value.
 */
type Card = {
  /**
   * The icon to display on the card.
   */
  icon: React.ReactNode
  /**
   * The title of the card.
   */
  title: string
  /**
   * The link to navigate to when the card is clicked.
   */
  link: string
  /**
   * The value to display on the card.
   */
  value: number | string | undefined
}

const Items = () => {
  const { data: youtubeData } = useSWR<YouTube>('/api/youtube', fetcher)
  const { data: githubData } = useSWR<Github>('/api/github', fetcher)
  const { data: likesData } = useSWR<Likes>('/api/likes', fetcher)
  const { data: viewsData } = useSWR<Views>('/api/views', fetcher)
  const { data: wakatimeData } = useSWR<Wakatime>('/api/wakatime', fetcher)

  const [age, setAge] = React.useState<string>()

  React.useEffect(() => {
    const getAge = setInterval(() => {
      setAge(() =>
        (
          dayjs().diff('2006-04-11', 'milliseconds') /
          (365.25 * 24 * 60 * 60 * 1000)
        ).toFixed(9)
      )
    }, 10)

    return () => clearInterval(getAge)
  })

  const data: Card[] = [
    {
      title: 'My Age',
      link: 'https://honghong.me/about',
      value: age,
      icon: <IconUser />
    },
    {
      title: 'Coding Hours',
      link: 'https://wakatime.com/@tszhong0411',
      value: wakatimeData?.seconds
        ? `${Math.round(wakatimeData.seconds / 60 / 60)} hrs`
        : undefined,
      icon: <IconClock />
    },
    {
      title: 'YouTube Subscribers',
      link: 'https://youtube.com/@tszhong0411',
      value: youtubeData?.subscribers,
      icon: <IconBrandYoutube />
    },
    {
      title: 'YouTube Views',
      link: 'https://youtube.com/@tszhong0411',
      value: youtubeData?.views,
      icon: <IconBrandYoutube />
    },
    {
      title: 'GitHub Followers',
      link: 'https://github.com/tszhong0411',
      value: githubData?.followers,
      icon: <IconBrandGithub />
    },
    {
      title: 'GitHub Stars',
      link: 'https://github.com/tszhong0411',
      value: githubData?.stars,
      icon: <IconBrandGithub />
    },
    {
      title: 'Blog Total Views',
      link: 'https://honghong.me',
      value: viewsData?.views,
      icon: <IconPencil />
    },
    {
      title: 'Blog Total Likes',
      link: 'https://honghong.me',
      value: likesData?.likes,
      icon: <IconPencil />
    }
  ]

  return (
    <>
      <div className='mb-4 grid gap-4 sm:grid-cols-2'>
        {data.map((item) => {
          const { icon, link, title, value } = item

          return (
            <a
              key={title}
              target='_blank'
              rel='noopener noreferrer'
              href={link}
              className='flex flex-col gap-2 rounded-lg border p-4 transition-colors duration-150 hover:bg-accent'
            >
              <div className='flex items-center gap-1'>
                {icon}
                <div className='text-sm font-bold'>{title}</div>
              </div>
              <div className='text-4xl font-black text-foreground'>
                {value === undefined ? (
                  <Skeleton className='h-10 rounded-md' />
                ) : (
                  value
                )}
              </div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default Items
