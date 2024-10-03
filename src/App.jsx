import './App.css';
import Header from './components/Header';
import StakePage from './components/StakePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="">
      <Header />
      <div  
      // style={{
      //       backgroundImage: "url(bg-min.png)",
      //       backgroundSize: "cover",
      //     }}
          >

      <StakePage />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
