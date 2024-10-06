// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import l0vd from '../../assets/l0vd.svg';
// import SingleValidator from './SingleValidator';
// function ValidatorScoring() {
//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           {/* Validator Scoring Title */}
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           {/* Dropdown Menu */}
//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           {/* Search Input */}
//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 space-x-5 items-center mb-10 ">
//           <div
//             className="flex flexcol justify-between col-start-2 col-span-9
//         w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white"
//           >
//             <div className="font-poppins font-regular ">
//               <p className=" text-[24px]">L0vd Score</p>
//               <p className="text-[14px]">
//                 L0vd score is based on several metrics
//               </p>{' '}
//             </div>
//             <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>TVL</p>
//                 <p>Score</p>
//                 <p>Score</p>
//               </div>
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>260000 BGT</p>
//                 <p>99 %</p>
//                 <p>Score</p>
//               </div>
//             </div>
//             <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
//               <p>What is L0vd score?</p>
//               <img src={score} alt="score" />
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-12 ">
//           <div className="col-start-2 col-span-10 flex  justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-[72px] py-2 pl-5 pr-2 bg-white mb-5">
//             <div className="flex space-x-2 items-center justify-center">
//               <div className=" ring-1 ring-inset ring-light-blue rounded-full w-[62px] h-[62px] flex items-center justify-center">
//                 <img src={l0vd} alt="l0vd" className="w-[50px] h-[42px]" />
//               </div>
//               <div className="flex flex-col font-poppins font-regular">
//                 <p className="text-[20px]">L0vd</p>
//                 <p className="text-[12px]">456789 BGT</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 ">
//               <div className=" grid justify-items-center font-poppins px-[8px] py-[4px] rounded-[10px] w-[107px] h-[56px] bg-light-green text-dark-green">
//                 <p className="font-bold text-[14px]">Current APY</p>
//                 <p className="font-regular text-[18px]">24.33</p>
//               </div>
//               <div className=" grid justify-items-center font-poppins px-[8px] py-[4px]  rounded-[10px] w-[94px] h-[56px] bg-light-blue text-lightblue-stroke">
//                 <p className="font-bold text-[14px]">L0vd Score</p>
//                 <p className="font-regular text-[18px]">90.99%</p>
//               </div>
//               <div className=" grid justify-items-center font-poppins px-[10px] py-[10px] ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-[10px] w-[43px] h-[47px]">
//                 <p className="font-regular text-[18px]">1</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <SingleValidator />
//         <SingleValidator />
//         <SingleValidator />
//         <SingleValidator />
//         <SingleValidator />
//         <SingleValidator />
//         <SingleValidator />
//         <div className='flex self-center justify-center px-4 py-2 rounded-lg bg-white text-[18px]'>

     
//        Load more

//         </div>
//         <div className='flex justify-center'>
//         <img src="./bear.png" alt="bear" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import l0vd from '../../assets/l0vd.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useRef, useEffect, useCallback } from 'react';

// function ValidatorScoring() {
//   const [validators, setValidators] = useState([]); // List of validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMore, setHasMore] = useState(true); // Track if more validators are available to load
//   const loader = useRef(null); // Reference to the loader element at the bottom

//   // Function to simulate fetching data from an API
//   const loadMoreValidators = useCallback(async () => {
//     if (loading || !hasMore) return; // Prevent loading if already in progress or no more data
//     setLoading(true);

//     // Simulate fetching more validators
//     setTimeout(() => {
//       const newValidators = Array.from({ length: 5 }, (_, i) => i + 1 + validators.length); // Fetch 5 more validators
//       if (newValidators.length === 0) {
//         setHasMore(false); // No more validators to load
//       } else {
//         setValidators((prev) => [...prev, ...newValidators]); // Append new validators
//       }
//       setLoading(false);
//     }, 1500);
//   }, [loading, validators, hasMore]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !loading && hasMore) {
//         loadMoreValidators(); // Load more validators when the loader comes into view
//       }
//     });

