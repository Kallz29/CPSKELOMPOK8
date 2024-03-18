  import './App.css';
  import Introduction from './components/introduction';
  import Navbar from './components/navbar';
  import Footer from './components/footer';
  import Desc from './components/desc';

  function App() {
    return (
      <div className="App">
        <header className="App-header">
      <Navbar />
      <div className="content-wrapper">
        <div id="introduction"></div>
        <Introduction />
        <hr className="divider" />
        <div id="desc"></div> 
        <Desc />
      </div>
      <hr className="divider" />
      
          <Footer /> 
        </header>
      </div>
    );
  }

  export default App;

