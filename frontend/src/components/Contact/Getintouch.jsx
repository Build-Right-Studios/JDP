import {
    FaLinkedinIn,
    FaWhatsapp,
    FaGoogle,
    FaRegBuilding,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className=" p-6 md:p-16">
            <div className="max-w-7xl mx-auto flex md:ml-14 flex-col md:flex-row items-center justify-center md:gap-0 gap-6">

                <div className="bg-white shadow-2xl rounded-2xl p-4 md:p-10 w-full h-100 md:w-90 relative flex flex-col justify-center">

                    <div className="hidden md:flex h-[260px] justify-center absolute -left-17 top-1/2 transform -translate-y-1/2 flex-col space-y-3 bg-[#5c8a40] p-3 rounded-bl-2xl rounded-tl-2xl shadow-lg">
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaLinkedinIn className="text-[#5c8a40] text-xl" />
                        </a>
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaWhatsapp className="text-[#5c8a40] text-xl" />
                        </a>
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaGoogle className="text-[#5c8a40] text-xl" />
                        </a>
                    </div>

                    {/* Mobile Social Icons (below heading) */}
                    <div className="flex md:hidden justify-center gap-4 mb-6">
                        <a href="#" className="bg-[#5c8a40] p-3 rounded-full">
                            <FaLinkedinIn className="text-white text-xl" />
                        </a>
                        <a href="#" className="bg-[#5c8a40] p-3 rounded-full">
                            <FaWhatsapp className="text-white text-xl" />
                        </a>
                        <a href="#" className="bg-[#5c8a40] p-3 rounded-full">
                            <FaGoogle className="text-white text-xl" />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-[#5c8a40]">Get In Touch</h2>
                        <hr className="my-2" />
                        <br></br>

                        {/* Address */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#5c8a40] text-white p-3 rounded-full">
                                <FaRegBuilding className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold text-black">Meet Us</p>
                                <p className="text-gray-600 text-sm">
                                    PK A 10 Ground Floor Sector 122 Noida
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#5c8a40] text-white p-3 rounded-full">
                                <FaPhoneAlt className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold">Call Us</p>
                                <p className="text-gray-600 text-sm">+91-96677 95721</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#5c8a40] text-white p-3 rounded-full">
                                <FaEnvelope className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold">Email Us</p>
                                <p className="text-gray-600 text-sm">jaindesiandpure@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full h-[250px] md:h-[300px] rounded-br-2xl rounded-tr-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3022139499703!2d77.40088137533395!3d28.59070917568767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0c12c2adf7%3A0x8ac08afaf4a33c6e!2sJain%20Desi%20And%20Pure!5e0!3m2!1sen!2sin!4v1758046551483!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
