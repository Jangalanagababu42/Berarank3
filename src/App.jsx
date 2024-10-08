// import './App.css';
// import Header from './components/Header';
// import StakePage from './components/StakePage';
// import Footer from './components/Footer';


// function App() {
//   return (
//     <div className="">
//       <Header />
//       <div >
     

//       <StakePage />
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StakePage from './components/StakePage';
import ValidatorDetailsPage from './components/ValidatorDetailsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<StakePage />} />
            <Route path="/validator/:id" element={<ValidatorDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
