interface FlagProps {
  params: {
    id: string
  }
}

export default function Flag({ params }: FlagProps) {
  return (
    <>
      <h1>Flag: {params.id}</h1>
    </>
  )
}
