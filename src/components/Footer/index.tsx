const index = () => {
    return (
        <div className="bg-black text-white font-syne border-t-[4px] relative border-primary">
            {/* Floating contact */}
            <div className="z-[2] text-black absolute top-[-12px] right-[calc(50%-11px)]">
                <p className="h-[22px] w-[110px] flex items-center justify-center rounded-full bg-primary text-[12px] leading-[14px] font-semibold">Contact Us</p>
            </div>

            <div className="container py-[20px] mx-auto flex items-center justify-between">

                <div className="flex flex-1 gap-[100px]">
                    <div className="flex flex-col items-center gap-[13px]">
                        <h6 className="uppercase text-primary font-semibold leading-[14px]">Address</h6>
                        <div className="flex items-center flex-col gap-[1.5rem]">
                            <p className="text-[12px] font-medium leading-[14px]">Lebanon, Beirut</p>
                            <p className="text-[12px] font-medium leading-[14px]">Lebanon, Tripoli</p>
                            <p className="text-[12px] font-medium leading-[14px]">Lebanon, Mount-Lebanon</p>
                            <p className="text-[12px] font-medium leading-[14px]">Lebanon, Jal El-Dib</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[13px]">
                        <h6 className="uppercase text-primary font-semibold leading-[14px]">email</h6>
                        <div className="flex items-center flex-col gap-[1.5rem]">
                            <p className="text-[12px] font-medium leading-[14px]">info@lu.edu.lb</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[13px]">
                        <h6 className="uppercase text-primary font-semibold leading-[14px]">Phone</h6>
                        <div className="flex items-center flex-col gap-[1.5rem]">
                            <p className="text-[12px] font-medium leading-[14px]">+961 01 123 456</p>
                            <p className="text-[12px] font-medium leading-[14px]">+961 06 123 456</p>
                            <p className="text-[12px] font-medium leading-[14px]">+961 05 123 456</p>
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="font-poppins w-[19%] flex items-start flex-col gap-[15px]">
                    <h4 className="uppercase text-[16px] leading-[24px] font-[700] text-primary">Get in touch with us</h4>
                    <p className="text-[14px] leading-[180%] font-normal">Send us an email if there is any questions in mind about our courses</p>
                    <input className="outline-none w-full rounded-[10px] text-black text-[13px] leading-[20px] px-[20px] py-[10px]" placeholder="Enter your email address" type="text" />
                    <button className="bg-secondary text-[13px] leading-[20px] px-[40px] py-[10px] rounded-[10px]">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index