import HoneyJar from '../assets/HoneyJar.svg';
import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
import { useRef, useEffect, useState } from 'react';

function StakePage() {
  const [bgHeight, setBgHeight] = useState(0);
  const validatorRef = useRef(null);

  useEffect(() => {
    // Set the background height dynamically based on the Validator Scoring section height
    if (validatorRef.current) {
      const validatorHeight = validatorRef.current.offsetHeight;
      setBgHeight(validatorHeight + 200); // Adding some space to align wave with the end
    }
  }, [validatorRef]);

  return (
    <>
      <div className="relative flex flex-col px-[160px]">
        {/* Staking Section */}
        <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
          {' '}
          {/* Moved honey jar section up */}
          <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
            <div className="mx-[26px] my-[28px] space-y-[25px]">
              <p className="font-poppins font-regular text-[40px]">
                Stake with L0vd
              </p>
              <p className="font-poppins font-regular text-[18px]">
                Stake with reliable provider who is contributing to more than 50
                networks
              </p>
              <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
                Stake
              </button>
            </div>
          </div>
          {/* Honey Jar Image */}
          <div
            className="col-start-8 col-span-5 relative"
            style={{ top: '-50px' }}
          >
            {' '}
            {/* Move honey jar up */}
            <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
          </div>
        </div>

        {/* Full-Screen Background Image with Waves */}
        <div
          className="absolute top-[350px] left-0 w-screen -z-10"
          style={{ height: `${bgHeight}px` }}
        >
          {' '}
          {/* Moved wave up */}
          <img
            src="/bg2.png"
            alt="Yellow Background with Waves"
            className="w-screen h-full object-fill" // Using object-fill to ensure full image is displayed
          />
        </div>

        {/* Validator Scoring Section */}
        <div ref={validatorRef} className="relative z-20 mt-[50px]">
          <ValidatorScoring />
        </div>
      </div>
    </>
  );
}

export default StakePage;
// import React, { useState, useRef, useEffect } from 'react';
// import HoneyJar from '../assets/HoneyJar.svg';
// import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';
// import SingleValidator from './stakecomponents.jsx/SingleValidator';

// function StakePage() {
//   const [bgHeight, setBgHeight] = useState(0);
//   const validatorRef = useRef(null);
//   const [visibleValidators, setVisibleValidators] = useState([]); // Track visible validators
//   const [startIndex, setStartIndex] = useState(0); // Track the first card's index

//   // Mock data for validators (replace with actual data)
//   const validators = Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     name: `Validator ${i + 1}`,
//     score: (Math.random() * 100).toFixed(2),
//   }));

//   useEffect(() => {
//     // Dynamically set the height for the background based on the Validator Scoring section
//     if (validatorRef.current) {
//       const validatorHeight = validatorRef.current.offsetHeight;
//       setBgHeight(validatorHeight + 200); // Adjust this value for wave alignment
//     }
//     // Show the first 5 validators initially
//     setVisibleValidators(validators.slice(0, 5));
//   }, [validatorRef]);

//   // Handle scroll event for infinite scrolling
//   const handleScroll = (e) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.target;

//     // Scrolling down (if there's more validators to load)
//     if (scrollTop + clientHeight >= scrollHeight - 50 && startIndex + 5 < validators.length) {
//       setStartIndex((prevStart) => {
//         const nextIndex = prevStart + 5;
//         setVisibleValidators(validators.slice(nextIndex, nextIndex + 5)); // Show next 5 validators
//         return nextIndex;
//       });
//     }

//     // Scrolling up (if there's previous validators to load)
//     if (scrollTop === 0 && startIndex > 0) {
//       setStartIndex((prevStart) => {
//         const prevIndex = prevStart - 5;
//         setVisibleValidators(validators.slice(prevIndex, prevIndex + 5)); // Show previous 5 validators
//         return prevIndex;
//       });
//     }
//   };

//   return (
//     <div className="relative flex flex-col px-[160px]">
//       {/* Staking Section */}
//       <div className="grid grid-cols-12 space-x-5 mt-[80px] relative">
//         <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] bg-white">
//           <div className="mx-[26px] my-[28px] space-y-[25px]">
//             <p className="font-poppins font-regular text-[40px]">
//               Stake with L0vd
//             </p>
//             <p className="font-poppins font-regular text-[18px]">
//               Stake with reliable provider who is contributing to more than 50 networks
//             </p>
//             <button className="p-[10px] font-poppins font-regular text-[24px] bg-btn-blue text-white w-[368px] h-[56px] rounded-[10px]">
//               Stake
//             </button>
//           </div>
//         </div>

//         {/* Honey Jar Image */}
//         <div className="col-start-8 col-span-5 relative" style={{ top: '-50px' }}>
//           <img src={HoneyJar} alt="Honey Jar" className="relative z-10" />
//         </div>
//       </div>

//       {/* Full-Screen Background Image with Waves */}
//       <div className="absolute top-[350px] left-0 w-screen -z-10" style={{ height: `${bgHeight}px` }}>
//         <img src="/bg2.png" alt="Yellow Background with Waves" className="w-screen h-full object-fill" />
//       </div>

//       {/* Validator Scoring Section */}
//       <div ref={validatorRef} className="relative z-20 mt-[50px]">
//         <ValidatorScoring />
//       </div>

//       {/* Infinite Scroll Validator Cards */}
//       <div
//         className="overflow-y-auto h-[300px] mt-[50px] border border-gray-300" // Scrollable container with height
//         onScroll={handleScroll}
//         style={{ height: '300px' }} // Ensure it has limited height to scroll
//       >
//         {visibleValidators.map((validator) => (
//           <SingleValidator key={validator.id} validator={validator} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StakePage;
