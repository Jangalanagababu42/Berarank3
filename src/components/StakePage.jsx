

// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Set the background height dynamically based on the Validator Scoring section height
//     if (validatorRef.current) {
//       const validatorHeight = validatorRef.current.offsetHeight;
//       setBgHeight(validatorHeight); // Dynamically adjust height based on validators
//     }
//   }, [validatorRef]);

//   return (
//     <>
//       <div className="relative flex flex-col px-[160px]">
//         {/* Staking Section */}
//         <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
//           {/* Moved honey jar section up */}
//           <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
//             <div className="mx-[26px] my-[28px] space-y-[25px]">
//               <p className="font-poppins font-regular text-[40px]">
//                 Stake with L0vd
//               </p>
//               <p className="font-poppins font-regular text-[18px]">
//                 Stake with reliable provider who is contributing to more than 50
//                 networks
//               </p>
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div
//             className="col-start-8 col-span-5 relative"
//             style={{ top: '-50px' }}
//           >
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Full-Screen Background Image with Waves */}
//         <div
//           className="absolute top-[350px] left-0 w-screen -z-10"
//           style={{ height: `${bgHeight + 500}px` }} // Dynamically adjust height based on validators
//         >
//           <img
//             src="/bg2.png"
//             alt="Yellow Background with Waves"
//             className="w-screen h-full object-fill"
//           />
//         </div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Background Color Below the Wave */}
//         <div
//           className="absolute left-0 w-full -z-10"
//           style={{
//             top: `${bgHeight + 850}px`, // Ensure the color starts right after the yellow wave
//             backgroundColor: '#E2C7BB',
//             minHeight: '100%', // Make sure it grows dynamically with content
//           }}
//         ></div>
//           <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>
//         {/* <Footer /> */}
//       </div>
      
//     </>
//   );
// }

// export default StakePage;

// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Set the background height dynamically based on the Validator Scoring section height
//     if (validatorRef.current) {
//       const validatorHeight = validatorRef.current.offsetHeight;
//       setBgHeight(validatorHeight); // Dynamically adjust height based on validators
//     }
//   }, [validatorRef]);

//   return (
//     <>
//       <div className="relative flex flex-col px-[160px]">
//         {/* Staking Section */}
//         <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
//           {/* Moved honey jar section up */}
//           <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
//             <div className="mx-[26px] my-[28px] space-y-[25px]">
//               <p className="font-poppins font-regular text-[40px]">
//                 Stake with L0vd
//               </p>
//               <p className="font-poppins font-regular text-[18px]">
//                 Stake with reliable provider who is contributing to more than 50
//                 networks
//               </p>
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div
//             className="col-start-8 col-span-5 relative"
//             style={{ top: '-50px' }}
//           >
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Full-Screen Background Image with Waves */}
//         <div
//           className="absolute top-[350px] left-0 w-screen -z-10"
//           style={{ height: `${bgHeight + 500}px` }} // Dynamically adjust height based on validators
//         >
//           <img
//             src="/bg2.png"
//             alt="Yellow Background with Waves"
//             className="w-screen h-full object-fill"
//           />
//         </div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Background Color Below the Wave */}
//         <div
//           className="absolute left-0 w-full -z-10"
//           style={{
//             top: `${bgHeight + 850}px`, // Ensure the color starts right after the yellow wave
//             backgroundColor: '#E2C7BB',
//             height: 'auto', // Remove minHeight and set to auto
//           }}
//         ></div>
//         <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>
//       </div>
//         <Footer />
      
//     </>
//   );
// }

// export default StakePage;
// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Set the background height dynamically based on the Validator Scoring section height
//     if (validatorRef.current) {
//       const validatorHeight = validatorRef.current.offsetHeight;
//       setBgHeight(validatorHeight); // Dynamically adjust height based on validators
//     }
//   }, [validatorRef]);

//   return (
//     <>
//       <div className="relative flex flex-col px-[160px]">
//         {/* Staking Section */}
//         <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
//           {/* Moved honey jar section up */}
//           <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
//             <div className="mx-[26px] my-[28px] space-y-[25px]">
//               <p className="font-poppins font-regular text-[40px]">
//                 Stake with L0vd
//               </p>
//               <p className="font-poppins font-regular text-[18px]">
//                 Stake with reliable provider who is contributing to more than 50
//                 networks
//               </p>
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div
//             className="col-start-8 col-span-5 relative"
//             style={{ top: '-50px' }}
//           >
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Full-Screen Background Image with Fixed Height */}
//         <div className="absolute top-[350px] left-0 w-screen -z-10">
//           <img
//             src="/bg2.png"
//             alt="Yellow Background with Waves"
//             className="w-screen h-[500px] object-cover" // Fixed height for the yellow wave image
//           />
//         </div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Dynamic Background Color */}
//         <div
//           className="absolute left-0 w-full -z-10"
//           style={{
//             top: '850px', // Ensure the color starts right after the yellow wave
//             backgroundColor: '#E2C7BB',
//             height: `${bgHeight + 200}px`, // Dynamically adjust the height of the background color based on validators
//           }}
//         ></div>

