import Link from "next/link";
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* HERO sekcia – s textom v spodnej časti obrázka */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/72.jpg')" }}
      >

        {/* Overlay pre stmavenie pozadia */}
        <div className="absolute inset-0 bg-black/10 z-0" />
        
        {/* Horný uvítací text */}
        <div className="absolute top-20 left-1/2 sm:left-8 transform -translate-x-1/2 sm:translate-x-0 bg-black/60 p-6 rounded-l-full w-full sm:max-w-xl text-center sm:text-right">
          <h1 className="text-4xl sm:text-7xl font-bold mb-4">Vitajte v mojom portfóliu</h1>
          <p className="text-lg sm:text-xl py-2">
            Som interiérový dizajnér a toto je výber mojej práce.
          </p>
          <p className="text-2xl">Eduard Herák</p>
        </div>
        <div className="absolute top-0 left-1/2">
          <Link href="/">
            <Image src="/logo intere.svg" alt="Logo" className='w-xl' width={40} height={40} />
          </Link>
        </div>


        {/* Text o tebe v spodnej časti obrázka */}
        <div className="absolute rounded-r-full bottom-0 left-0 w-full bg-black/60 px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg">
              Pracujem v programe SketchUp a vizualizácie spracovávam v Twinmotion. Okrem interiérového dizajnu sa venujem aj programovaniu a ovládam celý Adobe balík. Vďaka umeleckému cíteniu dokážem spájať estetiku s technickou presnosťou pri každom projekte.
            </p>
          </div>
        </div>
      </section>

      {/* Prípadný ďalší obsah */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-4">Moje projekty</h2>
        <Link
          href="/galeria"
          className="inline-block bg-white text-black px-6 py-3 rounded-r-full hover:bg-cyan-900 hover:text-white transition duration-300"
        >
          Pozrieť galériu
        </Link>
      </section>
    </>
  );
}
