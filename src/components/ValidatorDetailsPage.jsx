import { useParams } from 'react-router-dom';
import ValidatorInfo from './ValidatorDetails/ValidatorInfo';
import { useEffect, useState } from 'react';

function ValidatorDetailsPage() {
    const { id } = useParams(); 
    const [validatorDetails, setValidatorDetails] = useState(null);
    useEffect(() => {
      const fetchValidatorData = async () => {
        try {
          // setLoading(true);
          
          // Define the API endpoints
          const api1 = `https://bindexer.l0vd.com/api/rest/get_validator_info/${id}`;
          // const api2 = `https://bindexer.l0vd.com/api/rest/uptime_history/${id}`;
          // const api3 = `https://bindexer.l0vd.com/api/rest/score_breakdown/${id}`;
         const headers= {
            'x-hasura-admin-secret': 'eENFLKSNLF2123sdFKM',
            'Content-Type': 'application/json',
          }
          // Make concurrent requests using Promise.all
          const data1 = await fetch(api1,{headers}).then((res) => {
              if (!res.ok) throw new Error('Failed to fetch validator details');
              return res.json();
            });
          
          
          console.log(data1,"data")
          // Update state with data from all three APIs
          setValidatorDetails(data1.validators);
          // setAdditionalData1(data2);
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

    console.log(validatorDetails,"vv");

    return (
      <div className='px-[160px] my-10'>
      <ValidatorInfo validatorDetails={validatorDetails} />
        <div>graph info</div>
        <div>score and guages</div>
      </div>
    );
  }
  
  export default ValidatorDetailsPage;
  