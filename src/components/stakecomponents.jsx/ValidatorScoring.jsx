
import { Menu, MenuButton } from '@headlessui/react';
import dropdown from '../../assets/dropdown.svg';
import magnify from '../../assets/magnify.svg';
import score from '../../assets/score.svg';
import SingleValidator from './SingleValidator';
import { useState, useRef, useEffect, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';

function ValidatorScoring() {
  // Load 10 validators by default
  const [data, setData] = useState([]);
  const [validators, setValidators] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if more validators are available to load
  const loader = useRef(null); // Reference to the loader element at the bottom

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("try block")
        const response = await axios.get('/api/rest/validators', {
          headers: {
            'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
            'Content-Type': 'application/json',
          },
        });

        console.log(response,"res");
        setData(response.data);
       
      } catch (error) {
        setError(error.message);
        
      }
    };

    fetchData();
  }, []);

  // Function to simulate fetching data from an API
  const loadMoreValidators = useCallback(async () => {
    if (loading || !hasMore) return; // Prevent loading if already in progress or no more data
    setLoading(true);

    // Simulate fetching more validators
    setTimeout(() => {
      const newValidators = Array.from({ length: 10 }, (_, i) => i + 1 + validators.length); // Fetch 5 more validators
      if (newValidators.length === 0) {
        setHasMore(false); // No more validators to load
      } else {
        setValidators((prev) => [...prev, ...newValidators]); // Append new validators
      }
      setLoading(false);
    }, 1500);
  }, [loading, validators, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        loadMoreValidators(); // Load more validators when the loader comes into view
      }
    });

    if (loader.current) {
      observer.observe(loader.current); // Observe the loader element
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current); // Unobserve when component unmounts
      }
    };
  }, [loading, hasMore, loadMoreValidators]);

  return (
    <>
      <div className='flex flex-col mb-2'>
        <div className="grid grid-cols-12 space-x-5 content-center h-full mb-10">
          <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px] flex items-center">
            Validator Scoring
          </div>

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

        <div className="grid grid-cols-12 space-x-5 items-center mb-10">
          <div className="flex flexcol justify-between col-start-2 col-span-9 w-[930px] h-[144px] ring-1 ring-inset ring-light-blue rounded-[20px] p-10 bg-white">
            <div className="font-poppins font-regular">
              <p className="text-[24px]">L0vd Score</p>
              <p className="text-[14px]">
                L0vd score is based on several metrics
              </p>
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

        {/* Render Validators */}
        {validators.map((validator, index) => (
          <SingleValidator key={index} />
        ))}

        {/* Infinite Scroll Loader Element */}
        <div ref={loader} className="flex justify-center p-5 text-xl text-gray-500">
          {loading ? <LoadingSpinner /> : hasMore ? 'Scroll down to load more' : 'No more validators'}
        </div>
      </div>
    </>
  );
}

 export default ValidatorScoring;
