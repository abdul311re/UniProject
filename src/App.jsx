import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Side';
import WebRoutes from './Webroutes/Webroutes';

function App() {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar  />
        <div className="flex-1">
          <WebRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
