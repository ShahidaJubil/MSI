
import './App.css';
//import Appbar from './components/Header/Appbar';
import Slideshow from './components/Pictures/Slideshow';
//import Picturegrid from './components/Grid/Picturegrid';
import Pic from './components/Pictures/Pic';
import Imagewithtitle from './components/Grid/Imagewithtitle';
import Projectreg from './components/Registration/Projectreg';
import Fourimg from './components/Grid/Fourimg';
import Footer from './components/Footer/Footer';
//import Nav from './components/Footer/Nav';
import  BasicButtons from './components/Footer/Buttonfoot';
//import Subtest from './components/Grid/Subtest';
import SpacingGrid from './components/card/SpacingGrid';
import Header  from './components/Header/Header';

function App() {
  return (
    <div className="App">  
      <Header/>
      <Slideshow/>
      <SpacingGrid/>
      <Pic/>
      <Imagewithtitle/>
      <Projectreg/>
      <Fourimg/>
      <Footer/>
      <BasicButtons/>

    </div>
  );
}

export default App;
