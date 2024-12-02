'use client'

import { BlurImage } from '@tszhong0411/ui'
import { motion, useAnimate } from 'framer-motion'
import * as React from 'react'

const TEXTS = [
  {
    text: 'an AI/ML developer',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'a Backend developer',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'Gen-AI enthusiast',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  }
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  React.useEffect(() => {
    animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='space-y-6 md:my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <motion.div
          className='flex flex-col gap-4 will-change-[transform,opacity] md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text font-title text-2xl font-bold leading-9 text-transparent dark:from-white dark:via-white/90 dark:to-white/70 sm:text-4xl sm:leading-[3.5rem]'>
            Hi I'm Yash{' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-[3.5rem]'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, index) => (
                  <div className={className} key={index}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            creating amazing apps.
          </h1>
          <div className='text-sm text-muted-foreground'>
            India • UTC/GMT +5.30
          </div>
        </motion.div>
        <motion.div
          className='relative size-20 md:size-28'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <BlurImage
            src='/images/avatar.png'
            className='rounded-full'
            width={112}
            height={112}
            alt='Hong'
            lazy={false}
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
