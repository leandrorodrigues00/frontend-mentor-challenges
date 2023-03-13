/* eslint-disable no-unused-vars */
'use client'

import * as Select from '@radix-ui/react-select'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { CaretDown, Check } from 'phosphor-react'
import { useEffect, useState, useTransition } from 'react'

export function SelectRegions() {
  const router = useRouter()

  const [SelectedRegions, setSelectedRegions] = useState('')
  const [isPending, startTransition] = useTransition()
  const [isCaching, setIsCaching] = useState(false)
  const isMutating = isCaching || isPending

  useEffect(() => {
    // async function updateMessage() {
    //   const message = {
    //     source: 'radixSelect',
    //     region: SelectedRegions,
    //   }
    //   await fetch('/api/countries', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(message),
    //   })
    // }
    // updateMessage()
    function setRegionCookie() {
      setIsCaching(true)
      setCookie(null, 'regionCookie', SelectedRegions, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setIsCaching(false)

      startTransition(() => {
        router.refresh()
      })
    }
    setRegionCookie()
  }, [SelectedRegions, router])

  return (
    <Select.Root value={SelectedRegions} onValueChange={setSelectedRegions}>
      <Select.Trigger
        className={`flex max-w-[185px] w-full justify-between items-center bg-white rounded-lg text-sm px-4 py-3 dark:bg-[#2b3945] `}
      >
        <Select.Value aria-label={SelectedRegions}>
          {SelectedRegions || 'Filter by region'}
        </Select.Value>
        <Select.Icon>
          <CaretDown size={16} weight="thin" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="overflow-hidden bg-white mt-1 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:bg-[#2b3945]"
        >
          <Select.Viewport>
            <Select.Group>
              <Select.Item
                value="Africa"
                className="text-[13px] w-[var(--radix-select-trigger-width)] leading-none rounded-[3px] flex items-center h-[1.56rem] pr-[2.18rem] pl-[1.56rem] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              >
                <Select.ItemText>Africa</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check size={16} weight="thin" />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item
                value="Americas"
                className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              >
                <Select.ItemText>Americas</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check size={16} weight="thin" />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item
                value="Asia"
                className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              >
                <Select.ItemText>Asia</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check size={16} weight="thin" />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item
                value="Europe"
                className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              >
                <Select.ItemText>Europe</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check size={16} weight="thin" />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item
                value="Oceania"
                className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-purple-500 data-[highlighted]:text-white"
              >
                <Select.ItemText>Oceania</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <Check size={16} weight="thin" />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
