'use client'
import Image from "next/image"
import Logo from "../public/Logo.png"
import { Menu, PhoneCall } from "lucide-react"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Get the path name
    const path = pathname?.split("/")[1];
    console.log(path)

    return (
        <div className="flex justify-between items-center px-10 md:px-20 xl:px-40 py-3 z-10">

            <div>
                <Image src={Logo} alt="Logo" height={200} width={200} priority  />
            </div>

            <div className="flex items-center">
                <ul className="md:flex items-center gap-10 hidden">
                    <li className={`${path == '' ? 'cursor-pointer text-[#ea4e1d] border-b-2 border-[#ea4e1d]' : 'cursor-pointer text-black'}`}>Home</li>
                    <li className={`${path == 'about-us' ? 'cursor-pointer text-[#ea4e1d] border-b-2 border-[#ea4e1d]' : 'cursor-pointer text-black'}`}>About Us</li>
                    <li className={`${path == 'blog' ? 'cursor-pointer text-[#ea4e1d] border-b-2 border-[#ea4e1d]' : 'cursor-pointer text-black'}`}>Blog</li>
                    <li className={`${path == 'portfolio' ? 'cursor-pointer text-[#ea4e1d] border-b-2 border-[#ea4e1d]' : 'cursor-pointer text-black'}`}>Portfolio</li>
                    <li className={`${path == 'contact-us' ? 'cursor-pointer text-[#ea4e1d] border-b-2 border-[#ea4e1d] lg:hidden block' : 'cursor-pointer text-black lg:hidden block'}`}>Contact Us</li>
                    <button className="bg-blue-500 lg:flex hidden items-center gap-2 text-white py-2 px-5 rounded-xs cursor-pointer">
                        Contact Us <span><PhoneCall size={15} /></span>
                    </button>
                </ul>
                <Menu size={30} className="md:hidden block" />
            </div>

        </div>
    )
}
