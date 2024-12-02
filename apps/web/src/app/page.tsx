import type { Metadata } from 'next'
import * as React from 'react'

import AboutMe from '@/components/home/about-me'
import GetInTouch from '@/components/home/get-in-touch'
import Hero from '@/components/home/hero'
import SelectedProjects from '@/components/home/selected-projects'
import { SITE_URL } from '@/lib/constants'
import { getAllPages, type ProjectMetadata } from '@/lib/mdx'

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL
  }
}

const HomePage = () => {
  const projects = getAllPages<ProjectMetadata>('projects')

  return (
    <>
      <Hero />
      <AboutMe />
      <SelectedProjects projects={projects} />

      <GetInTouch />
    </>
  )
}

export default HomePage
