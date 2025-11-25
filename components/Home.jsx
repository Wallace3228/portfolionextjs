import Image from 'next/image'

/*
  Home is a Server Component using next/image for optimized delivery.
  Using next/image ensures automatic responsive sizes, lazy loading and modern formats.
*/
export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center text-center">
      <div className="rounded-full overflow-hidden mb-4">
        <Image src="/assets/profile.jpg" alt="Mi foto" width={192} height={192} className="rounded-full object-cover" />
      </div>

      <h2 className="text-2xl font-semibold">¡Greetings! I'm Alex Matilla</h2>
      <p className="text-gray-600 dark:text-gray-300">I'm a Software developer currently studying at the Polithecnic University of Catalonia (UPC).</p>
    </section>
  )
}
