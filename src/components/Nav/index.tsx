import Logo from '../../assets/ul_logo.png'

const index = () => {
  return (
    <div className="bg-black py-[14px] border-b-[4px] border-primary">
      <div className="container mx-auto flex justify-between">

        {/* Logo */}
        <div className='flex text-white items-center gap-[10px]'>
          <img src={Logo} className="rounded-md" alt="" />
          <h2 className=' font-koulen text-[30px] leading-[54px]'>Lebanese University</h2>
        </div>

        {/* Form */}
        <div className='font-syne text-white flex gap-[20px] items-center'>

          <div className='flex flex-col h-full justify-center gap-[10px]'>
            <p className='text-[12px] font-medium leading-[14px]'>SIS Code</p>
            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black outline-none' type="text" />
          </div>

          <div className='flex flex-col h-full justify-center gap-[10px] relative'>
            <p className='text-[12px] font-medium leading-[14px]'>Password</p>
            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black outline-none' type="password" />
            <p className='absolute cursor-pointer bottom-[-4px] text-[12px] font-medium leading-[14px]'>Forgot your password?</p>
          </div>

          <div className='flex flex-col pt-[1.3rem] justify-center gap-[10px] h-full items-center'>
            <button className='font-bold text-[12px] py-[5px] px-[30px] rounded-[10px] bg-secondary'>Log in</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default index