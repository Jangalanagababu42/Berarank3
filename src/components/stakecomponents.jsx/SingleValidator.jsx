// import l0vd from '../../assets/l0vd.svg';

// function SingleValidator() {
//   return (
//     <>
//       <div className="grid grid-cols-12 ">
//         <div className="col-start-2 col-span-10 flex  justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-[72px] py-2 pl-5 pr-2 bg-white mb-5">
//           <div className="flex space-x-2 items-center justify-center">
//             <div className=" ring-1 ring-inset ring-light-blue rounded-full w-[62px] h-[62px] flex items-center justify-center">
//               <img src={l0vd} alt="l0vd" className="w-[50px] h-[42px]" />
//             </div>
//             <div className="flex flex-col font-poppins font-regular">
//               <p className="text-[20px]">L0vd</p>
//               <p className="text-[12px]">456789 BGT</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 ">
//             <div className=" grid justify-items-center font-poppins px-[8px] py-[4px] rounded-[10px] w-[107px] h-[56px] bg-light-green text-dark-green">
//               <p className="font-bold text-[14px]">Current APY</p>
//               <p className="font-regular text-[18px]">24.33</p>
//             </div>
//             <div className=" grid justify-items-center font-poppins px-[8px] py-[4px]  rounded-[10px] w-[94px] h-[56px] bg-light-blue text-lightblue-stroke">
//               <p className="font-bold text-[14px]">L0vd Score</p>
//               <p className="font-regular text-[18px]">90.99%</p>
//             </div>
//             <div className=" grid 	 justify-items-center font-poppins px-[10px] py-[10px] ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-[10px] w-[43px] h-[47px]">
//               <p className="font-regular text-[18px]">1</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleValidator;
import l0vd from '../../assets/l0vd.svg';

function SingleValidator() {
  return (
    <div className="grid grid-cols-12 px-4 md:px-0">
      <div className="col-span-12 md:col-start-2 md:col-span-10 flex flex-col md:flex-row justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-auto py-4 md:py-2 px-4 md:pl-5 md:pr-2 bg-white mb-5 space-y-4 md:space-y-0">
        {/* Left Section: Validator Info */}
        <div className="flex space-x-4 md:space-x-2 items-center">
          <div className="ring-1 ring-inset ring-light-blue rounded-full w-16 h-16 md:w-[62px] md:h-[62px] flex items-center justify-center">
            <img src={l0vd} alt="l0vd" className="w-12 h-10 md:w-[50px] md:h-[42px]" />
          </div>
          <div className="flex flex-col font-poppins font-regular">
            <p className="text-lg md:text-[20px]">L0vd</p>
            <p className="text-sm md:text-[12px]">456789 BGT</p>
          </div>
        </div>

        {/* Right Section: Scoring and Ranking */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
          <div className="grid justify-items-center font-poppins px-4 py-2 md:px-[8px] md:py-[4px] rounded-[10px] w-full md:w-[107px] h-auto md:h-[56px] bg-light-green text-dark-green">
            <p className="font-bold text-sm md:text-[14px]">Current APY</p>
            <p className="font-regular text-lg md:text-[18px]">24.33</p>
          </div>
          <div className="grid justify-items-center font-poppins px-4 py-2 md:px-[8px] md:py-[4px] rounded-[10px] w-full md:w-[94px] h-auto md:h-[56px] bg-light-blue text-lightblue-stroke">
            <p className="font-bold text-sm md:text-[14px]">L0vd Score</p>
            <p className="font-regular text-lg md:text-[18px]">90.99%</p>
          </div>
          <div className="grid justify-items-center font-poppins px-4 py-2 md:px-[10px] md:py-[10px] ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-[10px] w-12 md:w-[43px] h-auto md:h-[47px]">
            <p className="font-regular text-lg md:text-[18px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleValidator;
