import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Guarantee from "@/components/sections/guarantee";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  
  return (
    <div className='w-screen text-brown dark:text-lightOxford overflow-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Guarantee />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
