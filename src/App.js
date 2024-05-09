import './App.css';
import {Provider} from "react-redux";
import store from "./Utils/store";
import Body from './Components/Body';
import Head from './Components/Head';
import MainContainer from './Components/MainContainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './Components/Watch';


const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
  {
    path:"/",
    element: <MainContainer/>
  },
  {
    path:"/watch",
    element:<Watch/>
  }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Head/>
     <RouterProvider router={appRouter}/>
     {/* <Body/> */}
    </div>
  </Provider>
  );
}

export default App;
