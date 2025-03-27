import Header from "@/components/Header";
import Goals from "@/components/Goals";
import Nous from "@/components/Nous";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <div id="home" className="full-page-section flex items-center justify-between px-8 md:px-16 lg:px-24">
        <div className="w-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h2 className="vertical-text text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest">LE SPORT POUR TOUS!</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">La nouvelle alternative pour un monde sans limite</p>
          <Link href="login">
            <button className="linker px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg active:scale-95">Rejoignez nous</button>
          </Link>
        </div>
      </div>
        <Goals />
        <Nous />
        <Footer />
    </div>
  );
}
