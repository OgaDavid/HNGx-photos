import { Command, CommandInput } from '@/components/ui/command'
import React from 'react'

export default function SearchBar() {
  return (
    <Command>
        <CommandInput className="w-full md:w-[350px]" placeholder="Search images" />
    </Command>
  )
}
