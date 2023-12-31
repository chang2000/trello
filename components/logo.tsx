import Image from 'next/image'
import Link from 'next/link'
import localFront from 'next/font/local'
import { cn } from '@/lib/utils'

const headingFont = localFront({
  src: '../public/fonts/font.woff2',
})

export function Logo() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Taskify Logo"
          width={30}
          height={30}
        />
        <p className={cn('text-lg text-neutral-700 pb-1', headingFont.className)}>
          Taskify
        </p>
        {/* <span className="text-xl font-bold">Taskify</span> */}
      </div>
    </Link>
  )
}
