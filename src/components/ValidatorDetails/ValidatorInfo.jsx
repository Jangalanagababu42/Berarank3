import altlogo  from '../../assets/altlogo.svg';
import ph_copy from "../../assets/ph_copy.svg";
import world from "../../assets/clarity_world-line.svg";
import twitter_logo from '../../assets/black_X.svg';
import { useState } from 'react';
function ValidatorInfo({validatorDetails}) {
  const validator=validatorDetails?.[0];
  console.log(validator,"val obj")
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(true); // Set copy success to true
        setTimeout(() => setCopySuccess(false), 5000); // Reset after 2 seconds
      },
      () => {
        setCopySuccess(false);
      }
    );
  };
  const blueFilter = 'invert(33%) sepia(89%) saturate(3863%) hue-rotate(191deg) brightness(99%) contrast(95%)';

    return (
      <div  className=' space-y-[36px]'>
        
            
            <div className="flex items-center  space-x-[16px]">

<div className="ring-1 ring-inset ring-light-blue rounded-full w-[75px] h-[75px] flex items-center justify-center">
  <img src={validator?.logo_uri ||altlogo} alt="logo img"  onError={(e) => {
e.target.onerror = null; // Prevents infinite loop in case default image also fails
e.target.src = altlogo; // Set default image if API image fails
}} className="object-fill rounded-full" />
</div>
<div className=" font-poppins font-bold">
  <p className="text-[24px]">{validator?.name}</p>
 
</div>
</div>
          <div className='grid grid-flow-col justify-stretch space-x-[22px]'>
            <div className=' flex flex-col font-poppins border-l-4 border-l-dark-green  bg-light-green px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>{validator?.current_l0vd_score.value}</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>Commission</p>
            <p className='font-bold text-[20px]'>{validator?.
current_commision.commission
}</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>Score rank</p>
            <p className='font-bold text-[20px]'>1</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>Current APY</p>
            <p className='font-bold text-[20px]'>{validator?.current_apy
.value}</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>Delegated</p>
            <p className='font-bold text-[20px]'>{validator?.current_stake.amount.toFixed(0)} BGT</p></div>
            </div>  
       
        <div className='space-y-[16px] font-poppins text-[16px]'>
        <div className="flex font-poppins space-x-[90px]">
  <span className="font-bold flex-none w-[120px]">Description</span>
  <span className="font-regular flex-grow text-justify">
    {validator?.description}
  </span>
</div>

            <div className='flex space-x-[50px] font-poppins '>
                <span className="font-bold ">Incentives Address</span>
                <span className='flex font-regular space-x-[7px]'>
                    <img src={ph_copy} alt="copy" style={{
              cursor: 'pointer',
              filter: copySuccess ? blueFilter : 'none', // Apply filter if copySuccess is true
            }} onClick={() => copyToClipboard(validator?.id)} />
                    {validator?.id}</span>
            </div>
            <div className='flex space-x-[100px] font-poppins '>
                <span className="font-bold ">Social Media</span>
                <span className='flex space-x-[8px]'>
                <a
                href={validator?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={world} alt="github_logo" className='w-5 h-5' />
              </a>
              <a
                href={validator?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={twitter_logo} alt="github_logo" className='w-4 h-4' />
              </a>
                </span>
            </div>
            
        </div>
        <div className='flex justify-between items-center w-2/3 font-bold text-[16px]'>
          <div className='space-y-2'>
            <div>Active Incentives</div>
            <div
              className={`flex items-center space-x-[24px] ${
                validator?.current_val_gauges.length === 1
                  ? "justify-center"
                  : validator?.current_val_gauges.length === 2
                  ? "justify-around"
                  : "justify-between"
              } space-x-3 flex-1`}
            >
              {validator?.current_val_gauges.map((gauge, index) => (
                
                <div key={index} className="rounded-full w-[44px] h-[44px] flex items-center justify-center">
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
          </div>
          <div className='space-y-2'>
            <div>Active Gauge vaults</div>
            <div
              className={`flex items-center space-x-[24px] ${
                validator?.current_val_gauges.length === 1
                  ? "justify-center"
                  : validator?.current_val_gauges.length === 2
                  ? "justify-around"
                  : "justify-between"
              } space-x-3 flex-1`}
            >
              {validator?.current_val_gauges.map((gauge, index) => (
                
                <div key={index} className="rounded-full w-[44px] h-[44px] flex items-center justify-center">
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
          </div>
        </div>
        <div className=' inline-block px-10 py-2 cursor-pointer font-poppins font-regular text-[24px] bg-main-blue text-white rounded-[10px]'>
          Stake
        </div>
      </div>
    );
  }
  
  export default ValidatorInfo;
  