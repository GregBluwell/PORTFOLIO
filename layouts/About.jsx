import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/Reveal'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import { BiLinkExternal } from 'react-icons/bi'
import Link from 'next/link'

const History = ({ title, list }) => (
  <>
    <h3> {title} </h3>
    <Reveal
      animation="fade-in scale-x"
      className="h-1.5 bg-gradient-to-r from-black via-beta to-alpha"
    />
    <div className="mt-6 flex flex-col md:mt-12">
      {list?.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          <div className="card-container flex flex-col " key={`item-${i}`}>
            <div className="card-line-1  inline-flex items-center justify-between">
              <div id="card-logo-container" className="">
                <Link href={item.linkURL} target="_blank" rel="noopener noreferrer">
                  <Image src={item.imgURL} width="200" height="50" alt={item.imgAlt} id={item.id} className="card-logo" />
                </Link>

                <Link href={item.linkURL} rel="noreferrer" target="_blank">
                  <span className="about-ext-links text-omega-400">
                    <BiLinkExternal />
                  </span>
                </Link>
              </div>
              <div className="card-date-container">
                <small className="ml-auto shrink-0 bg-omega-200 py-1 px-2 text-omega-700 opacity-90">
                  {item.date}
                </small>
              </div>
            </div>
            <div className="card-line-2 mt-2 flex flex-col ">
              <div className="card-title-container">
                <h6 className="m-0 pr-1  font-semibold">{item.name}</h6>
              </div>
              <div className="">{item.description}</div>
            </div>
          </div>
          <hr className="my-6" />
        </React.Fragment>
      ))}
    </div>
  </>
)

const Skill = ({ title, icon, level }) => (
  <div className="flex items-center ">
    {icon && (
      <Icon width={28} height={28} {...icon} className="mr-3 h-7 w-7 fill-current text-omega-500" />
    )}
    <small className="font-bold">{title}</small>
    <div className=" border border-white hidden ml-auto space-x-px ">
      {Array(5)
        .fill(null)
        .map((_, k) => (
          <span
            key={`${title}${k}-f`}
            className={classNames(
              'inline-block w-3 h-3 lg:w-2.5 lg:h-2.5 ',
              k + 1 <= level ? 'bg-gradient-to-tr from-accent-700 to-accent' : 'bg-omega-700'
            )}
          />
        ))}
    </div>
  </div>
)

const SkillSet = ({ title, list }) => (
  <div className=" bg-gradient-omega-900 p-6 md:px-8 md:py-8">
    <p className="col-span-3 mt-0 mb-6 self-center border-l-2 border-alpha pl-3 text-white">
      {title}
    </p>
    <div className=" grid md:grid-cols-fluid gap-y-3 gap-x-8 [--tw-fluid-col-min:12rem]">
      {list?.map((props, j) => (
        <Reveal key={j} animation="fade-in" delay={j * 200}>
          <Skill {...props} />
        </Reveal>
      ))}
    </div>
  </div>
)

const Layout = ({ personal_info = {}, cta = {}, skills_header, skills, history }) => {
  return (
    <div className="mx-auto">
      <div className="prose prose-invert md:flex">
        <div className="relative flex h-screen basis-1/3 flex-col justify-between pb-24 md:h-auto md:items-center md:py-12">
          <div className=" not-prose absolute top-0 left-0 h-full w-full bg-omega-900 grayscale">
            {personal_info.images?.[0] && (
              <Image
                src={personal_info.images[0].src}
                alt={personal_info.images[0].alt}
                animation="fade-in zoom-out"
                className="object-cover"
                priority
                fill
              />
            )}
            <div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black/90" />
          </div>
          <div className="z-10 p-6 text-center bg-omega-900">
            <h3 className="inline text-white">{personal_info.name}</h3>
          </div>
          <div className="z-10 p-6 text-center md:p-8">
            <ContentRenderer source={cta} />
          </div>
        </div>
        <div className="w-full ">
          {skills_header && (
            <div className=" bg-gradient-omega-900 p-4 md:p-12">
              <h3 className="mb-2">{skills_header.title}</h3>
              {skills_header.list && (
                <h3 className="inline">
                  <Typewriter lines={skills_header.list} lineClassName="text-gradient-500" />
                </h3>
              )}
            </div>
          )}
          {skills && (
            <div className="grid grid-cols-1 items-start divide-y divide-omega-700 shadow-xl">
              {skills.map((props, i) => (
                <SkillSet key={i} {...props} />
              ))}
            </div>
          )}
          <Reveal animation="fade-in slide-in-top" className="prose p-6 dark:prose-invert md:p-12">
            <ContentRenderer source={personal_info} />
          </Reveal>
        </div>
      </div>
      {history && (
        <div className="prose flex-wrap justify-between bg-white p-6 md:flex">
          {history.map((props, i) => (
            <div key={i} className="flex-1 md:p-12">
              <History {...props} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Layout
