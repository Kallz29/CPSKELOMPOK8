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
         <hr className="divider" />
          <Footer /> 
        </header>
      </div>
    );
  }

  export default App;

