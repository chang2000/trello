'use client'

import Image from 'next/image'
import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export interface Organization {
  id: string
  slug: string
  imageUri: string
  name: string
}

interface NavItemProps {
  isExpanded?: boolean
  isActive?: boolean
  organizationId?: any
  onExpand?: (id: string) => void
}

export function NavItem(
  {
    isExpanded,
    isActive,
    organization,
    onExpand,

  }: NavItemProps,
) {
  return (
    <AccordionItem
      value={organization.id}
      className="border-none"
    >

      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700',
        )}
      >

        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization"
            />
          </div>
          <span className="font-medium text-sm">
            {organization.name}
          </span>

        </div>

      </AccordionTrigger>

    </AccordionItem>
  )
}