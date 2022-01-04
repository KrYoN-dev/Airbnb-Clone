
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './home';
import { BrowserRouter,Route ,Routes} from "react-router-dom"
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>

   
    <Route exact path="/" element={ <Home/>} />
        <Route exact path="/search" element={ <SearchPage/>} />

      

      </Routes>
<Footer/>
    
      </BrowserRouter>
    
  
     

    </div>
    
  );
}

export default App;

<Routes>
<Route exact path="/" element={ <SearchPage />} />
</Routes>
