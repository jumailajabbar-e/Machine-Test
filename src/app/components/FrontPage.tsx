import React from 'react'
import Image from 'next/image'
function FrontPage() {
  return (
    <div>
   <div className="bg-bannerImage w-full h-[889px] md:h-[700px] lg:h-[889px] object-cover">
   <div className="w-full max-w-[1728px] px-4 md:px-[100px] py-4 md:py-[21px]">
      <nav className="w-full flex items-center justify-between">
         {/* Logo */}
         <div className="text-2xl font-bold text-white">DEMO</div>
         {/* Desktop Menu */}
         <div className="hidden md:flex items-center space-x-[20px] lg:space-x-[38px]">
            <ul className="flex space-x-[20px] lg:space-x-[38px] text-base font-medium text-white">
               <li><a href="#">About Us</a></li>
               <li><a href="#">How We Help</a></li>
               <li><a href="#">Pricing</a></li>
               <li><a href="#">Portfolios</a></li>
               <li><a href="#">Testimonials</a></li>
               <li><a href="#">Insights</a></li>
            </ul>
            <div className="w-[160px] md:w-[200px] h-[48px] md:h-[60px] bg-white text-black rounded-lg flex items-center justify-center">
               <span>Contact Us</span>
            </div>
         </div>
         {/* Mobile Menu */}
         <div className="md:hidden bg-white text-black rounded-lg mt-2 p-4">
            <ul className="flex flex-col space-y-4 text-base font-medium">
               <li><a href="#" className="block text-gray-800">About Us</a></li>
               <li><a href="#" className="block text-gray-800">How We Help</a></li>
               <li><a href="#" className="block text-gray-800">Pricing</a></li>
               <li><a href="#" className="block text-gray-800">Portfolios</a></li>
               <li><a href="#" className="block text-gray-800">Testimonials</a></li>
               <li><a href="#" className="block text-gray-800">Insights</a></li>
               <li>
                  <div className="w-full bg-gray-200 text-center py-2 rounded-lg">Contact Us</div>
               </li>
            </ul>
         </div>
      </nav>
   </div>
   {/* Banner Content */}
   <div className="max-w-[1172px] mx-auto px-4 md:px-[100px] text-white mt-10 md:mt-[517px] space-y-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-[54px] font-medium leading-[40px] md:leading-[70.2px]">
         Lorem ipsum dolor sit amet.
      </h1>
      {/* Paragraph */}
      <p className="text-sm md:text-[18px] font-normal leading-6 md:leading-[30.6px]">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. 
         In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada 
         mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem 
         ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac 
         habitasse platea dictumst.
      </p>
   </div>
</div>
<section className="w-full md:w-[1528px] h-[648px] pt-7 md:pl-96 rounded-2xl flex items-center justify-center">
    <Image 
        src="/image.svg" 
        alt="Centered SVG" 
        width={1528}
        height={648} 
        className="object-contain"
    />
</section>

<div className="p-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Column with Main Content */}
        <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Lorem ipsum dolor sit amet, consectetur</h1>
            <p className="text-base md:text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
            </p>
        </div>

        {/* Right Column with Sub-Sections */}
        <div className="w-full md:w-1/2 grid gap-8">
            <div className="border-l-2 pl-4">
                <h2 className="text-lg md:text-xl font-bold mb-2">Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem.
                </p>
            </div>
            <div className="border-l-2 pl-4">
                <h2 className="text-lg md:text-xl font-bold mb-2">Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem.
                </p>
            </div>
        </div>
    </div>
</div>

<div className="w-full p-8 bg-slate-50">
    <h1 className="text-2xl md:text-4xl font-bold mb-8">Lorem ipsum dolor sit amet, consectetur</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 1 */}
        <div className="relative w-full h-[250px] md:w-[750px] md:h-[360px] rounded-lg overflow-hidden">
            <Image src="/image1.svg" alt="People in a library" layout="fill" className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 text-white">
                <h2 className="text-lg md:text-[28px] font-medium leading-tight w-full md:w-[653px] mb-2">Consectetur adipiscing elit</h2>
                <p className="text-sm md:text-[18px] leading-tight w-full md:w-[653px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.</p>
            </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-[250px] md:w-[748px] md:h-[295px] rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/image2.svg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 text-white">
                <h2 className="text-lg md:text-[28px] font-medium leading-tight mb-2" style={{ width: '470px' }}>Consectetur adipiscing elit</h2>
                <p className="text-sm md:text-[18px] leading-tight" style={{ width: '653px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.</p>
            </div>
        </div>
         {/* Image 3 */}
         <div className="relative w-full h-[250px] md:w-[748px] md:h-[295px] rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/image3.svg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 text-white">
                <h2 className="text-lg md:text-[28px] font-medium leading-tight mb-2" style={{ width: '470px' }}>Consectetur adipiscing elit</h2>
                <p className="text-sm md:text-[18px] leading-tight" style={{ width: '653px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.</p>
            </div>
        </div>
         {/* Image 4 */}
         <div className="relative w-full h-[250px] md:w-[748px] md:h-[295px] rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/image4.svg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 text-white">
                <h2 className="text-lg md:text-[28px] font-medium leading-tight mb-2" style={{ width: '470px' }}>Consectetur adipiscing elit</h2>
                <p className="text-sm md:text-[18px] leading-tight" style={{ width: '653px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.</p>
            </div>
        </div>
    </div>
</div>

<div className="w-full flex flex-col md:flex-row items-center justify-between rounded-lg p-4 md:p-0">
    <div className="flex gap-4 w-full max-w-5xl mx-auto md:px-4">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-[54px] font-semibold leading-tight text-center">8 Years</h1>
            <p className="text-xl md:text-[34px] leading-tight text-center">of Success</p>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-24"></div>
        <div className="flex flex-col items-center">
            <p className="text-3xl md:text-[54px] font-semibold leading-tight text-center">200+</p>
            <p className="text-xl md:text-[34px] leading-tight text-center">Members</p>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-24"></div>
        <div className="flex flex-col items-center">
            <p className="text-3xl md:text-[54px] font-semibold leading-tight text-center">155+</p>
            <p className="text-xl md:text-[34px] leading-tight text-center">All Over The USA</p>
        </div>
        <div className="hidden md:block border-r border-gray-300 h-24"></div>
        <div className="flex flex-col items-center">
            <p className="text-3xl md:text-[54px] font-semibold leading-tight text-center">200k</p>
            <p className="text-xl md:text-[34px] leading-tight text-center">Satisfied Clients</p>
        </div>
    </div>
</div>
<div className="w-[1728px] h-[1047px] px-[100px] py-[125px] mx-auto">
                    <div className="w-[1527.69px] h-auto mt-[125px] ml-[100px] gap-[72px]">
                        <div className='w-[903px] flex flex-col gap-[36px]'>
                        <h1 className="text-left text-[54px] font-normal leading-[68.04px]">Lorem Ipsum</h1>
                        <p className="text-left font-poppins text-[20px] font-normal leading-[34px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
                        </p>
                        </div>
                        <div className="w-[1527.69px] h-auto gap-[19px] flex flex-row">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">01</h2>
                                <hr className="border-t-2 border-gray-200 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet, consectetur</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">02</h2>
                                <hr className="border-t-2 border-gray-200 mb-4"/>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet, consectetur</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                                </p>
                            </div>
                            <div className="bg-black p-6 rounded-lg shadow-md text-white">
                                <h2 className="text-2xl font-semibold mb-2">03</h2>
                                <hr className="border-t-2 border-[#00466D] mb-4"/>
                                <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
 <div className="flex w-full h-[833px] bg-cover bg-center bg-backgroundImage bg-opacity-70">
                    <div className="w-[1520px] h-[633px] mt-[10px] mx-auto flex flex-row gap-[40px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className='w-[797px] h-[593px]  gap-12 flex flex-col'>
                                <h1 className="text-5xl font-bold text-black leading-tight">
                                    Lorem Ipsum <br /> dolor sit consectetur
                                </h1>
                                <p className="mt-6 text-lg text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
                                </p>
                            </div>
                            <div className="w-[532px] h-[633px] bg-white left-[946px] rounded-l-[14px]">
    <div className='w-[512px] h-[527px] top-[97px] left-[956px] rounded-md px-10 py-5'>
        <h2 className="text-2xl font-medium mb-2">Lorem Ipsum?</h2>
        <img src="/image5.svg" alt="A graduate student in a cap and gown" className="w-full h-auto rounded-tl-[8px] rounded-bl-[8px] mb-2" />
        <h3 className="text-xl font-medium text-black">Lorem Ipsum</h3>
        <p className="mt-2 text-black font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </div>
</div>

                        </div>
                    </div>
                </div>
    <section className="w-[1488.32px] h-[710px] left-[122px] top-[5941px] items-center justify-center px-32">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
            <div className="grid grid-cols-3 gap-60">
                <div className="bg-bgImage rounded-lg shadow-lg overflow-hidden w-[462px] h-[584px] object-cover">
                    <div className="p-4 text-white">
                        <p className="text-xl font-bold">dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis</p>
                    </div>
                </div>
                <div className="bg-bgImage1 rounded-lg shadow-lg overflow-hidden w-[462px] h-[584px] object-cover">
                    <div className="p-4 text-white">
                        <p className="text-xl font-bold">dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis</p>
                    </div>
                </div>
                <div className="bg-bgImage2 rounded-lg shadow-lg overflow-hidden w-[462px] h-[584px] object-cover">
                    <div className="p-4 text-white">
                        <p className="text-xl font-bold">dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div>
                    <header className="relative bg-bgFooter bg-cover  bg-center h-96">
                        <div className="absolute inset-0 opacity-50"></div>
                        <div className="relative z-10 text-white flex flex-row items-start justify-between h-full p-8">
                            <div className=''>
                            <h1 className="text-4xl font-bold">Let's work Together</h1>
                            <p className="mt-4 max-w-lg">
                                Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique euismod rcu tristique nisl id nibh. viverra feugiat viverra.Lorem ipsum dolor sit amet consectetur
                            </p>
                            </div>
                            <button className="w-[355px] h-[80px] mt-8 px-16 py-3 bg-white text-gray-900 font-semibold rounded">View Vacancies</button>
                        </div>
                    </header>
                    <nav className="bg-[#002A3A] py-4 text-white">
                        <div className="container mx-auto flex justify-center space-x-8">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">About Us</a>
                            <a href="#" className="hover:underline">Pricing</a>
                            <a href="#" className="hover:underline">Portfolios</a>
                            <a href="#" className="hover:underline">Insights</a>
                        </div>
                    </nav>
                    <main className="w-full bg-[#002A3A] text-white grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul>
            <li className="mb-4 flex items-center">
                <i className="fas fa-link mr-2"></i>
                <a href="#" className="hover:underline">Lorem ipsum dolor sit amet</a>
            </li>
            <li className="mb-4 flex items-center">
                <i className="fas fa-link mr-2"></i>
                <a href="#" className="hover:underline">Lorem ipsum dolor sit amet</a>
            </li>
            <li className="mb-4 flex items-center">
                <i className="fas fa-link mr-2"></i>
                <a href="#" className="hover:underline">Lorem ipsum dolor sit amet</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 className="text-xl font-semibold mb-4">Lorem</h2>
        <ul>
            <li className="mb-4">
                <a href="#" className="hover:underline">Lorem</a>
            </li>
            <li className="mb-4">
                <a href="#" className="hover:underline">Ipsum</a>
            </li>
            <li className="mb-4">
                <a href="#" className="hover:underline">Consectetur</a>
            </li>
            <li className="mb-4">
                <a href="#" className="hover:underline">Effictur</a>
            </li>
        </ul>
    </div>
    <div>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
            Lorem Ipsum, Iso lorem,<br />
            Iso Lorem Posum
        </p>
        <p className="mb-4">
            +91 00000 00000<br />
            info@demo.com
        </p>
        <p className="mb-4">Follow us on</p>
        <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-xing"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
</main>

                    <footer className="bg-gray-800 py-4">
                        <div className="container mx-auto text-center">
                            ©2024 Demo. All rights reserved.
                        </div>
                    </footer>
                </div>
</div>
  )
}

export default FrontPage
