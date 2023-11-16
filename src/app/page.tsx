const Header = () => {
  return (
    <div className="pb-10" id="home">
    <header className="bg-white p-8 shadow-md sticky w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="site-title">
        <h1 className="text-blue-700 text-2xl font-light">John's Barbershop</h1>
        <p className="subtitle text-blue-500 text-sm capitalize">Getting your hair ready</p>
      </div>
      <nav className="space-x-4">
        <ul className="flex items-center gap-10 font-bold z-50">
        <li><a href="#home" className="current-page text-green-200 transition duration-300 ease-in-out">Home</a></li>
          <li><a href="#gallery" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Gallery</a></li>
          <li><a href="#team" className="text-blue-700 hover:text-green-200 transition duration-300 ease-in-out">Team</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>

    <div className="flex items-center relative w-full h-[85vh] bg-cover bg-[url('/andre-reis-1_DAlXy0wng-unsplash.jpg')] bg-no-repeat bg-center bg-fixed">
      <div className="overlay absolute inset-0 flex items-center justify-center">
        <div className="landing-text text-white text-center opacity-100">
          <h3 className="font-bold pb-6 text-xl">Getting your hair ready</h3>
          <h1 className="text-6xl font-bold mb-6">John's Barbershop</h1>
          <hr className="w-20 h-1 bg-white mx-auto mb-6"/>
          <a href="appointment.html" className="bg-blue-700 text-white px-8 py-4 rounded-md">Appointment</a>
        </div>
      </div>
    </div>

    <div className="gallery-header text-center py-8" id="gallery">
      <h1 className="font-bold text-4xl text-blue-700 md:text-2xl lg:text-3xl">Some of your most awesome haircuts!</h1>
      <p className="font-semibold text-gray-800">Hope you come back soon</p>
    </div>

    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/4 p-2">
        <img src="/1.jpg" alt="" className="w-full"/>
        <img src="/2.jpg" alt="" className="w-full"/>
        <img src="/3.jpg" alt="" className="w-full"/>
        <img src="/4.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/5.jpg" alt="" className="w-full"/>
        <img src="/6.jpg" alt="" className="w-full"/>
        <img src="/7.jpg" alt="" className="w-full"/>
        <img src="/8.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/9.jpg" alt="" className="w-full"/>
        <img src="/10.jpg" alt="" className="w-full"/>
        <img src="/11.jpg" alt="" className="w-full"/>
        <img src="/12.jpg" alt="" className="w-full"/>
      </div>
      <div className="w-full md:w-1/4 p-2">
        <img src="/13.jpg" alt="" className="w-full"/>
        <img src="/14.jpg" alt="" className="w-full"/>
        <img src="/16.jpg" alt="" className="w-full"/>
        <img src="/18.jpg" alt="" className="w-full"/>
      </div>
    </div>
    <div className="team-container" id="team">
    <div className="team-header text-center py-8">
      <h1 className="font-bold text-4xl text-blue-700 md:text-2xl lg:text-3xl">The Team</h1>
    </div>
  </div>

  <div className="flex flex-wrap -mx-2">
    <div className="w-full md:w-1/4 p-2">
      <img src="/19.jpg" alt="" className="w-full rounded-full"/>
      <h3 className="font-semibold text-center text-lg my-2">Alan Turing</h3>
      <p className="text-center">Barber</p>
    </div>

    <div className="w-full md:w-1/4 p-2">
      <img src="/21.jpg" alt="" className="w-full rounded-full"/>
      <h3 className="font-semibold text-center text-lg my-2">Alax Laurie</h3>
      <p className="text-center">Barber</p>
    </div>

    <div className="w-full md:w-1/4 p-2">
      <img src="/23.jpg" alt="" className="w-full rounded-full"/>
      <h3 className="font-semibold text-center text-lg my-2">Muri Dane</h3>
      <p className="text-center">Barber</p>
    </div>

    <div className="w-full md:w-1/4 p-2">
      <img src="/25.jpg" alt="" className="w-full rounded-full"/>
      <h3 className="font-semibold text-center text-lg my-2">Scarlett Blue</h3>
      <p className="text-center">Barber</p>
    </div>


  </div>
  </main>
    </div>
   
  )
}

export default function Home() {
  return (
    <Header></Header>
  )
}
