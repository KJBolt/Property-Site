import Image from "next/image"
import Link from "next/link"
import Innovation from '../../public/Innovation1.jpg'

export default function AboutUs() {
    return (
    <div className='lg:h-screen h-auto'>
        <section className="py-20 lg:px-32 px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h2 className="text-blue-500 uppercase font-medium tracking-wide">About Us</h2>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                        We Have More Than 20 Years of <span className="text-[#ea4e1d]">Experience</span>
                    </h1>

                    <div className="space-y-4 text-slate-600">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis vulputate dui at fringilla.
                            Pellentesque volutpat ipsum dolor, vitae venenatis dolor posuere quis.
                        </p>

                        <p>
                            In vel orci id magna vulputate iaculis. Donec a ex eget ex pretium consectetur at non elit. Suspendisse
                            justo ante, mollis a ornare vitae, vestibulum quis lacus. Phasellus eget orci eu libero sodales convallis.
                            Donec vel purus laoreet, mattis metus ac, lacinia orci.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#"
                            className="border border-blue-500 text-slate-800 font-medium px-6 py-3 rounded-md flex items-center justify-center hover:bg-blue-50 transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="relative mt-8 lg:mt-0">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src={Innovation}
                            alt="Logistics professional with hard hat"
                            fill
                            className="object-cover rounded-md"
                            priority
                        />

                        <div className="absolute top-8 right-8 bg-slate-800 text-white p-4 rounded-md shadow-lg">
                            <div className="text-4xl font-bold flex items-center">
                                100
                                <span className="text-2xl ml-1">%</span>
                            </div>
                            <div className="text-sm font-medium">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
