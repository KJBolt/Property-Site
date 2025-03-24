import React from 'react'
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

export default function JoinOurs() {
    return (
        <div className="relative w-full h-auto lg:py-20 py-10  bg-[#eceff6]">
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-normal text-slate-800 mb-4 leading-12">
                    Are you a professional, a new graduate or an entrepreneur looking for a new challenge? <br /> Join Ours today
                </h1>

                <Link
                    href="#"
                    className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white mt-5 font-medium py-3 px-8 rounded-md transition-colors duration-300"
                >
                    VISIT HERE <ChevronRight />
                </Link>
            </div>
        </div>
    )
}
