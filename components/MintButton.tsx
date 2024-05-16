'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { erc20Abi, parseEther } from 'viem'
import {
  type BaseError,
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt
} from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useDebouncedCallback } from 'use-debounce'
import { MdAddCircle } from 'react-icons/md'
import { MdRemoveCircle } from 'react-icons/md'
import { abi } from '@/lib/abi'
import { CardSkeleton } from '@/components/CardSkeleton'

export default function MintButton() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`
  const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`

  const { address, status: accountStatus } = useAccount()
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { data: balance, status: readStatus } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'balanceOf',
    args: [address as `0x${string}`]
  })

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash
    })

  const tmpQty = Number(searchParams.get('qty')) || 1
  const currQty = tmpQty > 20 ? 20 : tmpQty < 1 ? 1 : tmpQty

  const isHolder = balance && balance > 0 ? true : false
  const price = isHolder ? 0.0051 : 0.01
  const total = currQty * price

  function countDecimals(num: number) {
    if (Math.floor(num) !== num) return num.toString().split('.')[1].length || 0
    return 0
  }

  const handleQty = useDebouncedCallback((qty) => {
    const params = new URLSearchParams(searchParams)
    if (qty) {
      params.set('qty', qty)
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  function increaseQty() {
    const newQty = currQty < 20 ? currQty + 1 : 20
    if (currQty !== newQty) handleQty(newQty.toString())
  }

  function decreaseQty() {
    const newQty = currQty > 1 ? currQty - 1 : 1
    if (currQty !== newQty) handleQty(newQty.toString())
  }

  return (
    <div className='bg-white rounded-2xl shadow-md p-4 text-center items-center'>
      {accountStatus === 'connected' ? (
        <div>
          <h2 className='text-lg font-semibold'>QUANTITY</h2>
          <div className='flex flex-row justify-center mx-auto w-40'>
            <button
              onClick={decreaseQty}
              className='mr-2'
              disabled={currQty < 2}
            >
              <MdRemoveCircle size={'2em'} />
            </button>
            <input
              className=' mx-auto font-bold  peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-lg outline-2 placeholder:text-gray-500'
              placeholder={'1'}
              onChange={(e) => {
                handleQty(e.target.value)
              }}
              value={currQty}
            />
            <button onClick={increaseQty} className='ml-2'>
              <MdAddCircle size={'2em'} />
            </button>
          </div>

          <div>
            <div>
              <span className='text-black font-semibold text-lg'>
                {readStatus === 'success' && total
                  ? `${price} x ${currQty} = ${total} ETH`
                  : 'Loading total...'}
              </span>
            </div>
          </div>
          <div>
            {isPending ? (
              <div className=' bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded-2xl text-2xl font-light'>
                Confirm in Wallet
              </div>
            ) : (
              <button
                onClick={() => {
                  writeContract({
                    abi,
                    address: nftAddress,
                    functionName:
                      balance && balance > 0 ? 'holderMint' : 'mint',
                    args: [address as `0x${string}`, BigInt(currQty)],
                    value: parseEther(
                      total.toFixed(balance && balance > 0 ? 4 : 2)
                    )
                  })
                }}
                className='bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-2xl text-4xl font-light'
              >
                Mint
              </button>
            )}
          </div>
        </div>
      ) : accountStatus === 'disconnected' ? (
        <ConnectButton />
      ) : (
        <CardSkeleton />
      )}
      <div className='max-w-sm text-sm text-gray-800'>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>{(error as BaseError).shortMessage || error.message}</div>
        )}
      </div>
    </div>
  )
}
