import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { CarouselDefault } from './Carousel/CarouselDefault';


const ServicesContent = () => {



  return ( <>

        <CarouselDefault/>
        <div className='px-4 mx-auto max-w-screen-md'>
            <h2 className='heading text-center'>
            Contact Us
            </h2>
            <p className='mb-8 lg:mb-16 font-light text-center text__para'>
            Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>
        </div>

</>
  );
}


  

export default ServicesContent