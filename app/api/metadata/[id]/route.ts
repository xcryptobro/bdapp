import { NextResponse } from 'next/server'
import { revealed } from '@/lib/revealed'

const lastRevealedId = 152
const placeholderUri =
  'https://arweave.net/_vw6MkSxYTzSIF7ie2BVSVEsg7C3x8pMAwSnYs6ubzA'

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const res = await fetch(placeholderUri)
  const placeholderMetadata = await res.json()

  if (id < 1 || id > lastRevealedId) {
    return NextResponse.json(placeholderMetadata)
  }

  const metadata = await revealed.find((i) => i.name === `Birddog #${id}`)
  return NextResponse.json(metadata)
}
