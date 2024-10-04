// container

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full max-w-screen-2xl px-4 md:px-16 2xl:px-10'>{children}</div>
  )
}