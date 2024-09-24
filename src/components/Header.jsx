import lovdlogo from '../assets/lovdlogo.svg';
import magnify from '../assets/magnify.svg';
const Header = () => {
  return (
    <header className="w-full px-4 px-[160px] py-4 bg-white ">
      <div className="grid grid-cols-12 items-center space-x-[95px]">
        {/* Logo Div */}
        <div className="col-start-1 col-span-[3/2] flex w-[136px] h-[45px] space-x-3  ">
          <img
            src={lovdlogo}
            alt="L0vd Logo"
            className="w-[50px] h-[42px] mt-[1.49px]"
          />
          <span className=" w-[74px] h-[45px] font-poppins font-semibold text-3xl tracking-wider">
            L0vd
          </span>
        </div>

        {/* Search Bar */}
        <div className="col-start-[7/2] col-span-[7/2] flex items-center justify-center  w-[327px] h-[67px]  p-[10px]">
          <div className="relative w-[303px] h-[47px]  ">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full ring-1 ring-inset ring-lightblue-stroke font-poppins font-medium text-[16px] text-grey-stroke rounded-[10px]  px-12 py-3 md:py-4"
            />
            <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400  ">
              <img src={magnify} alt="magnify" className="w-6 h-6 " />
            </span>
          </div>
        </div>

        {/* Right Section: Validators, Pools, Guides, and Connect Button */}
        <div className="col-start-6 col-span-7  flex  justify-between items-center  h-[53px] space-x-12">
          <div className="flex w-[279px] h-[44px] space-x-[30px] items-center font-poppins font-medium text-base">
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 ring-offset ring-main-blue"
            >
              Validators
            </a>
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 ring-offset ring-main-blue"
            >
              pools
            </a>
            <a
              href="#"
              className="text-black px-[10px] py-[10px] hover:bg-gradient-to-br from-grad-blue from-0% to-main-blue to-100% hover:text-white hover:px-[10px] hover:py-[5px] hover:rounded-[10px] hover:ring-1 ring-offset ring-main-blue"
            >
              Guides
            </a>
          </div>
          <button className=" w-[187px] h-[53px] bg-main-blue text-white px-5 py-2.5  rounded-[10px] font-poppins font-medium text-white text-lg">
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