//     if (loader.current) {
//       observer.observe(loader.current); // Observe the loader element
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current); // Unobserve when component unmounts
//       }
//     };
//   }, [loading, hasMore, loadMoreValidators]);

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 space-x-5 items-center mb-10">
//           <div className="flex flexcol justify-between col-start-2 col-span-9 w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white">
//             <div className="font-poppins font-regular">
//               <p className="text-[24px]">L0vd Score</p>
//               <p className="text-[14px]">
//                 L0vd score is based on several metrics
//               </p>
//             </div>
//             <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>TVL</p>
//                 <p>Score</p>
//                 <p>Score</p>
//               </div>
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>260000 BGT</p>
//                 <p>99 %</p>
//                 <p>Score</p>
//               </div>
//             </div>
//             <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
//               <p>What is L0vd score?</p>
//               <img src={score} alt="score" />
//             </div>
//           </div>
//         </div>

//         {/* Render Validators */}
//         {validators.map((validator, index) => (
//           <SingleValidator key={index} />
//         ))}

//         {/* Loader Element */}
//         <div ref={loader} className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? 'Loading...' : hasMore ? 'Scroll down to load more' : 'No more validators'}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useRef, useEffect, useCallback } from 'react';

// function ValidatorScoring() {
//   const [validators, setValidators] = useState(Array.from({ length: 10 }, (_, i) => i + 1)); // Initially load 10 validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMore, setHasMore] = useState(true); // Track if more validators are available to load
//   const loader = useRef(null); // Reference to the loader element at the bottom

//   // Function to simulate fetching data from an API
//   const loadMoreValidators = useCallback(async () => {
//     if (loading || !hasMore) return; // Prevent loading if already in progress or no more data
//     setLoading(true);

//     // Simulate fetching more validators
//     setTimeout(() => {
//       const newValidators = Array.from({ length: 5 }, (_, i) => i + 1 + validators.length); // Fetch 5 more validators
//       if (newValidators.length === 0) {
//         setHasMore(false); // No more validators to load
//       } else {
//         setValidators((prev) => [...prev, ...newValidators]); // Append new validators
//       }
//       setLoading(false);
//     }, 1500);
//   }, [loading, validators, hasMore]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !loading && hasMore) {
//         loadMoreValidators(); // Load more validators when the loader comes into view
//       }
//     });

//     if (loader.current) {
//       observer.observe(loader.current); // Observe the loader element
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current); // Unobserve when component unmounts
//       }
//     };
//   }, [loading, hasMore, loadMoreValidators]);

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 space-x-5 items-center mb-10">
//           <div className="flex flexcol justify-between col-start-2 col-span-9 w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white">
//             <div className="font-poppins font-regular">
//               <p className="text-[24px]">L0vd Score</p>
//               <p className="text-[14px]">
//                 L0vd score is based on several metrics
//               </p>
//             </div>
//             <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>TVL</p>
//                 <p>Score</p>
//                 <p>Score</p>
//               </div>
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>260000 BGT</p>
//                 <p>99 %</p>
//                 <p>Score</p>
//               </div>
//             </div>
//             <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
//               <p>What is L0vd score?</p>
//               <img src={score} alt="score" />
//             </div>
//           </div>
//         </div>

//         {/* Render Validators */}
//         {validators.map((validator, index) => (
//           <SingleValidator key={index} />
//         ))}

//         {/* Loader Element */}
//         <div ref={loader} className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? 'Loading...' : hasMore ? 'Scroll down to load more' : 'No more validators'}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useRef, useEffect, useCallback } from 'react';
// import LoadingSpinner from './LoadingSpinner';

// function ValidatorScoring() {
//   // Load 10 validators by default
//   const [validators, setValidators] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMore, setHasMore] = useState(true); // Track if more validators are available to load
//   const loader = useRef(null); // Reference to the loader element at the bottom
//   const [data, setData] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://bindexer.l0vd.com/api/rest/validators', {
//           method: 'GET',
//           headers: {
//             'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Error: ${response.status}`);
//         }

//         const result = await response.json();
//         setData(result.validators);
//         console.log(result,"res");
//         // setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(validators,"val");
//   console.log(data,"data");
//   // Function to simulate fetching data from an API
//   const loadMoreValidators = useCallback(async () => {
//     if (loading || !hasMore) return; // Prevent loading if already in progress or no more data
//     setLoading(true);

//     // Simulate fetching more validators
//     setTimeout(() => {
//       const newValidators = Array.from({ length: 10 }, (_, i) => i + 1 + validators.length); // Fetch 5 more validators
//       if (newValidators.length === 0) {
//         setHasMore(false); // No more validators to load
//       } else {
//         setValidators((prev) => [...prev, ...newValidators]); // Append new validators
//       }
//       setLoading(false);
//     }, 1500);
//   }, [loading, validators, hasMore]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !loading && hasMore) {
//         loadMoreValidators(); // Load more validators when the loader comes into view
//       }
//     });

