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
              
//               <p className="font-regular text-[18px]">24.33</p>
//             </div>
//             <div className=" grid justify-items-center font-poppins px-[8px] py-[4px]  rounded-[10px] w-[94px] h-[56px] bg-light-blue text-lightblue-stroke">
             
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


// function SingleValidator({ validator }) {
//   console.log(validator,"val")
//   return (
//     <>
//       <div className="grid grid-cols-12 ">
//         <div className="col-start-2 col-span-10 flex justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-[72px] py-2 pl-5 pr-2 bg-white mb-5">
//           <div className="flex space-x-2 items-center justify-center">
//           <div className="flex justify-center items-center  font-poppins  ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-full w-[43px] h-[47px]">
//               <p className="font-regular text-[18px]">1</p>
//             </div>
//             <div className="ring-1 ring-inset ring-light-blue rounded-full w-[62px] h-[62px] flex items-center justify-center">
//               <img src={validator.logo_uri} alt="logo img" className="object-fill rounded-full" />
//             </div>
//             <div className="flex flex-col font-poppins font-regular">
//               <p className="text-[20px]">{validator.name}</p>
//               <p className="text-[12px]">{validator.current_stake.amount.toFixed(2)} BGT</p>
//             </div>
//           </div>
//           <div className='flex justify-between '>
         
//           <div className="flex items-center col-start-6 space-x-3 ">

            
//           {validator.current_val_gauges.map((gauge, index) => (
//                 <div key={index} className="rounded-full w-[62px] h-[62px] flex items-center justify-around">
//                    {gauge.gauges_list && gauge.gauges_list.logo_uri ? (
//                     <img
//                         src={gauge.gauges_list.logo_uri}
//                         alt={`Gauge Logo ${index + 1}`}
//                         className="object-fill rounded-full"
//                     /> ) : (
//                       <p>No logo available</p>
//                   )}
//                 </div>))}
//             </div>
//           <div className="flex items-center space-x-3 ">
//             <div className="grid justify-items-center font-poppins px-[8px] py-[4px] rounded-[10px]  bg-light-green text-dark-green">
//               <p className="font-regular text-[18px]">24.33%</p>
//             </div>
//             <div className="grid justify-items-center font-poppins px-[8px] py-[4px] rounded-[10px]  bg-light-blue text-lightblue-stroke">
//               <p className="font-regular text-[18px]">90.00%</p>
//             </div>
            
//           </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleValidator;
import React from "react";
import altlogo  from '../../assets/altlogo.svg';

function SingleValidator(props) {
  const{index,validator}=props;
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-10 flex justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-[72px] py-2 pl-5 pr-2 bg-white mb-5">
          <div className="flex space-x-6 items-center justify-center">
            <div className="flex justify-center items-center font-poppins ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-full w-[40px] h-[40px]">
              <p className="font-regular text-[18px]">{index+1}</p>
            </div>
            <div className="flex items-center  space-x-2">

            <div className="ring-1 ring-inset ring-light-blue rounded-full w-[40px] h-[40px] flex items-center justify-center">
              <img src={validator.logo_uri ? validator.logo_uri : altlogo} alt="logo img" className="object-fill rounded-full" />
            </div>
            <div className="flex flex-col font-poppins font-regular">
              <p className="text-[16px]">{validator.name}</p>
              <p className="text-[12px] text-grey-text">{validator.current_stake.amount.toFixed(2)} BGT</p>
            </div>
            </div>
          </div>
          
          <div className="flex justify-between w-50 items-center space-x-20">
            <div
              className={`flex items-center ${
                validator.current_val_gauges.length === 1
                  ? "justify-center"
                  : validator.current_val_gauges.length === 2
                  ? "justify-around"
                  : "justify-between"
              } space-x-3 flex-1`}
            >
              {validator.current_val_gauges.map((gauge, index) => (
                
                <div key={index} className="rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  { console.log(gauge)}
                  {gauge.gauges_list && gauge.gauges_list.logo_uri ? (
                    <img
                      src={gauge.gauges_list.logo_uri}
                      alt={`Gauge Logo ${index + 1}`}
                      className="object-fill rounded-full"
                    />
                  ) : (
                    <img
                      src={altlogo}
                      alt={`Gauge Logo ${index + 1}`}
                      className="object-fill rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-[43px] px-10">
              <div className="grid justify-items-center font-poppins py-[8px] px-[12px]  bg-light-green rounded-[20px]">
                <p className="font-bold text-[16px]">24.33%</p>
              </div>
              <div className="grid justify-items-center font-poppins py-[8px] px-[12px]  bg-light-blue rounded-[20px]">
                <p className="font-bold text-[16px]">90.00%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleValidator;
