const index = () => {
    return (
        <div className="register text-white font-syne w-full h-[70vh]">
            <div className="container mx-auto flex flex-col h-full justify-center">
                <h1 className="z-[2] drop-shadow-xl uppercase font-koulen font-bold text-[60px] tracking-[0.15em] leading-[70px]">Anything is <span className="text-primary">possible!</span></h1>

                <div className="z-[2] w-[40%] flex flex-col gap-[1rem]">
                    <div className="flex flex-col gap-[2rem]">
                        <p className="text-[16px] leading-[19px] font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-[16px] leading-[19px] font-medium">
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className="mt-[1rem] w-[80%] flex items-center gap-[15px]">
                        <input className='rounded-[10px] border-[2px] border-white flex-1 text-[12px] px-2 py-[10px] text-black outline-none' type="text" placeholder="Enter your E-mail" />
                        <button className="flex items-center gap-[8px] bg-secondary px-[42px] py-[10px] rounded-[10px]">
                            Register Now <span>{'>'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index