//     if (loader.current) {
//       observer.observe(loader.current); // Observe the loader element
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current); // Unobserve when component unmounts
//       }
//     };
//   }, [loading, hasMore, loadMoreValidators]);

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 space-x-5 items-center mb-10">
//           <div className="flex flexcol justify-between col-start-2 col-span-9 w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white">
//             <div className="font-poppins font-regular">
//               <p className="text-[24px]">L0vd Score</p>
//               <p className="text-[14px]">
//                 L0vd score is based on several metrics
//               </p>
//             </div>
//             <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>TVL</p>
//                 <p>Score</p>
//                 <p>Score</p>
//               </div>
//               <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
//                 <p>260000 BGT</p>
//                 <p>99 %</p>
//                 <p>Score</p>
//               </div>
//             </div>
//             <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
//               <p>What is L0vd score?</p>
//               <img src={score} alt="score" />
//             </div>
//           </div>
//         </div>

//         {/* Render Validators */}
//         {validators.map((validator, index) => (
//           <SingleValidator key={index} />
//         ))}

//         {/* Infinite Scroll Loader Element */}
//         <div ref={loader} className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? <LoadingSpinner /> : hasMore ? 'Scroll down to load more' : 'No more validators'}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useRef, useEffect, useCallback } from 'react';
// import LoadingSpinner from './LoadingSpinner';

// function ValidatorScoring() {
//   // State to hold the validator data fetched from the API
//   const [validators, setValidators] = useState([]);
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [hasMore, setHasMore] = useState(true); // Track if more validators are available to load
//   const loader = useRef(null); // Reference to the loader element at the bottom
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1); // Track the current page

//   // Function to fetch data from the API
//   const fetchValidators = async (page) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
//         method: 'GET',
//         headers: {
//           'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.validators.length > 0) {
//         setValidators((prev) => [...prev, ...result.validators]);
//       } else {
//         setHasMore(false); // No more validators to load
//       }
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   // Fetch initial validators when the component mounts
//   useEffect(() => {
//     fetchValidators(page);
//   }, [page]);

//   // Load more validators when the loader comes into view
//   const loadMoreValidators = useCallback(() => {
//     if (loading || !hasMore) return; // Prevent loading if already in progress or no more data
//     setPage((prevPage) => prevPage + 1);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !loading && hasMore) {
//         loadMoreValidators(); // Load more validators when the loader comes into view
//       }
//     });

//     if (loader.current) {
//       observer.observe(loader.current); // Observe the loader element
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current); // Unobserve when component unmounts
//       }
//     };
//   }, [loading, hasMore, loadMoreValidators]);

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 mb-2">
//           <div className='col-start-2 col-span-10 flex justify-between'>

//          <div className='flex space-x-20 items-center justify-center'>
//             <span>Rank</span>
//             <span>Validator</span>
//          </div>
//          <div className='flex justify-between space-x-20 '>
//           <div className=''>Incentives</div>
//           <div className='flex items-center space-x-6 '>
//             <div>Current APY</div>
//             <div>L0vd Score</div>
//           </div>
//           </div>
//          </div>
//         </div>

//         {/* Render Validators from API */}
//         {validators.map((validator, index) => (
//           <SingleValidator key={index} validator={validator} />
//         ))}

//         {/* Infinite Scroll Loader Element */}
//         <div ref={loader} className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? <LoadingSpinner /> : hasMore ? 'Scroll down to load more' : 'No more validators'}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import score from '../../assets/score.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useEffect } from 'react';
// import LoadingSpinner from './LoadingSpinner';

// function ValidatorScoring() {
//   // State to hold all validator data fetched from the API
//   const [allValidators, setAllValidators] = useState([]);
//   const [displayValidators, setDisplayValidators] = useState([]); // State to manage displayed validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(20); // Track how many validators are currently visible

//   // Function to fetch data from the API
//   const fetchValidators = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
//         method: 'GET',
//         headers: {
//           'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.validators && result.validators.length > 0) {
//         setAllValidators(result.validators);
//         setDisplayValidators(result.validators.slice(0, visibleCount)); // Display only the first 20 validators
//       } else {
//         setError('No validators found.');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial validators when the component mounts
//   useEffect(() => {
//     fetchValidators(); // Load the validators on initial load
//   }, []);

