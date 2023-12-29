import React from 'react';

const Hero = () => {

    const dataHero = [
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/1.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/8.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/4.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/5.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/2.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/9.png",
        },
        {
            img : "https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png",
        }
    ]

  return (
    <div className='w-[full] as:flex-col sm:h-screen flex sm:flex-row overflow-hidden'>
        {/* First half */}

        <div className='sm:w-[50%] sm:h-[100%] bg-blackY relative'>
            <img className='absolute hidden sm:block' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/shapes/18.png" alt="" />
            <img className='absolute as:top-4 hidden sm:block sm:top-20 animate-bounce rotate-70 left-10' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/2.png" alt="" />
            <h1 className='lg:text-[60px] as:text-center sm:text-left as:text-[33px] xs:text-[43px] ss:text-[47px] km:text-[50px] sm:text-[45px] sm:pl-12 md:pl-16 lg:pl-28 text-white font-black as:mt-20 sm:mt-60 font-sans'>ENJOY OUR <br/> DELICIOUS <span className='text-[#f93]'>FOOD</span></h1>

            <div className='md:ml-16 sm:ml-12 flex flex-col as:items-center sm:items-start pt-6 lg:ml-28'>
                <div className='flex items-center h-[50px]'>
                  <div><input className='mt-4 as:text-[16px] sm:text-[22px] xs:text-[19px] text-white outline-none border-[1px] border-white bg-black as:py-2 sm:py-3 flex text-center rounded-lg font-bold' type="text" readOnly value={"Buy One. Get One"}/></div>
                  <div><button className='as:text-[14px] xs:text-[15px] font-bold text-white bg-primary as:px-3 as:py-2 sm:px-4 mt-4 sm:py-3 rounded-lg ml-5 hover:text-primary hover:border-primary hover:border hover:bg-black'>Try it now</button></div>
                </div>
                <h1 className='mt-7 text-[30px] font-semibold text-white'>Price <span className='text-[#f93]'>$10.50</span></h1>
                <img className='absolute left-0 bottom-0 animate-bounce' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/6.png" alt="" />
            </div>
        </div>



        {/* Second Half */}

        <div className='as:w-[100%] sm:w-[50%] as:bg-red-500 h-[100%] flex as:flex-col sm:flex-row relative'>

            {/* Second Half */}

            <div className='absolute top-0 w-[100%] ss:translate-x-8 km:translate-x-28 as:ml-auto as:mr-auto as:p-5 sm:translate-x-16 sm:translate-y-28 md:translate-y-20'>
                <img className='as:mt-4 md:mt-auto animate-spin' src={dataHero[0].img} alt="" srcset="" />
                <img className='absolute top-0 ' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/8.png" alt="" />
                <img className='animate-bounce absolute top-0 right-0' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/4.png" alt="" />
                <img className='absolute right-0 left-[85%] bottom-0 top-[78%]' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/9.png" alt="" />
                <img className='absolute as:hidden sm:block bottom-0 animate-bounce left-0 rotate-0' src="https://html.softtechitltd.com/khadyo/khadyo/assets/images/img/2.png" alt="" srcset="" />
            </div>

            <div className='as:w-[100%] sm:w-[60%] as:h-[60vh] xs:h-[75vh] ss:h-[92vh] sm:h-[100%] as:bg-blackY sm:bg-heroBrown'>

            </div>

            
            {/* Third Half */}

            <div className='as:hidden sm:block as:w-[100%] sm:w-[40%] h-[100%] bg-blackY'>

            </div>
        </div>


    </div>
  )
}

export default Hero
