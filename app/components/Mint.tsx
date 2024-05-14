'use client'

import { useAccount, useChainId, useReadContracts } from 'wagmi'
import { erc20Abi, formatUnits, formatEther } from 'viem'
import { abi } from '../../abi'

export default function Mint() {
  const { status, address } = useAccount()
  const chainId = useChainId()
  const enableTestnets =
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? true : false
  const tokenAddress =
    enableTestnets && chainId === 11155111
      ? (process.env.NEXT_PUBLIC_TEST_TOKEN_ADDRESS as `0x${string}`)
      : (process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`)
  const nftAddress =
    enableTestnets && chainId === 11155111
      ? (process.env.NEXT_PUBLIC_TEST_NFT_ADDRESS as `0x${string}`)
      : (process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`)

  const tokenContract = {
    address: tokenAddress,
    abi: erc20Abi
  }

  const nftContract = {
    address: nftAddress,
    abi
  }

  const {
    data: readData,
    error,
    isPending
  } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        ...tokenContract,
        functionName: 'balanceOf',
        args: [`${address}` as `0x${string}`]
      },
      {
        ...tokenContract,
        functionName: 'decimals'
      },
      {
        ...nftContract,
        functionName: 'totalSupply'
      },
      {
        ...nftContract,
        functionName: 'maxSupply'
      },
      {
        ...nftContract,
        functionName: 'maxPerTransaction'
      },
      {
        ...nftContract,
        functionName: 'paused'
      },
      {
        ...nftContract,
        functionName: 'price'
      },
      {
        ...nftContract,
        functionName: 'reducedPrice'
      }
    ]
  })

  const [
    balance,
    decimals,
    totalSupply,
    maxSupply,
    maxMint,
    paused,
    price,
    holderPrice
  ] = readData || []

  const isHolder =
    balance &&
    decimals &&
    !isPending &&
    parseInt(formatUnits(balance, decimals)) > 69
      ? true
      : false

  if (status === 'disconnected') return <div>Connect Wallet</div>

  if (status === 'connecting' || status === 'reconnecting')
    return <div>Loading...</div>

  if (error) return <div>Error {error.message}</div>

  if (paused) return <div>Paused</div>

  if (totalSupply === maxSupply) return <div>Sold Out</div>

  return (
    <div className='m-6 p-4 bg-neutral-800/30 text-white'>
      <p className='text-3xl font-bold'>
        {isHolder ? 'Holder Price' : 'Price'}
      </p>
      <p className='text-sm'>
        {`${
          isHolder
            ? formatEther(holderPrice!, 'wei')
            : formatEther(price!, 'wei')
        } ETH`}
      </p>
    </div>
  )
}
