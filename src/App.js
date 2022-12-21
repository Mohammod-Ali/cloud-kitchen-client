import { Toaster } from 'react-hot-toast';
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
 
  return (
    <div data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />

    </div>
  );
}

export default App;