//         {/* Bear Figure Above Footer */}
//         <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default StakePage;
// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Dynamically adjust background height based on validator cards
//     if (validatorRef.current) {
//       const observer = new ResizeObserver(() => {
//         const validatorHeight = validatorRef.current.offsetHeight;
//         setBgHeight(validatorHeight);
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
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div className="col-start-8 col-span-5 relative" style={{ top: '-50px' }}>
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Fixed Yellow Wave Background */}
//         <div className="absolute top-[350px] left-0 w-screen -z-10">
//           <img src="/bg2.png" alt="Yellow Background with Waves" className="w-full " /> {/* Fixed height */}
//         </div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Dynamic Background Color */}
//         <div
//           className="absolute left-0 w-full -z-10"
//           style={{
//             top: '3175x', // Start the background color just below the yellow wave
//             backgroundColor: '#E2C7BB',
//             height: `${bgHeight -3175}px`, // Dynamically extend with validators
//           }}
//         ></div>

//         {/* Bear Figure Above Footer */}
//         <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default StakePage;
// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Dynamically adjust background height based on validator cards
//     if (validatorRef.current) {
//       const observer = new ResizeObserver(() => {
//         const validatorHeight = validatorRef.current.offsetHeight;
//         setBgHeight(validatorHeight);
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
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
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
//         <div className="absolute top-[350px] left-0 w-screen -z-10">
//           <img src="/bg2.png" alt="Yellow Background with Waves" className="w-full" />
//         </div>

//         {/* Background Color Container */}
//         <div className="relative z-0 bg-[#E2C7BB]">
//           {/* Validator Scoring Section */}
//           <div ref={validatorRef} className="relative z-20 mt-[50px]">
//             <ValidatorScoring />
//           </div>

//           {/* Bear Figure Above Footer */}
//           <div className="flex justify-center py-10 relative z-30">
//             <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//           </div>

//           {/* Footer */}
//           <Footer />
//         </div>
//       </div>
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
    const onLoadScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Run scroll to top
    onLoadScrollToTop();

    return () => {
      // Cleanup listener if needed
      window.removeEventListener('load', onLoadScrollToTop);
    };
  }, []);
  useEffect(() => {
    // Dynamically adjust background height based on validator cards
    if (validatorRef.current) {
      const observer = new ResizeObserver(() => {
        const validatorHeight = validatorRef.current.offsetHeight;
        setBgHeight(validatorHeight); // Dynamically extend height based on validators
      });
      observer.observe(validatorRef.current);

      return () => observer.disconnect();
    }
  }, [validatorRef]);

  return (
    <>
      <div className="relative flex flex-col px-[160px]">
        {/* Staking Section */}
        <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
          <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
            <div className="mx-[26px] my-[28px] space-y-[25px]">
              <p className="font-poppins font-regular text-[40px]">Stake with L0vd</p>
              <p className="font-poppins font-regular text-[18px]">
                Stake with reliable provider who is contributing to more than 50 networks
              </p>
              <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
                Stake
              </button>
            </div>
          </div>
          {/* Honey Jar Image */}
          <div className="col-start-8 col-span-5 relative" style={{ top: '-50px' }}>
            <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
          </div>
        </div>

        {/* Yellow Wave Background */}
        <div className="absolute top-[350px] left-0 w-screen -z-10">
          <img src="/bg2.png" alt="Yellow Background with Waves" className="w-full" />
        </div>

        {/* Dynamic Background Color starting from top: 3175px */}
        <div
          className="absolute left-0 w-full -z-10"
          style={{
            top: '3160px', // Start the background color just below the yellow wave
            backgroundColor: '#E2C7BB',
            height: `${bgHeight -2300}px`, // Dynamically extend with validators
          }}
        ></div>

        {/* Validator Scoring Section */}
        <div ref={validatorRef} className="relative z-20 mt-[50px]">
          <ValidatorScoring />
        </div>

        {/* Bear Figure Above Footer */}
        <div className="flex justify-center py-10 relative z-30">
          <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
        </div>

        {/* Footer */}
      </div>
        <Footer />
    </>
  );
}

export default StakePage;


// import HoneyJar from '../assets/HoneyJar.svg';
// import bear from '../assets/bear.svg';
// import Footer from './Footer';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import { useRef, useEffect, useState } from 'react';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);

//   useEffect(() => {
//     // Dynamically adjust background height based on validator cards
//     if (validatorRef.current) {
//       const observer = new ResizeObserver(() => {
//         const validatorHeight = validatorRef.current.offsetHeight;
//         setBgHeight(validatorHeight);
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
//               <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//                 Stake
//               </button>
//             </div>
//           </div>
//           {/* Honey Jar Image */}
//           <div className="col-start-8 col-span-5 relative" style={{ top: '-50px' }}>
//             <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//           </div>
//         </div>

//         {/* Full-Screen Background Image without Fixed Height */}
//         <div className="absolute top-[350px] left-0 w-screen z-10"> {/* Adjusted z-index to 10 */}
//           <img src="/bg2.png" alt="Yellow Background with Waves" className="w-full h-auto object-cover" />
//         </div>

//         {/* Validator Scoring Section */}
//         <div ref={validatorRef} className="relative z-20 mt-[50px]">
//           <ValidatorScoring />
//         </div>

//         {/* Dynamic Background Color */}
//         <div
//           className="absolute left-0 w-full z-0" // z-index set to 0 to place it behind the yellow wave image
//           style={{
//             top: '850px', // Start the background color just below the yellow wave
//             backgroundColor: '#E2C7BB',
//             height: `${bgHeight + 100}px`, // Dynamically extend with validators
//           }}
//         ></div>

//         {/* Bear Figure Above Footer */}
//         <div className="flex justify-center py-10 relative z-30">
//           <img src={bear} alt="Bear Figure" className="w-[200px] h-auto" />
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default StakePage;

