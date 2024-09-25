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
      setBgHeight(validatorHeight + 600); // Adding some space to align wave with the end
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
