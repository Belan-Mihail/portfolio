
import './App.css';

import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  

  return (
    <div className='App'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        theme="dark"
      />
      <Outlet />
    </div>
  );
}

export default App;
