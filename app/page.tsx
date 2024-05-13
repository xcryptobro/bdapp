import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className=' text-4xl font-extrabold fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4'>
          Bird Dog NFT
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/birddogholder.gif'
          alt='Birddog Placeholder Image'
          width={420}
          height={420}
          priority
        />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left'>
        <a
          href='https://twitter.com/51Host'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='text-md font-semibold'>51 (@51Host)</h2>
          <p className='m-0 max-w-[30ch] text-balance text-xs'>
            An NFT project by 51 created for the 0x70 BirdDog community.
          </p>
        </a>
        <a
          href='https://twitter.com/DEWMONE'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='text-md font-semibold'>Dewm (@DewnOne)</h2>
          <p className='m-0 max-w-[30ch] text-balance text-xs'>
            Design and traits created by DewmOne.
          </p>
        </a>
        <a
          href='https://twitter.com/xCryptoBro'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='text-md font-semibold'>xCB (@xCryptoBro)</h2>
          <p className='m-0 max-w-[30ch] text-balance text-xs'>
            Contract and website created by xCryptoBro.
          </p>
        </a>
        <a
          href='https://etherscan.io/address/0xdfc279e5581e5d7e632de61e12d2bd518c25b63f#code'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='text-md font-semibold'>Etherscan Contract</h2>
          <p className='m-0 max-w-[30ch] text-balance text-xs'>
            Official Etherscan NFT contract.
          </p>
        </a>
        <a
          href='https://github.com/xcryptobro/bdapp'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 hover:text-white'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='text-md font-semibold'>GitHub Repository</h2>
          <p className='m-0 max-w-[30ch] text-balance text-xs'>
            GitHub source code for minting website.
          </p>
        </a>
      </div>
    </main>
  )
}
