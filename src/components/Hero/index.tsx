const index = () => {
    return (
        <div className="hero w-full h-[70vh]">
            <div className="container mx-auto flex justify-between items-center h-full">

                {/* Words */}
                <div className="z-[2] text-white flex w-[37%] flex-col">
                    <h1 className="uppercase font-koulen font-bold text-[60px] tracking-[0.15em] leading-[70px]">We care about your <span className="text-primary">education</span></h1>
                    <p>Apply now for the finest University in Lebanon and begin your dream journey with your friends.</p>
                </div>

                {/* Form */}
                <div className="z-[2] text-white font-tajawal flex flex-col">
                    <h3 className="uppercase text-center cursor-pointer font-semibold text-[30px] leading-[36px]">Academic Registeration</h3>
                    <div className="w-full bg-white h-[1px]" />
                    <p className="font-syne text-center pt-[4px] font-medium text-[12px] leading-[14px]">Apply for the registeration (new and old students)</p>

                    <div className="flex gap-[3px] mt-[1rem] items-center">
                        <div className="flex flex-col">
                            <h3 className="uppercase cursor-pointer font-semibold text-[30px] leading-[36px]">New membership</h3>
                            <div className="w-full bg-white h-[1px]" />
                        </div>
                        <p>(for students ONLY)</p>
                    </div>

                    <div className="mt-[1rem] w-full text-syne text-primary">
                        <p className="text-[12px] text-center cursor-pointer font-medium leading-[14px]">Click here in case you don't know your SIS code or your File number</p>
                        <div className="w-full bg-primary h-[1px]" />
                    </div>

                    {/* Inputs */}
                    <div className="mt-[1rem] font-syne text-white flex flex-col gap-[12px] w-full">
                        <div className="flex justify-between gap-[7px] items-center">
                            <p className="text-[13px] font-medium leading-[14px]">Student File Number</p>
                            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black min-w-[240px] outline-none' type="text" />
                        </div>
                        <div className="flex justify-between gap-[7px] items-center">
                            <p className="text-[13px] font-medium leading-[14px]">SIS Code</p>
                            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black min-w-[240px] outline-none' type="text" />
                        </div>
                        <div className="flex justify-between gap-[7px] items-center">
                            <p className="text-[13px] font-medium leading-[14px]">Date of Birth</p>
                            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black min-w-[240px] outline-none' type="text" />
                        </div>
                        <div className="flex justify-between gap-[7px] items-center">
                            <p className="text-[13px] font-medium leading-[14px]">Password</p>
                            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black min-w-[240px] outline-none' type="text" />
                        </div>
                        <div className="flex justify-between gap-[7px] items-center">
                            <p className="text-[13px] font-medium leading-[14px]">Confirm Password</p>
                            <input className='rounded-[10px] text-[12px] px-2 py-[5px] text-black min-w-[240px] outline-none' type="text" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index