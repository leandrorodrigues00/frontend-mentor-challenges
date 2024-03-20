import { Aside } from '@/components/aside'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-magnolia p-3">
      <main className="flex w-full max-w-[58.75rem] flex-col gap-8 rounded-lg p-4 xs:flex-row xs:bg-white md:gap-[6.25rem] -sm:items-center ">
        <Aside />
        {children}
      </main>
    </div>
  )
}
