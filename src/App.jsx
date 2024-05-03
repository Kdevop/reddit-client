import react from 'react'
import styles from './App.module.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import HomePage from './pages/home';

const appRouter= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<HomePage/>}/>

  </Route>
))


function App() {
  return (
    <RouterProvider router={appRouter}/>
  )
    
}

export default App
