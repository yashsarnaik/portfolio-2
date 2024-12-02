'use client'

import {
  SiAnaconda,
  SiCloudflare,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiJupyter,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPowerbi,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
  SiTableau,
  SiTensorflow,
  SiVisualstudiocode
} from '@icons-pack/react-simple-icons'
import { Marquee } from '@tszhong0411/ui'
import { ZapIcon } from 'lucide-react'
import * as React from 'react'

const StacksCard = () => {
  return (
    <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiGithub className='size-10' />
        <SiAnaconda className='size-10' />
        <SiStreamlit className='size-10' />
        <SiPytorch className='size-10' />
        <SiGooglecolab className='size-10' />
        <SiPostman className='size-10' />
        <SiDocker className='size-10' />
        <SiJupyter className='size-10' />
        <SiPython className='size-10' />
        <SiPostgresql className='size-10' />
        <SiPowerbi className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiScikitlearn className='size-10' />
        <SiMysql className='size-10' />
        <SiPandas className='size-10' />
        <SiGit className='size-10' />
        <SiNumpy className='size-10' />
        <SiVisualstudiocode className='size-10' />
        <SiCloudflare className='size-10' />
        <SiFastapi className='size-10' />
        <SiFlask className='size-10' />
        <SiTableau className='size-10' />
        <SiTensorflow className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
