import react from 'react'
import styles from './App.module.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ErrorPage from './pages/error';



// routing for jsx components.
const appRouter= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<HomePage/>}/>
    <Route path='subreddit' element={<HomePage/>}/>
    <Route path='search' element={<SearchPage/>}/> 
    <Route path='error' element={<ErrorPage/>}/>
    
    
  </Route>
))


function App() {
  return (
    <RouterProvider router={appRouter}/>
  )
    
}

export default App
