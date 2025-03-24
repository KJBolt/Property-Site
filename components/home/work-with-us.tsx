import Image from "next/image"
import Hero from '../../public/Hero.jpg'


export default function WorkWithUs() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                    Why <span className="text-[#ea4e1d]">Work</span> With Us
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    This is the sample dummy text insert your desired text here because this is the dummy text.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row mt-8 gap-6">
                {/* Left Image */}
                <div className="md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={Hero}
                            alt="Image"
                            width={500}
                            height={400}
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 p-4 rounded">
                            <h3 className="text-white text-2xl font-medium capitalize text-center font-serif">
                                At ours we work together <br /> to win
                            </h3>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-1/2">
                    <div className="space-y-6">
                        <div className="flex">
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-3xl font-bold rounded-tl-lg rounded-br-lg">
                                01
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="text-xl font-bold text-blue-500 mb-2">We are dynamic</h3>
                                <p className="text-gray-600 mb-4">
                                    We adapt to evolving market trends
                                </p>
                                <div className="border-b border-dotted border-gray-300 pt-2"></div>
                            </div>
                        </div>


                        <div className="flex">
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-3xl font-bold rounded-tl-lg rounded-br-lg">
                                02
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="text-xl font-bold text-blue-500 mb-2">Very professional</h3>
                                <p className="text-gray-600 mb-4">
                                    Our team is committed to excellence, integrity and precision.
                                </p>
                                <div className="border-b border-dotted border-gray-300 pt-2"></div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-3xl font-bold rounded-tl-lg rounded-br-lg">
                                03
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="text-xl font-bold text-blue-500 mb-2">An ecosystem that helps you</h3>
                                <p className="text-gray-600 mb-4">
                                    Through collaboration and strategic partnerships, we create a supportive environment that nurtures growth and long-term success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