//   // Function to load more validators when button is clicked
//   const loadMoreValidators = () => {
//     if (loading) return; // Prevent loading if already in progress
//     const newVisibleCount = visibleCount + 20; // Increase the visible count by 20
//     setVisibleCount(newVisibleCount);
//     setDisplayValidators(allValidators.slice(0, newVisibleCount)); // Update the displayed validators
//   };

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 mb-2">
//           <div className='col-start-2 col-span-10 flex justify-between'>
//             <div className='flex space-x-20 items-center justify-center'>
//               <span>Rank</span>
//               <span>Validator</span>
//             </div>
//             <div className='flex justify-between space-x-20 '>
//               <div className=''>Incentives</div>
//               <div className='flex items-center space-x-6 '>
//                 <div>Current APY</div>
//                 <div>L0vd Score</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Render Validators from API */}
//         {displayValidators.map((validator, index) => (
//           <SingleValidator key={index} validator={validator} />
//         ))}

//         {/* Load More Button */}
//         <div className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? (
//             <LoadingSpinner />
//           ) : visibleCount < allValidators.length ? (
//             <button
//               onClick={loadMoreValidators}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Load More
//             </button>
//           ) : (
//             'No more validators'
//           )}
//         </div>

//         {error && <div className="text-red-500">{error}</div>}
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;


// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import info from '../../assets/info.svg';
// import SingleValidator from './SingleValidator';
// import { useState, useEffect } from 'react';
// import LoadingSpinner from './LoadingSpinner';
// import HoverCard from './HoverCard';

// function ValidatorScoring() {
//   // State to hold all validator data fetched from the API
//   const [allValidators, setAllValidators] = useState([]);
//   const [displayValidators, setDisplayValidators] = useState([]); // State to manage displayed validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(20); // Track how many validators are currently visible
//   const [searchTerm, setSearchTerm] = useState(''); // Track the search term input by the user
//   const [hovered, setHovered] = useState(false); // Track whether L0vd Score is hovered
//   const [hoveredPosition, setHoveredPosition] = useState({ x: 0, y: 0 }); // Track position for the hover card

//   // Function to fetch data from the API
//   const fetchValidators = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
//         method: 'GET',
//         headers: {
//           'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.validators && result.validators.length > 0) {
//         setAllValidators(result.validators);
//         setDisplayValidators(result.validators.slice(0, visibleCount)); // Display only the first 20 validators
//       } else {
//         setError('No validators found.');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial validators when the component mounts
//   useEffect(() => {
//     fetchValidators(); // Load the validators on initial load
//   }, []);

//   // Function to load more validators when button is clicked
//   const loadMoreValidators = () => {
//     if (loading) return; // Prevent loading if already in progress
//     const newVisibleCount = visibleCount + 20; // Increase the visible count by 20
//     setVisibleCount(newVisibleCount);
//     setDisplayValidators(filterValidators(allValidators, searchTerm).slice(0, newVisibleCount)); // Update the displayed validators
//   };

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setVisibleCount(20); // Reset visible count to initial value when search term changes
//     setDisplayValidators(filterValidators(allValidators, value).slice(0, 20));
//   };

