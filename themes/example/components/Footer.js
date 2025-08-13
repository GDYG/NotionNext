import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import CopyRightDate from '@/components/CopyRightDate'
import DarkModeButton from '@/components/DarkModeButton'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import React from 'react'

export const Footer = props => {
  return (
    <footer className='z-10 relative w-full bg-white px-6 space-y-1 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray '>
      <DarkModeButton className='text-center pt-4' />
      <div className='container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm'>
        <div className='text-center'>
          {' '}
          &copy;{`${CopyRightDate}`} {siteConfig('AUTHOR')}. All rights
          reserved.
        </div>
        <div className='md:p-0 text-center md:text-right text-xs'>
          {/* 右侧链接 */}
          {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
          {siteConfig('BEI_AN') && (
            <a
              href='https://beian.miit.gov.cn/'
              className='text-black dark:text-gray-200 no-underline hover:underline ml-4'>
              {siteConfig('BEI_AN')}{' '}
            </a>
          )}
          <span className='dark:text-gray-200 no-underline ml-4'>
            Powered by
            <a
              href='https://github.com/GDYG/NotionNext'
              className=' hover:underline'>
              {' '}
              NotionNext {siteConfig('VERSION')}{' '}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
