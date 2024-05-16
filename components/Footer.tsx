export default function Footer() {
  return (
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
        <h2 className='text-md font-semibold'>GitHub Repo</h2>
        <p className='m-0 max-w-[30ch] text-balance text-xs'>
          GitHub source code for minting website.
        </p>
      </a>
    </div>
  )
}
