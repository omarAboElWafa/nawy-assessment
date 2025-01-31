import Image from "next/image";
import Card from "../components/Card";
import Header from "../components/Header";
import apartments from "../data/apartments";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header totalResults={apartments.length}/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="nawy-logo-container">
        <Image
          className="dark:invert mx-auto"
          src="/nawy.svg"
          alt="Nawy logo"
          width={180}
          height={38}
          priority
        />
      </div>

        <div className="page-content">
            {/* Card Listing */}
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apt, index) => (
              <Card key={index} {...apt} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
