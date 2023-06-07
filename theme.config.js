/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoFolderOpenOutline, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { TfiHome } from 'react-icons/tfi'
import { SlUser, SlEnvolope } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  // {
  //   name: 'Home',
  //   slug: '/',
  //   Icon: TfiHome,
  //   number: 1,
  // },
  {
    name: 'Accueil',
    slug: '/',
    Icon: TfiHome,
    number: null,
  },
  // {
  //   name: 'Home (3)',
  //   slug: '/index-3',
  //   Icon: TfiHome,
  //   number: 3,
  // },
  // {
  //   name: 'Home (4)',
  //   slug: '/index-4',
  //   Icon: TfiHome,
  //   number: 4,
  // },
  {
    name: 'A Propos',
    slug: '/about',
    Icon: SlUser,
  },
  // {
  //   name: 'Services',
  //   slug: '/services',
  //   Icon: SlBriefcase,
  // },
  // {
  //   name: 'Articles',
  //   slug: '/blog',
  //   Icon: TfiPencilAlt,
  // },
  {
    name: 'Portfolio',
    slug: '/portfolio',
    Icon: IoFolderOpenOutline,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Github',
    url: 'https://github.com/GregBluwell',
    Icon: IoLogoGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/greg-fouetillou-a2047a266/',
    Icon: IoLogoLinkedin,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'contact@grebluwell.dev',
    sender: 'contact@grebluwell.dev',
    subject: 'EMAIL FROM GREGBLUWELL.DEV',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Greg Fouetillou',
  siteName: 'Greg Fouetillou',
  defaultTitle: 'Greg Fouetillou | Portfolio',
  titleTemplate: 'Greg Fouetillou | Portfolio',
  description: 'Greg Fouetillou, front-end web developer, portfolio website.',
  email: 'greg.bluwell@proton.me',
  locale: 'en_US',
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
}
