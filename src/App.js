import logo from './logo.svg';
import './App.css';
import Background from './components/background';
import ResponsiveAppBar from './components/appbar';
import Loader from './components/loading';
import Cards from './components/cards';
import Quotes from './components/quotes';
import LinkCards from './components/linkCards';
import Demo from './components/request';
import Stepper1 from './components/stepper';
import FooterContainer from './components/footercontainer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Background/>
      <Loader/>
      <Cards/>
      <Stepper1/>
      <Quotes/>
      <LinkCards/>
      <Demo/>
      <FooterContainer/>
    </div>
  );
}

export default App;
