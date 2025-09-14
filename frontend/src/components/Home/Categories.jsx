import React from 'react'
import { Link } from 'react-router-dom'
import spice from '../../images/spice.png'
import oil from '../../images/oil.png'
import flour from '../../images/flour.png'
import ghee from '../../images/ghee.png'

function Categories() {
    return (
        <div className='mt-2'>
            <h2 className="text-5xl font-extrabold text-center mt-8 mb-8 font-['Poppins']">CATEGORIES</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-2 mx-auto items-start gap-y-4 lg:gap-y-8'>
                <Link to='/shop/spices'>
                    <img src={spice} alt="" className='h-[12vh] w-full lg:h-[250px] lg:w-[700px] object-cover'/>
                </Link>
                <Link to='/shop/oil'>
                    <img src={oil} alt="" className='h-[12vh] w-full lg:h-[250px] lg:w-[700px] object-cover'/>
                </Link>
                <Link to='/shop/flour'>
                    <img src={flour} alt="" className='h-[12vh] w-full lg:h-[250px] lg:w-[700px] object-cover'/>
                </Link>
                <Link to='/shop/ghee'>
                    <img src={ghee} alt="" className='h-[12vh] w-full lg:h-[250px] lg:w-[700px] object-cover'/>
                </Link>
            </div>
        </div>
    )
}

export default Categories
