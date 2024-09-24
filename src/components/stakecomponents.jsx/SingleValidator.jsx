import l0vd from '../../assets/l0vd.svg';

function SingleValidator() {
  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="col-start-2 col-span-10 flex  justify-between ring-1 ring-offset ring-light-blue rounded-[20px] h-[72px] py-2 pl-5 pr-2 bg-white mb-5">
          <div className="flex space-x-2 items-center justify-center">
            <div className=" ring-1 ring-inset ring-light-blue rounded-full w-[62px] h-[62px] flex items-center justify-center">
              <img src={l0vd} alt="l0vd" className="w-[50px] h-[42px]" />
            </div>
            <div className="flex flex-col font-poppins font-regular">
              <p className="text-[20px]">L0vd</p>
              <p className="text-[12px]">456789 BGT</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <div className=" grid justify-items-center font-poppins px-[8px] py-[4px] rounded-[10px] w-[107px] h-[56px] bg-light-green text-dark-green">
              <p className="font-bold text-[14px]">Current APY</p>
              <p className="font-regular text-[18px]">24.33</p>
            </div>
            <div className=" grid justify-items-center font-poppins px-[8px] py-[4px]  rounded-[10px] w-[94px] h-[56px] bg-light-blue text-lightblue-stroke">
              <p className="font-bold text-[14px]">L0vd Score</p>
              <p className="font-regular text-[18px]">90.99%</p>
            </div>
            <div className=" grid 	 justify-items-center font-poppins px-[10px] py-[10px] ring-1 ring-offset ring-lightblue-stroke text-main-blue rounded-[10px] w-[43px] h-[47px]">
              <p className="font-regular text-[18px]">1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleValidator;
