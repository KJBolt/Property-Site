import HeroSection from "@/components/home/hero-section";
import AboutUs from "@/components/home/about-us";
import Navbar from "@/components/navbar";
import SectorsWeOperate from "@/components/home/sectors-we-operate";
import Help from "@/components/home/help";
import WorkWithUs from "@/components/home/work-with-us";
import Footer from "@/components/footer";
import JoinOurs from "@/components/home/join-ours";
import Blog from "@/components/home/blog";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Blog />
            <SectorsWeOperate />
            <Help />
            <WorkWithUs />
            <JoinOurs />
            <Footer />
        </div>
    )
}
