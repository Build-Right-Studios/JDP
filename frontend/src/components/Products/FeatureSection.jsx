import React from "react";
import { GiSprout, GiHotSpices } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

function FeatureSection() {
    const features = [
        {
            icon: <FaLeaf 
                className="mb-3 w-12 h-12"
                style={{
                    fill: "transparent",     // inside is transparent
                    stroke: "#5c8a40",       // edge color green
                    strokeWidth: 15           // thickness of edge
                }}
            />,
            title: "100% Organic & Chemical-Free",
        },
        {
            icon: <GiHotSpices
                className="mb-3 w-12 h-12"
                style={{
                    fill: "transparent",     // inside is transparent
                    stroke: "#5c8a40",       // edge color green
                    strokeWidth: 10           // thickness of edge
                }}
            />,
            title: "Cold-Pressed Oils & Pure Spices",
        },
        {
            icon: <GiSprout 
                className="mb-3 w-12 h-12"
                style={{
                    fill: "transparent",     // inside is transparent
                    stroke: "#5c8a40",       // edge color green
                    strokeWidth: 10           // thickness of edge
                }}
            />,
            title: "Sustainably Sourced & Eco-Friendly",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 border-1 border-[#5c8a40] shadow-sm text-center"
                >
                    {feature.icon}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {feature.title}
                    </h3>
                </div>
            ))}
        </div>
    );
}

export default FeatureSection;
