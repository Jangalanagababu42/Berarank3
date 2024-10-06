import React from 'react';

function HoverCard() {
  return (
    <div className='px-4'>
      <h3 className="font-poppins font-bold text-[16px] text-black mb-2">L0vd score - find the best validator to stake</h3>
      <p className="font-poppins font-regular text-[12px] mb-2">
        We track historical performance, including commission changes, APY history, and gauge updates,
        while also assessing the risk profile of each validator. Our scoring system rewards actions that 
        benefit the network and penalizes harmful behavior, ensuring you get the most reliable recommendations.
      </p>
      <h4 className="font-poppins font-bold text-[16px] mb-1">How we calculate it</h4>
      <p className="font-poppins font-regular text-[12px] text-grey-stroke mb-2">
        Score version: v0.1
      </p>
      <p className='ml-28 font-poppins font-bold text-[12px]'>Score</p>
      <div className='flex flex-col font-poppins font-regular text-[12px]'>
      <div className='flex flex-row space-x-20'>
        

      <p className="mb-2 mr-2">APY</p>
      <p className="mb-2">0-100%</p>
        </div>
        <div className='flex flex-row space-x-3'>
        

      <p className="mb-2">Decentralization</p>
      <p className="mb-2">0-100%</p>
        </div>
      </div>
      <p className="font-poppins font-bold text-[12px] text-main-blue">L0vd Score = 0.5 * APY Score + 0.5 * Decentralization Score</p>
    </div>
  );
}

export default HoverCard;
