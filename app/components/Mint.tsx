'use client'

import { useAccount, useChainId, useReadContracts } from 'wagmi'
import { erc20Abi, formatUnits, formatEther } from 'viem'
import { abi } from '../../abi'
import { Loading } from './Loading'

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
    bigIntBalance,
    bigIntDecimals,
    bigIntTotalSupply,
    bigIntMaxSupply,
    maxMint,
    paused,
    price,
    holderPrice
  ] = readData || []

  const balance =
    (bigIntBalance &&
      bigIntDecimals &&
      parseInt(formatUnits(bigIntBalance, bigIntDecimals))) ||
    0
  const totalSupply =
    (bigIntTotalSupply && parseInt(formatUnits(bigIntTotalSupply, 0))) || 0
  const maxSupply =
    (bigIntMaxSupply && parseInt(formatUnits(bigIntMaxSupply, 0))) || 5100

  const isHolder = balance && balance > 69 ? true : false

  return (
    <div className='m-6 p-4 bg-neutral-800/30 text-white'>
      {status === 'disconnected' && <Loading />}
      {status === 'connecting' || (status === 'reconnecting' && <Loading />)}
      {error && <div>Error {error.message}</div>}
      {paused && <div>Paused</div>}
      {maxSupply > 0 && totalSupply === maxSupply && <div>Sold Out</div>}
      <p className='text-3xl font-bold'>
        {isHolder ? 'Holder Price' : 'Price'}
      </p>
      <p className='text-sm'>
        {holderPrice && price && (
          <>
            {isHolder
              ? formatEther(holderPrice, 'wei')
              : formatEther(price, 'wei')}
            {' ETH'}
          </>
        )}
      </p>
    </div>
  )
}
