import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import Hero from '../../public/Hero.jpg'

export default function Blog() {
    return (
        <div className="lg:h-screen h-auto bg-[#eceff6]">
            <main className="lg:px-32 px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column - Blog Intro */}
                    <div className="lg:col-span-5">
                        <div className="space-y-6">
                            <h2 className="text-blue-500 font-medium">BLOG & NEWS</h2>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                Dive Into Our <span className="text-orange-500">News Update</span>
                            </h1>
                            <p className="text-gray-600">
                                Praesent volutpat tempor ligula vel pulvinar. Nullam sed erat finibus, accumsan sed sapien eu, laoreet
                                lorem. Donec vel facilisis sapien, sed pulvinar lectus. Praesent et dictum sed dolor nec condimentum.
                                Morbi sed volutpat nisl ipsum.
                            </p>
                            <div>
                                <Link
                                    href="#"
                                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                                >
                                    VIEW ALL BLOG
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Blog Cards */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Blog Card 1 */}
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                <div className="relative h-48">
                                    <Image
                                    src={Hero}
                                    alt="Home delivery service"
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                <div className="p-5 space-y-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4 text-blue-500" />
                                            <span>admin</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-blue-500" />
                                            <span>January 26, 2024</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-800">Save Time With Home Delivery Service</h3>
                                    <p className="text-gray-600 text-sm">
                                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices
                                        diam.
                                    </p>
                                    <div className="pt-2">
                                        <Link
                                            href="#"
                                            className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium py-2 px-4 rounded-sm transition-colors"
                                        >
                                            READ MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Card 2 */}
                            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                <div className="relative h-48">
                                    <Image
                                    src={Hero}
                                    alt="Freight broker workers"
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                <div className="p-5 space-y-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4 text-blue-500" />
                                            <span>admin</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-blue-500" />
                                            <span>January 26, 2024</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-800">5 Benefits Of Working With A Freight Broker</h3>
                                    <p className="text-gray-600 text-sm">
                                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Vivamus ac ultrices
                                        diam.
                                    </p>
                                    <div className="pt-2">
                                        <Link
                                            href="#"
                                            className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium py-2 px-4 rounded-sm transition-colors"
                                        >
                                            READ MORE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
