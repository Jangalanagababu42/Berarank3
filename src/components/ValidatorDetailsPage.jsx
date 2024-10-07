import { useParams } from 'react-router-dom';
import ValidatorInfo from './ValidatorDetails/ValidatorInfo';

function ValidatorDetailsPage() {
    const { id } = useParams(); 

    return (
      <div className='px-[160px]'>
      <ValidatorInfo />
        <div>graph info</div>
        <div>score and guages</div>
      </div>
    );
  }
  
  export default ValidatorDetailsPage;
  