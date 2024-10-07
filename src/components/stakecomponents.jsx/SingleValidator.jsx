
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
              <img src={validator.logo_uri || altlogo} alt="logo img"  onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop in case default image also fails
            e.target.src = altlogo; // Set default image if API image fails
          }} className="object-fill rounded-full" />
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
