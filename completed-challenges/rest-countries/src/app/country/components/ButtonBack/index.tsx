'use client'
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

export function ButtonBack() {
  return (
    <Link
      href={'/'}
      className="flex gap-2 rounded-lg items-center py-2 px-8 bg-white shadow-3xl "
    >
      <ArrowLeft size={20} />
      Back
    </Link>
  )
}