//   // Function to filter validators based on the search term
//   const filterValidators = (validators, term) => {
//     if (!term) return validators;
//     return validators.filter((validator) =>
//       validator.name.toLowerCase().includes(term.toLowerCase())
//     );
//   };
//   const handleMouseEnter = (event) => {
//     const { clientX, clientY } = event;
//     setHoveredPosition({ x: clientX, y: clientY });
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   return (
//     <>
//       <div className='flex flex-col mb-2'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Sort by 
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 mb-2">
//           <div className='col-start-2 col-span-10 flex justify-between '>
//             <div className='flex space-x-20 items-center justify-center px-5'>
//               <span>Rank</span>
//               <span>Validator</span>
//             </div>
//             <div className='flex justify-between space-x-20 '>
//               <div className=''>Incentives</div>
//               <div className='flex items-center space-x-2 '>
//                 <div>Current APY</div>
//                 <div className='flex items-center '>L0vd Score<span onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   className="relative cursor-pointer ml-1"> 
//                    <img src={info} alt="score" />
//                    {hovered && (
//                     <div
//                       style={{
//                         position: 'fixed',
//                         top: hoveredPosition.y + 20,
//                         left: hoveredPosition.x,
//                       }}
//                     >
//                       <HoverCard />
//                     </div>
//                   )}</span></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Render Validators from API */}
//         {displayValidators.map((validator, index) => (
//           <SingleValidator key={index} validator={validator} />
//         ))}

//         {/* Load More Button */}
//         <div className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? (
//             <LoadingSpinner />
//           ) : visibleCount < filterValidators(allValidators, searchTerm).length ? (
//             <button
//               onClick={loadMoreValidators}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Load More
//             </button>
//           ) : (
//             'No more validators'
//           )}
//         </div>

//         {error && <div className="text-red-500">{error}</div>}
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { Menu, MenuButton } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import SingleValidator from './SingleValidator';
// import HoverCard from './HoverCard'; // Import HoverCard component
// import { useState, useEffect, useRef } from 'react';
// import LoadingSpinner from './LoadingSpinner';

// function ValidatorScoring() {
//   // State to hold all validator data fetched from the API
//   const [allValidators, setAllValidators] = useState([]);
//   const [displayValidators, setDisplayValidators] = useState([]); // State to manage displayed validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(20); // Track how many validators are currently visible
//   const [searchTerm, setSearchTerm] = useState(''); // Track the search term input by the user
//   const [hovered, setHovered] = useState(false); // Track whether L0vd Score is hovered
//   const scoreRef = useRef(null); // Reference to the L0vd Score element

//   // Function to fetch data from the API
//   const fetchValidators = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
//         method: 'GET',
//         headers: {
//           'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.validators && result.validators.length > 0) {
//         setAllValidators(result.validators);
//         setDisplayValidators(result.validators.slice(0, visibleCount)); // Display only the first 20 validators
//       } else {
//         setError('No validators found.');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial validators when the component mounts
//   useEffect(() => {
//     fetchValidators(); // Load the validators on initial load
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setVisibleCount(20); // Reset visible count to initial value when search term changes
//     setDisplayValidators(filterValidators(allValidators, value).slice(0, 20));
//   };

//   // Function to filter validators based on the search term
//   const filterValidators = (validators, term) => {
//     if (!term) return validators;
//     return validators.filter((validator) =>
//       validator.name.toLowerCase().includes(term.toLowerCase())
//     );
//   };

//   // Function to load more validators when button is clicked
//   const loadMoreValidators = () => {
//     if (loading) return; // Prevent loading if already in progress
//     const newVisibleCount = visibleCount + 20; // Increase the visible count by 20
//     setVisibleCount(newVisibleCount);
//     setDisplayValidators(filterValidators(allValidators, searchTerm).slice(0, newVisibleCount)); // Update the displayed validators
//   };

//   // Hover handlers for the L0vd Score
//   const handleMouseEnter = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   return (
//     <>
//       <div className='flex flex-col mb-2 relative'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Score
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//             </Menu>
//           </div>

//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-12 mb-2">
//           <div className='col-start-2 col-span-10 flex justify-between font-poppins font-bold'>
//             <div className='flex space-x-20 items-center justify-center px-2'>
//               <span>Rank</span>
//               <span>Validator</span>
//             </div>
//             <div className='flex justify-between space-x-20 '>
//             <div className='px-20 '>Incentives</div>
           
//               <div className='flex items-center space-x-12 '>
              

//             <div>Current APY</div>
//               <div className='flex items-center'>
//                  L0vd Score
//                 <div
//                   ref={scoreRef}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   className="relative cursor-pointer ml-1"
//                 ><img src={info} alt="score" />
//                   {hovered && scoreRef.current && (
//                     <div
//                     className="absolute z-10 p-4 w-[350px] bg-white rounded-lg shadow-md border border-gray-300 text-sm text-gray-800"
//                     style={{
//                         top: scoreRef.current.offsetHeight ,
//                         right: scoreRef.current.offsetWidth , // Adjust to show on the right under the score
//                       }}
//                     >
//                       <HoverCard />
//                     </div>
//                   )}
//                   </div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Render Validators from API */}
//         {displayValidators.map((validator, index) => (
//           <SingleValidator key={index} index={index} validator={validator} />
//         ))}

//         {/* Load More Button */}
//         <div className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? (
//             <LoadingSpinner />
//           ) : visibleCount < filterValidators(allValidators, searchTerm).length ? (
//             <button
//               onClick={loadMoreValidators}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Load More
//             </button>
//           ) : (
//             'No more validators'
//           )}
//         </div>

//         {error && <div className="text-red-500">{error}</div>}
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
// import { useState, useEffect, useRef } from 'react';
// import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
// import dropdown from '../../assets/dropdown.svg';
// import magnify from '../../assets/magnify.svg';
// import info from '../../assets/info.svg';
// import SingleValidator from './SingleValidator';
// import HoverCard from './HoverCard'; // Import HoverCard component
// import LoadingSpinner from './LoadingSpinner';

// function ValidatorScoring() {
//   // State to hold all validator data fetched from the API
//   const [allValidators, setAllValidators] = useState([]);
//   const [displayValidators, setDisplayValidators] = useState([]); // State to manage displayed validators
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(20); // Track how many validators are currently visible
//   const [searchTerm, setSearchTerm] = useState(''); // Track the search term input by the user
//   const [sortCriteria, setSortCriteria] = useState(null); // State to manage sort criteria
//   const [hovered, setHovered] = useState(false); // Track whether L0vd Score is hovered
//   const scoreRef = useRef(null); // Reference to the L0vd Score element

//   // Function to fetch data from the API
//   const fetchValidators = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
//         method: 'GET',
//         headers: {
//           'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }

//       const result = await response.json();
//       if (result.validators && result.validators.length > 0) {
//         setAllValidators(result.validators);
//         setDisplayValidators(result.validators.slice(0, visibleCount)); // Display only the first 20 validators
//       } else {
//         setError('No validators found.');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial validators when the component mounts
//   useEffect(() => {
//     fetchValidators(); // Load the validators on initial load
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setVisibleCount(20); // Reset visible count to initial value when search term changes
//     setDisplayValidators(filterValidators(allValidators, value).slice(0, 20));
//   };

//   // Function to filter validators based on the search term
//   const filterValidators = (validators, term) => {
//     if (!term) return validators;
//     return validators.filter((validator) =>
//       validator.name.toLowerCase().includes(term.toLowerCase())
//     );
//   };

//   // Function to load more validators when button is clicked
//   const loadMoreValidators = () => {
//     if (loading) return; // Prevent loading if already in progress
//     const newVisibleCount = visibleCount + 20; // Increase the visible count by 20
//     setVisibleCount(newVisibleCount);
//     setDisplayValidators(filterValidators(allValidators, searchTerm).slice(0, newVisibleCount)); // Update the displayed validators
//   };

//   // Function to handle sorting logic
//   const handleSort = (criteria) => {
//     setSortCriteria(criteria);
//     let sortedValidators = [...allValidators];

//     switch (criteria) {
//       case 'L0vdScoreAsc':
//         sortedValidators.sort((a, b) => a.l0vd_score - b.l0vd_score);
//         break;
//       case 'L0vdScoreDesc':
//         sortedValidators.sort((a, b) => b.l0vd_score - a.l0vd_score);
//         break;
//       case 'APYAsc':
//         sortedValidators.sort((a, b) => a.apy - b.apy);
//         break;
//       case 'APYDesc':
//         sortedValidators.sort((a, b) => b.apy - a.apy);
//         break;
//       case 'TVLAsc':
//         sortedValidators.sort((a, b) => a.current_stake.amount - b.current_stake.amount);
//         break;
//       case 'TVLDesc':
//         sortedValidators.sort((a, b) => b.current_stake.amount- a.current_stake.amount);
//         break;
//       default:
//         break;
//     }

//     setDisplayValidators(sortedValidators.slice(0, visibleCount));
//   };

//   return (
//     <>
//       <div className='flex flex-col mb-2 relative'>
//         <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
//           <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
//             Validator Scoring
//           </div>

//           {/* Sorting Dropdown */}
//           <div className="col-start-6 flex items-center">
//             <Menu as="div" className="relative inline-block text-left p-[10px]">
//               <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular  ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
//                 Sort By
//                 <img
//                   src={dropdown}
//                   alt="dropdown"
//                   className="w-[10px] h-[9px] self-center"
//                 />
//               </MenuButton>
//               <MenuItems className="absolute right-7 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('L0vdScoreAsc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       L0vd Score ↑
//                     </button>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('L0vdScoreDesc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       L0vd Score ↓
//                     </button>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('APYAsc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       Current APY ↑
//                     </button>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('APYDesc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       Current APY ↓
//                     </button>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('TVLAsc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       TVL ↑
//                     </button>
//                   )}
//                 </MenuItem>
//                 <MenuItem>
//                   {({ active }) => (
//                     <button
//                       onClick={() => handleSort('TVLDesc')}
//                       className={`${
//                         active ? 'bg-gray-100' : ''
//                       } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
//                     >
//                       TVL ↓
//                     </button>
//                   )}
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>

//           {/* Search Input */}
//           <div className="col-start-8 col-span-4 flex items-center justify-center">
//             <div className="relative w-[303px] h-[47px] m-2.5">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="w-full h-full ring-1 ring-inset ring-lightblue-stroke focus:outline-none focus:ring-1 focus:ring-inset focus:ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
//               />
//               <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
//                 <img src={magnify} alt="magnify" className="w-6 h-6" />
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Header Labels */}
//         <div className="grid grid-cols-12 mb-2">
//           <div className='col-start-2 col-span-10 flex justify-between font-poppins font-bold'>
//             <div className='flex space-x-8 items-center justify-center px-3'>
//               <span>Rank</span>
//               <span>Validator</span>
//             </div>
//             <div className='flex justify-between space-x-10'>
//               <div className='px-20'>Incentives</div>
//               <div className='flex items-center space-x-8 px-6'>
//                 <div>Current APY</div>
//                 <div className='flex items-center'>
//                L0vd Score
//                <div
//                   ref={scoreRef}
//                   onMouseEnter={()=>setHovered(true)}
//                   onMouseLeave={()=>setHovered(false)}
//                   className="relative cursor-pointer ml-1"
//                 ><img src={info} alt="score" />
//                   {hovered && scoreRef.current && (
//                     <div
//                     className="absolute z-10 p-4 w-[350px] bg-white rounded-lg shadow-md border border-gray-300 text-sm text-gray-800"
//                     style={{
//                         top: scoreRef.current.offsetHeight ,
//                         right: scoreRef.current.offsetWidth , // Adjust to show on the right under the score
//                       }}
//                     >
//                       <HoverCard />
//                     </div>
//                   )}
//                   </div> 
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Validator List */}
//         {displayValidators.map((validator, index) => (
//           <SingleValidator key={index} index={index} validator={validator} />
//         ))}

