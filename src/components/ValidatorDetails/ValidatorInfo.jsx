import altlogo  from '../../assets/altlogo.svg';
import ph_copy from "../../assets/ph_copy.svg";
import world from "../../assets/clarity_world-line.svg";
import twitter_logo from '../../assets/black_X.svg';
function ValidatorInfo() {

    return (
      <div  className='space-y-[36px]'>
        
            
            <div className="flex items-center  space-x-[16px]">

<div className="ring-1 ring-inset ring-light-blue rounded-full w-[75px] h-[75px] flex items-center justify-center">
  <img src={altlogo} alt="logo img"  onError={(e) => {
e.target.onerror = null; // Prevents infinite loop in case default image also fails
e.target.src = altlogo; // Set default image if API image fails
}} className="object-fill rounded-full" />
</div>
<div className=" font-poppins font-bold">
  <p className="text-[24px]">L0vd</p>
 
</div>
</div>
          <div className='grid grid-flow-col justify-stretch space-x-[22px]'>
            <div className=' flex flex-col font-poppins border-l-4 border-l-dark-green  bg-light-green px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>90.99</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>90.99</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>90.99</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>90.99</p></div>
            <div className=' flex flex-col font-poppins border-l-4 border-l-grey-stroke px-[16px] py-[4px]'><p className='font-regular text-[16px]'>L0vd Score</p>
            <p className='font-bold text-[20px]'>90.99</p></div>
            </div>  
       
        <div className='space-y-[16px] font-poppins text-[16px]'>
            <div className='space-x-[120px] font-poppins '>
                <span className="font-bold ">Description</span>
                <span className='font-regular'>Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='flex space-x-[50px] font-poppins '>
                <span className="font-bold ">Incentives Address</span>
                <span className='flex font-regular space-x-[7px]'>
                    <img src={ph_copy} alt="copy"  />
                    Lorem ipsum dolor sit amet.</span>
            </div>
            <div className='flex space-x-[100px] font-poppins '>
                <span className="font-bold ">Social Media</span>
                <span className='flex space-x-[8px]'>
                <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={world} alt="github_logo" className='w-5 h-5' />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img src={twitter_logo} alt="github_logo" className='w-4 h-4' />
              </a>
                </span>
            </div>
            
        </div>
        <div>ValidatorInfo</div>
      </div>
    );
  }
  
  export default ValidatorInfo;
  