import React from 'react'
import Link from 'next/link'

export default function Help() {
    return (
        <div className="w-full bg-gradient-to-r from-slate-950 to-slate-600 py-20 px-4 text-center lg:my-20 my-10">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">How can we help you or your business ?</h1>
            <Link href='#' className="text-lg text-blue-400 underline mt-3">Get in touch with us</Link>
        </div>
    )
}
