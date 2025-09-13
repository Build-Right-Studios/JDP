import React from 'react'

function BestSellerCard(props) {
    return (
        <div className='w-[420px] bg-[whitesmoke] border-2 border-gray-200'>
            <div className="overflow-hidden w-full">
                <div style={{backgroundColor: props.color}} className="relative py-8 text-center text-white text-3xl font-bold">
                    {props.title || "Sun Flower Oil"}
                    <svg
                        className="absolute bottom-0 left-0 w-full h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 8"
                        preserveAspectRatio="none"
                        style={{ display: 'block', transform: 'translateY(1px)' }}
                    >
                        <polygon
                            fill="#f5f5f5"
                            points="0,8 2.5,0 5,8 7.5,0 10,8 12.5,0 15,8 17.5,0 20,8 22.5,0 25,8 27.5,0 30,8 32.5,0 35,8 37.5,0 40,8 42.5,0 45,8 47.5,0 50,8 52.5,0 55,8 57.5,0 60,8 62.5,0 65,8 67.5,0 70,8 72.5,0 75,8 77.5,0 80,8 82.5,0 85,8 87.5,0 90,8 92.5,0 95,8 97.5,0 100,8"
                        />
                    </svg>
                </div>
                <div className="p-5 text-center">
                    <img src={props.image} alt={props.title} className="w-48 h-48 object-contain mx-auto" />
                </div>

                <div className="px-5 pb-5 text-center">
                    <h3 className="text-xl font-semibold mb-2">PREMIUM & FRESH</h3>
                    <p className="text-md text-gray-800 leading-relaxed text-justify">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BestSellerCard