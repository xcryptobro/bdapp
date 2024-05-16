import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Header() {
  return (
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
      <p className=' text-4xl font-extrabold fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4'>
        Bird Dog NFT
      </p>
      <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:size-auto '>
        <ConnectButton />
      </div>
    </div>
  )
}
