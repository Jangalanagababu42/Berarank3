import { useParams } from 'react-router-dom';

function ValidatorDetailsPage() {
    const { id } = useParams(); 

    return (
      <>
        <div>Hello {id}</div>
      </>
    );
  }
  
  export default ValidatorDetailsPage;
  