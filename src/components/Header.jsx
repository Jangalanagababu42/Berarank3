import { useState } from 'react';
import lovdlogo from '../assets/lovdlogo.svg';
import magnify from '../assets/magnify.svg';
import logo_berarank from "../assets/logo_berarank.svg";
const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <header className="sticky top-0  z-50 w-full px-4 px-[160px] py-4 bg-white ">
      <div className="grid grid-cols-12 items-center ">
        {/* Logo Div */}
        <div className="col-start-1 col-span-3 flex flex-col items-center space-x-3  ">
          <div className='flex space-x-2 items-center'>

          <img
            src={logo_berarank}
            alt="L0vd Logo"
            className="w-[50px] h-[42px] "
          />
             <span className="font-poppins font-semibold text-3xl tracking-wider">
               Berarank
             </span>
          </div>
           <div className="flex ">
             <span className="font-poppins font-medium text-sm text-grey-table space-x-1">
               powered by <img src={lovdlogo} alt="Powered by L0vd" className="inline-block w-4 h-4 ml-1" />
               <span className='font-semibold text-black'>

               L0vd
               </span>
           </span>
          </div>
         </div>

        {/* Search Bar */}
        <div className="col-start-4 col-span-3 flex items-center w-[250px] justify-center  ">
          <div className="relative w-full max-w-md  ">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[45px] ring-1 ring-inset ring-lightblue-stroke focus:outline-none focus:ring-1 focus:ring-inset focus:ring-lightblue-stroke  font-poppins font-medium text-[16px] text-grey-stroke rounded-[10px]  px-12 py-3 md:py-4"
            />
            <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400  ">
              <img src={magnify} alt="magnify" className="w-6 h-6 " />
            </span>
          </div>
        </div>

        {/* Right Section: Validators, Pools, Guides, and Connect Button */}
        <div className="col-start-7 col-span-5  flex  justify-between items-center  h-[53px] space-x-12">
          <div className="flex w-[279px] h-[44px] space-x-[30px] items-center font-poppins font-medium text-base">
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 hover:ring-offset hover:ring-main-blue"
            >
              Validators
            </a>
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 hover:ring-offset hover:ring-main-blue"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
             
             {hoveredIndex === 1 ? <span className='text-sm'>coming soon</span> : 'Pools'}
            </a>
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 hover:ring-offset hover:ring-main-blue"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
               {hoveredIndex === 2 ? <span className='text-sm'>coming soon</span> : 'Guides'}
            </a>
          </div>
          <button className=" w-[187px] h-[53px] bg-main-blue text-white px-5 py-2.5  rounded-[10px] font-poppins font-medium text-white text-md">
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// import lovdlogo from '../assets/lovdlogo.svg';
// import magnify from '../assets/magnify.svg';

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full px-[160px] py-4 bg-white shadow-md">
//       <div className="grid grid-cols-12 items-center space-x-4">
//         {/* Logo and Title Div */}
//         <div className="col-start-1 col-span-3 flex items-center space-x-3">
//           <img
//             src={lovdlogo}
//             alt="L0vd Logo"
//             className="w-[32px] h-[32px]"
//           />
//           <div className="flex flex-col">
//             <span className="font-poppins font-semibold text-2xl tracking-wider">
//               Berarank
//             </span>
//             <span className="font-poppins font-medium text-sm text-gray-500">
//               powered by <img src={lovdlogo} alt="Powered by L0vd" className="inline-block w-4 h-4 ml-1" />L0vd
//             </span>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="col-start-5 col-span-4 flex items-center justify-center">
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full h-[45px] ring-1 ring-inset ring-lightblue-stroke font-poppins font-medium text-sm text-gray-600 rounded-full px-12 py-3"
//             />
//             <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//               <img src={magnify} alt="magnify" className="w-5 h-5" />
//             </span>
//           </div>
//         </div>

//         {/* Right Section: Validators, Pools, Guides, and Connect Button */}
//         <div className="col-start-9 col-span-4 flex justify-end items-center space-x-8">
//           <nav className="flex space-x-8">
//             <a
//               href="#"
//               className="font-poppins font-medium text-base text-black hover:text-main-blue transition-colors"
//             >
//               Validators
//             </a>
//             <a
//               href="#"
//               className="font-poppins font-medium text-base text-black hover:text-main-blue transition-colors"
//             >
//               Pools
//             </a>
//             <a
//               href="#"
//               className="px-4 py-1.5 bg-main-blue text-white rounded-lg font-poppins font-medium text-base shadow-md hover:bg-blue-600 transition-colors"
//             >
//               Guides
//             </a>
//           </nav>
//           <button className="px-6 py-2.5 bg-main-blue text-white rounded-lg font-poppins font-medium text-base shadow-md hover:bg-blue-600 transition-colors">
//             Connect Wallet
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
