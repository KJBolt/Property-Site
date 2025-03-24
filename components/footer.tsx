'use client'
import { useState } from "react"

export default function Footer() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle subscription logic here
        console.log("Subscribing email:", email)
        // Reset form after submission
        setEmail("")
    }

    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 w-[100%] bg-slate-800 text-white'>
                <div className='space-y-6 md:p-20 p-10'>
                    <h1 className="text-2xl text-center font-semibold">
                        Contact Info
                    </h1>
                    <div>
                        <h3 className='text-center font-medium'>Address:</h3>
                        <p className='text-slate-300 font-thin text-center'>New Oak Company, Abokobi, Accra</p>
                    </div>
                    <div>
                        <h3 className='text-center font-medium'>Phone:</h3>
                        <p className='text-slate-300 font-thin text-center'>+233 279 000 095</p>
                    </div>
                    <div>
                        <h3 className='text-center font-medium'>Email:</h3>
                        <p className='text-slate-300 font-thin text-center'>info@ourslimited.com</p>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                </div>
                <div className='space-y-5 md:p-20 p-10'>
                    <h1 className="text-2xl text-center capitalize font-semibold">
                        Subscribe to our newsletter
                    </h1>
                    <div>
                        <p className='text-slate-300 font-thin text-center'>Miss nothing, Be the first to know!</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 h-12"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 h-full bg-blue-500 text-white font-bold px-6 hover:bg-blue-800 transition-colors"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                            <div className="flex justify-center items-center gap-3 mt-5">
                                <input type="checkbox" name="terms"/>
                                <p className="text-slate-300">Accept GDPR Terms</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 py-5 border-t border-slate-500">
                <p className="text-slate-300 text-center">© Copyright 2025 - Ours limited</p>
            </div>
        </>
    )
}
