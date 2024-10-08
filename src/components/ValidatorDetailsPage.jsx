import { useParams } from 'react-router-dom';
import ValidatorInfo from './ValidatorDetails/ValidatorInfo';
import { useEffect, useState } from 'react';
import GraphsData from './ValidatorDetails/GraphsData';
import BarGraphs from './ValidatorDetails/BarGraphs';

function ValidatorDetailsPage() {
    const { id } = useParams(); 
    const [validatorDetails, setValidatorDetails] = useState(null);
    const [graphData, setGraphData]=useState(null);
    const [currentUptime, setCurrentUptime] = useState(null);

    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    };
    useEffect(() => {
      const fetchValidatorData = async () => {
        try {
          // setLoading(true);
          
          // Define the API endpoints
          const api1 = `https://bindexer.l0vd.com/api/rest/get_validator_info/${id}`;
          const api2 = `https://bindexer.l0vd.com/api/rest/uptime_history/${id}`;
          // const api3 = `https://bindexer.l0vd.com/api/rest/score_breakdown/${id}`;
         const headers= {
            'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
            'Content-Type': 'application/json',
          }
          // Make concurrent requests using Promise.all
          const [data1, data2] = await Promise.all([
            fetch(api1,{headers}).then((res) => {
              if (!res.ok) throw new Error('Failed to fetch validator details');
              return res.json();
            }),
            fetch(api2,{headers}).then((res) => {
              if (!res.ok) throw new Error('Failed to fetch validator stats');
              return res.json();
            }),
            // fetch(api3,{headers}).then((res) => {
            //   if (!res.ok) throw new Error('Failed to fetch validator rewards');
            //   return res.json();
            // }),
          ]);
          // Update state with data from all three APIs
          console.log(data2,"data2")
          setValidatorDetails(data1.validators);
          const historicalData = data2?.hist_uptime?.map(item => ({
            timestamp: formatDate(item.timestamp),
            uptime: item.uptime
          }));
          console.log(historicalData,"hd")
          setGraphData(historicalData);
          setCurrentUptime(data2?.current_uptime[0]?.uptime ,"da");

          console.log(graphData);
          console.log(currentUptime);
          // setAdditionalData2(data3);
        } catch (err) {
          console.error('Error:', err);
          // setError(err.message);
        } finally {
          // setLoading(false);
        }
      };
  
      fetchValidatorData();
    }, [id]);

   
    return (
      <div className="px-[160px] mt-10 ">
      {/* ValidatorInfo is outside the background image section */}
      <ValidatorInfo validatorDetails={validatorDetails} />
    
      {/* Background Image starts after ValidatorInfo */}
      <div className="relative pt-28 mt-20">
        {/* Background Image Section */}
        {/* <div className="absolute inset-0  -z-10   bg-no-repeat w-full" style={{ backgroundImage: "url('/berabg.png')" }} /> */}
        <div className="absolute left-1/2 transform -translate-x-1/2 inset-y-0 w-screen h-full -z-10 bg-no-repeat bg-cover" 
         style={{ backgroundImage: "url('/berabg.png')" }} 
    />
        {/* The rest of your content */}
        <div className="relative z-10 flex flex-col space-y-10 justify-center ">
          <div className='flex flex-row space-x-10'>

          <GraphsData graphData={graphData} currentUptime={currentUptime} />
          <GraphsData graphData={graphData} currentUptime={currentUptime} />
          </div>
            
        <div className='flex flex-row space-x-10'>
          <BarGraphs graphData={graphData} currentUptime={currentUptime} />
          <BarGraphs graphData={graphData} currentUptime={currentUptime} />
          </div>
          </div>
          <div>graph info</div>
          <div>score and gauges</div>
      </div>
    </div>
    
    
    );
  }
  
  export default ValidatorDetailsPage;
  