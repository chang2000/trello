'use client'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import type { Organization } from './nav-item'
import { NavItem } from './nav-item'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  storageKey?: string
}

export function Sidebar({
  storageKey = 't-sidebar-state',
}: SidebarProps) {
  const [expanded, setExpended] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  )

  const {
    organization: activeOrganzation,
    isLoaded: isLoaddOrg,
  } = useOrganization()

  const {
    userMemberships,
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc: string[], key: string) => {
      if (expanded[key])
        acc.push(key)
      return acc
    }, [])

  const onExpand = (id: string) => {
    setExpended(curr => ({
      ...curr,
      [id]: !expanded[id],
    }))
  }

  if (!isLoaddOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    )
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">
          Workspaces
        </span>
        <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={organization.id === activeOrganzation?.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  )
}
