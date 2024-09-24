import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import dropdown from '../../assets/dropdown.svg';
import magnify from '../../assets/magnify.svg';
import score from '../../assets/score.svg';
import l0vd from '../../assets/l0vd.svg';
import SingleValidator from './SingleValidator';
function ValidatorScoring() {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
          {/* Validator Scoring Title */}
          <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
            Validator Scoring
          </div>

          {/* Dropdown Menu */}
          <div className="col-start-6 flex items-center">
            <Menu as="div" className="relative inline-block text-left p-[10px]">
              <MenuButton className="inline-flex justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-grey-stroke text-[16px] font-poppins font-regular text-gray-900 ring-1 ring-inset ring-lightblue-stroke hover:bg-gray-50 w-[150px] h-[45px]">
                Score
                <img
                  src={dropdown}
                  alt="dropdown"
                  className="w-[10px] h-[9px] self-center"
                />
              </MenuButton>
            </Menu>
          </div>

          {/* Search Input */}
          <div className="col-start-8 col-span-4 flex items-center justify-center">
            <div className="relative w-[303px] h-[47px] m-2.5">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full ring-1 ring-inset ring-lightblue-stroke rounded-[10px] px-12 py-3 md:py-4 text-[16px] text-grey-stroke"
              />
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
                <img src={magnify} alt="magnify" className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 space-x-5 items-center mb-10 ">
          <div
            className="flex flexcol justify-between col-start-2 col-span-9
        w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white"
          >
            <div className="font-poppins font-regular ">
              <p className=" text-[24px]">L0vd Score</p>
              <p className="text-[14px]">
                L0vd score is based on several metrics
              </p>{' '}
            </div>
            <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-lightblue-stroke rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
              <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
                <p>TVL</p>
                <p>Score</p>
                <p>Score</p>
              </div>
              <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
                <p>260000 BGT</p>
                <p>99 %</p>
                <p>Score</p>
              </div>
            </div>
            <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
              <p>What is L0vd score?</p>
              <img src={score} alt="score" />
            </div>
          </div>
        </div>
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
        <SingleValidator />
        <SingleValidator />
        <SingleValidator />
        <SingleValidator />
        <SingleValidator />
        <SingleValidator />
        <SingleValidator />
        <div>panda</div>
      </div>
    </>
  );
}

export default ValidatorScoring;
