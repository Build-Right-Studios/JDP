import React from 'react'
import CategoryCard from "./CategoryCard";
import oil_img from '../images/oil.jpg'
import spices_img from '../images/spices.jpg'
import ghee_img from '../images/ghee.webp'
import flour_img from '../images/flour.jpg'

const categories = [
    { image: oil_img, label: "OIL", link: "/shop/oil" },
    { image: spices_img, label: "SPICES", link: "/shop/spices" },
    { image: ghee_img, label: "GHEE", link: "/shop/ghee" },
    { image: flour_img, label: "FLOUR", link: "/shop/flour" },
];

function Categories() {
    return (
        <div className='mx-auto px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100'>
            <div className="space-y-8">
                <div className="space-y-6 px-2">
                    <h1 className="text-[#8B4513] text-5xl lg:text-7xl font-bold leading-tight montserrat-medium">
                        Categories
                    </h1>

                    <section className="p-6 lg:px-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {categories.map((cat, i) => (
                                <CategoryCard key={i} image={cat.image} label={cat.label} link= {cat.link}/>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default Categories