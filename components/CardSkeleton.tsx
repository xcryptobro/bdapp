export function CardSkeleton() {
  return (
    <div
      className={`before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className='flex items-center justify-center'>
        <div className='m-2 h-3 w-16 rounded-md bg-gray-200 text-sm font-medium' />
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-4 w-4 rounded-full bg-gray-200' />
        <div className='mx-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium' />
        <div className='h-4 w-4 rounded-full bg-gray-200' />
      </div>
      <div className='flex items-center justify-center'>
        <div className='m-2 h-2 w-16 rounded-md bg-gray-200 text-sm font-medium' />
      </div>
      <div className='flex items-center justify-center truncate rounded-xl px-4 py-4'>
        <div className='h-7 w-20 rounded-md bg-gray-200' />
      </div>
    </div>
  )
}
