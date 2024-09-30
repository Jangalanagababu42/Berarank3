
// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState, useLayoutEffect } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);
  
//   useEffect(() => {
//     // Disable automatic scroll restoration
//     window.history.scrollRestoration = 'manual';

//     // Scroll to the top after the page fully loads
//     const onLoadScrollToTop = () => {
//       window.scrollTo(0, 0);
//     };

//     // Run scroll to top
//     onLoadScrollToTop();

//     return () => {
//       // Cleanup listener if needed
//       window.removeEventListener('load', onLoadScrollToTop);
//     };
//   }, []);
//   useEffect(() => {
//     // Dynamically adjust background height based on validator cards
//     if (validatorRef.current) {
//       const observer = new ResizeObserver(() => {
//         const validatorHeight = validatorRef.current.offsetHeight;
//         setBgHeight(validatorHeight); // Dynamically extend height based on validators
//       });
//       observer.observe(validatorRef.current);

//       return () => observer.disconnect();
//     }
//   }, [validatorRef]);

//   return (
//     <>
//       <div className="relative flex flex-col px-[160px]">
//         {/* Staking Section */}
//         <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
//           <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
//             <div className="mx-[26px] my-[28px] space-y-[25px]">
//               <p className="font-poppins font-regular text-[40px]">Stake with L0vd</p>
//               <p className="font-poppins font-regular text-[18px]">
//                 Stake with reliable provider who is contributing to more than 50 networks
//               </p>
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px] hover:bg-blue-gradient">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div className="col-start-8 col-span-5 relative" style={{ top: '-50px' }}>
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Yellow Wave Background */}
//         <div className="absolute top-[350px] left-0 w-full -z-10">
//           <img src="/bg1.png" alt="Yellow Background with Waves" className="w-full" />
//         </div>

//         {/* Dynamic Background Color starting from top: 3175px */}
//         <div
//           className="absolute left-0 w-full -z-10"
//           style={{
//             top: '3160px', // Start the background color just below the yellow wave
//             backgroundColor: '#E2C7BB',
//             height: `${bgHeight -2300}px`, // Dynamically extend with validators
//           }}
//         ></div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Bear Figure Above Footer */}
//         <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>

//         {/* Footer */}
//       </div>
//         <Footer />
//     </>
//   );
// }

// export default StakePage;


import HoneyJar from '../assets/HoneyJar.svg';
import bear from '../assets/bear.svg';
import Footer from './Footer';
import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

function StakePage() {
  const [bgHeight, setBgHeight] = useState(0);
  const validatorRef = useRef(null);

  useEffect(() => {
    // Disable automatic scroll restoration
    window.history.scrollRestoration = 'manual';

    // Scroll to the top after the page fully loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Dynamically adjust background height based on validator cards
    if (validatorRef.current) {
      const observer = new ResizeObserver(() => {
        const validatorHeight = validatorRef.current.offsetHeight;
        setBgHeight(validatorHeight);
      });
      observer.observe(validatorRef.current);

      return () => observer.disconnect();
    }
  }, [validatorRef]);

  return (
    <>
      <div className="relative flex flex-col px-4 md:px-[160px]">
        {/* Staking Section */}
        <div className="grid grid-cols-12 space-x-0 md:space-x-5 mt-10 md:mt-[80px] relative">
          <div className="col-span-12 md:col-start-2 md:col-span-4 w-full md:w-[419px] h-auto ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white mb-6 md:mb-0">
            <div className="p-6 md:mx-[26px] md:my-[28px] space-y-4 md:space-y-[25px]">
              <p className="font-poppins font-medium text-2xl md:text-[40px]">
                Stake with L0vd
              </p>
              <p className="font-poppins font-regular text-base md:text-[18px]">
                Stake with a reliable provider who is contributing to more than 50 networks.
              </p>
              <button className="w-full md:w-[368px] h-14 md:h-[56px] p-2 md:p-[10px] font-poppins font-medium text-lg md:text-[24px] bg-btn-blue text-white rounded-[10px] hover:bg-blue-gradient">
                Stake
              </button>
            </div>
          </div>
          {/* Honey Jar Image */}
          <div className="col-span-12 md:col-start-8 md:col-span-5 relative flex justify-center md:justify-end" style={{ top: '-50px' }}>
            <img src={HoneyJar} alt="Honey Jar" className="w-3/4 md:w-auto" />
          </div>
        </div>

        {/* Yellow Wave Background */}
        <div className="absolute top-[350px] left-0 w-full -z-10">
          <img src="/bg1.png" alt="Yellow Background with Waves" className="w-full" />
        </div>

        {/* Dynamic Background Color starting from top: 3175px */}
        <div
          className="absolute left-0 w-full -z-10"
          style={{
            top: '3160px',
            backgroundColor: '#E2C7BB',
            height: `${bgHeight - 2300}px`,
          }}
        ></div>

        {/* Validator Scoring Section */}
        <div ref={validatorRef} className="relative z-20 mt-12 md:mt-[50px]">
          <ValidatorScoring />
        </div>

        {/* Bear Figure Above Footer */}
        <div className="flex justify-center py-10 relative z-30">
          <img src={bear} alt="Bear Figure" className="w-32 md:w-[200px] h-auto" />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default StakePage;