//         {/* Load More Button */}
//         <div className="flex justify-center p-5 text-xl text-gray-500">
//           {loading ? (
//             <LoadingSpinner />
//           ) : visibleCount < filterValidators(allValidators, searchTerm).length ? (
//             <button
//               onClick={loadMoreValidators}
//               className="bg-main-blue text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Load More
//             </button>
//           ) : (
//             'No more validators'
//           )}
//         </div>

//         {error && <div className="text-red-500">{error}</div>}
//       </div>
//     </>
//   );
// }

// export default ValidatorScoring;
import { useState, useEffect, useRef } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import dropdown from '../../assets/dropdown.svg';
import magnify from '../../assets/magnify.svg';
import info from '../../assets/info.svg';
import SingleValidator from './SingleValidator';
import HoverCard from './HoverCard'; // Import HoverCard component
import LoadingSpinner from './LoadingSpinner';

function ValidatorScoring() {
  // State to hold all validator data fetched from the API
  const [allValidators, setAllValidators] = useState([]);
  const [displayValidators, setDisplayValidators] = useState([]); // State to manage displayed validators
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20); // Track how many validators are currently visible
  const [searchTerm, setSearchTerm] = useState(''); // Track the search term input by the user
  const [sortCriteria, setSortCriteria] = useState(null); // State to manage sort criteria
  const [hovered, setHovered] = useState(false); // Track whether L0vd Score is hovered
  const scoreRef = useRef(null); // Reference to the L0vd Score element

  // Function to fetch data from the API
  const fetchValidators = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://bindexer.l0vd.com/api/rest/validators`, {
        method: 'GET',
        headers: {
          'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      if (result.validators && result.validators.length > 0) {
        setAllValidators(result.validators);
        setDisplayValidators(result.validators.slice(0, visibleCount)); // Display only the first 20 validators
      } else {
        setError('No validators found.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial validators when the component mounts
  useEffect(() => {
    fetchValidators(); // Load the validators on initial load
  }, []);

  // Function to filter and sort validators based on the search term and sort criteria
  const filterAndSortValidators = (validators, term, criteria) => {
    let filteredValidators = validators;
    if (term) {
      filteredValidators = validators.filter((validator) =>
        validator.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (criteria) {
      switch (criteria) {
        case 'L0vdScoreAsc':
          filteredValidators.sort((a, b) => a.l0vd_score - b.l0vd_score);
          break;
        case 'L0vdScoreDesc':
          filteredValidators.sort((a, b) => b.l0vd_score - a.l0vd_score);
          break;
        case 'APYAsc':
          filteredValidators.sort((a, b) => a.apy - b.apy);
          break;
        case 'APYDesc':
          filteredValidators.sort((a, b) => b.apy - a.apy);
          break;
        case 'TVLAsc':
          filteredValidators.sort((a, b) => a.current_stake.amount - b.current_stake.amount);
          break;
        case 'TVLDesc':
          filteredValidators.sort((a, b) => b.current_stake.amount - a.current_stake.amount);
          break;
        default:
          break;
      }
    }

    return filteredValidators;
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setVisibleCount(20); // Reset visible count to initial value when search term changes
    setDisplayValidators(filterAndSortValidators(allValidators, value, sortCriteria).slice(0, 20));
  };

  // Function to handle sorting logic
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sortedValidators = filterAndSortValidators(allValidators, searchTerm, criteria);
    setDisplayValidators(sortedValidators.slice(0, visibleCount));
  };

  // Function to load more validators when button is clicked
  const loadMoreValidators = () => {
    if (loading) return; // Prevent loading if already in progress
    const newVisibleCount = visibleCount + 20; // Increase the visible count by 20
    setVisibleCount(newVisibleCount);
    setDisplayValidators(filterAndSortValidators(allValidators, searchTerm, sortCriteria).slice(0, newVisibleCount));
  };

  return (
    <>
      <div className='flex flex-col mb-2 relative'>
        <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
          <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
            Validator Scoring
          </div>

          {/* Sorting Dropdown */}
          <div className="col-start-6 flex items-center">
            <Menu as="div" className="relative inline-block text-left p-[10px]">
              <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
                Sort By
                <img
                  src={dropdown}
                  alt="dropdown"
                  className="w-[10px] h-[9px] self-center"
                />
              </MenuButton>
              <MenuItems className="absolute right-7 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('L0vdScoreAsc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      L0vd Score ↑
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('L0vdScoreDesc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      L0vd Score ↓
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('APYAsc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      Current APY ↑
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('APYDesc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      Current APY ↓
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('TVLAsc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      TVL ↑
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => handleSort('TVLDesc')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } group flex rounded-md items-center w-full px-4 py-1 text-sm text-gray-700`}
                    >
                      TVL ↓
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          {/* Search Input */}
          <div className="col-start-8 col-span-4 flex items-center justify-center">
            <div className="relative w-[303px] h-[47px] m-2.5">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full h-full ring-1 ring-inset ring-lightblue-stroke focus:outline-none focus:ring-1 focus:ring-inset focus:ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
              />
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
                <img src={magnify} alt="magnify" className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>

        {/* Header Labels */}
        <div className="grid grid-cols-12 mb-2">
          <div className='col-start-2 col-span-10 flex justify-between font-poppins font-bold'>
            <div className='flex space-x-8 items-center justify-center px-3'>
              <span>Rank</span>
              <span>Validator</span>
            </div>
            <div className='flex justify-between space-x-10'>
              <div className='px-20'>Incentives</div>
              <div className='flex items-center space-x-8 px-6'>
                <div>Current APY</div>
                <div className='flex items-center'>
                  L0vd Score
                  <div
                    ref={scoreRef}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative cursor-pointer ml-1"
                  >
                    <img src={info} alt="score" />
                    {hovered && scoreRef.current && (
                      <div
                        className="absolute z-10 p-4 w-[500px] bg-white rounded-lg shadow-md border border-gray-300 text-sm text-gray-800"
                        style={{
                          top: scoreRef.current.offsetHeight,
                          right: scoreRef.current.offsetWidth, // Adjust to show on the right under the score
                        }}
                      >
                        <HoverCard />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validator List */}
        {displayValidators.map((validator, index) => (
          <SingleValidator key={index} index={index} validator={validator} />
        ))}

        {/* Load More Button */}
        <div className="flex justify-center p-5 text-xl text-gray-500">
          {loading ? (
            <LoadingSpinner />
          ) : visibleCount < filterAndSortValidators(allValidators, searchTerm, sortCriteria).length ? (
            <button
              onClick={loadMoreValidators}
              className="bg-main-blue text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Load More
            </button>
          ) : (
            'No more validators'
          )}
        </div>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
}

export default ValidatorScoring;
