import './styles/App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


//import pages 

import Homepage from './pages/Homapage'
import Timer from './pages/Timer'
import Login from './pages/Login'
import Playground from './pages/playground'
import Messenger from './pages/Messenger'
import NoPage from './pages/NoPage'


//import Layouts
import RootLayout from './layouts/RootLayout';
import Registration from './pages/Registration';
import MainScreen from './webcam/MainScreen';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/*' element={<NoPage />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;