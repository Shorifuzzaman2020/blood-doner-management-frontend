

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import OrganizationBanner from "../../components/OrganizationBanner";

export default function Home() {

    const [topDoners, setTopDoners] = useState([]);

    useEffect(() => {
        fetchTopDoners();
    }, []);

    const fetchTopDoners = async () => {
        const res = await axios.get("https://blood-doner-server.vercel.app/api/doners/top");
        setTopDoners(res.data);
    };

    return (
        <div className="w-11/12 mx-auto">

            {/* 🧡 Banner Slider */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3500 }}
                    loop
                    className="lg:h-[420px]"
                >

                    {/* <SwiperSlide>
                        <div className="lg:flex lg:justify-center">
                            <div>
                                <img
                                    src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
                                    alt="banner"
                                    className=" w-full max-w-6xl mx-auto border-4 border-black p-2 sm:p-3 md:p-6 rounded-lg shadow-lg object-contain"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://i.ibb.co.com/DDbv4q69/484176661-1050460523789100-2658054001492228975-n.jpg"
                                    alt="banner"
                                    className=" w-full max-w-6xl mx-auto border-4 border-black p-2 sm:p-3 md:p-6 rounded-lg shadow-lg object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide> */}

                    <SwiperSlide>
                        <div className="h-full flex flex-col lg:flex-row items-center justify-center">

                            {/* Image 1 */}
                            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                                <img
                                    src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
                                    alt="banner"
                                    className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Image 2 */}
                            <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                                <img
                                    src="https://i.ibb.co.com/DDbv4q69/484176661-1050460523789100-2658054001492228975-n.jpg"
                                    alt="banner"
                                    className="max-h-full max-w-full object-contain border-4 border-black rounded-lg shadow-lg"
                                />
                            </div>

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <OrganizationBanner />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* 🏆 Top 10 Doners Section */}
            <section className="my-14">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
                    🏆 Top 10 Blood Doners
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {topDoners.map((doner, index) => (
                        <div key={index}
                            className="bg-base-100 shadow-xl rounded-xl p-5 hover:scale-105 transition">

                            <h3 className="text-lg font-bold text-red-600">
                                {doner.name}
                            </h3>

                            <p className="mt-1"><b>Blood:</b> {doner.bloodGroup}</p>
                            <p><b>Total Donations:</b> {doner.totalDonations}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                📍 {doner.address}
                            </p>

                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
}
