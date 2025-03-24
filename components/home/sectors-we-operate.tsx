import React from 'react'
import Image from "next/image"
import AgriImage from '../../public/Agri.jpg'
import Tech from '../../public/tech.jpg'
import RealEstate from '../../public/realestate.jpg'
import Finance from '../../public/finance.jpg'

export default function SectorsWeOperate() {
    return (
        <div className='lg:h-screen h-auto'>
            <section className="py-16 lg:px-0 px-10 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="uppercase text-blue-500 font-medium tracking-wide mb-2">OUR OERATIONS</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                            Sectors We <span className="text-[#ea4e1d]">Operate</span> In
                        </h2>
                        <p className="max-w-3xl mx-auto text-slate-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis vulputate dui at fringilla.
                            Pellentesque volutpat ipsum dolor, vitae venenatis dolor posuere quis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* AgriBusiness */}
                        <div className="relative rounded-lg overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 z-10"></div>
                            <Image
                                src={AgriImage}
                                alt="Export and Import Service"
                                width={500}
                                height={600}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-semibold mb-6">Agri-Business</h3>
                            </div>
                        </div>

                        {/* Real Estate */}
                        <div className="relative rounded-lg overflow-hidden group">
                            <Image
                                src={RealEstate}
                                alt="Port Services"
                                width={500}
                                height={600}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 z-10"></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-semibold mb-6">Real Estate</h3>
                            </div>
                        </div>

                        {/* Finance & Investment */}
                        <div className="relative rounded-lg overflow-hidden group">
                            <Image
                                src={Finance}
                                alt="Warehouse Services"
                                width={500}
                                height={600}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 z-10"></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-semibold mb-6">Finance & Investment</h3>
                            </div>
                        </div>

                        {/* Technology */}
                        <div className="relative rounded-lg overflow-hidden group">
                            <Image
                                src={Tech}
                                alt="Warehouse Services"
                                width={500}
                                height={600}
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 z-10"></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-semibold mb-6">Technology</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
