import React from 'react'
import '../../app/app.css'
import Image from 'next/image'
import Hero from '../../public/Hero.jpg'
import Link from "next/link"

export default function HeroSection() {
    return (
    <div className="relative h-screen w-full overflow-hidden lg:px-20 px-5">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
            <Image
                src={Hero}
                alt="Expedition background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4 md:px-8">
                {/* Small header text */}
                <p className="mb-4 text-sm font-medium tracking-wider text-blue-500">OUR OBJECTIVE</p>

                {/* Main heading */}
                <h1 className="mb-6 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl capitalize">
                    Growth through <span className="text-[#ea4e1d]">innovation</span> and collaboration.
                </h1>

                {/* Description paragraph */}
                <p className="mb-8 max-w-2xl text-gray-300">
                    Donec facilisis augue a sapien cursus dictum. Sed auctor gravida nibh at aliquam. Nulla sit amet consequat
                    diam. Nulla sed nisi ut nisi facilisis malesuada. Sed molestie tincidunt gravida.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="#"
                        className="rounded bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
                    >
                        Learn More
                    </Link>

                    <Link
                        href="#"
                        className="rounded border border-gray-400 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                    >
                        ABOUT US
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
