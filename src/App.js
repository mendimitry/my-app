import "./App.css";

import { BrowserRouter, Routes, Route,Outlet,Navigate, HashRouter } from "react-router-dom";



import CartContextProvider from "./components/Cart/CartContextProvider";
import About from './components/about/about';
import Layout from './components/layout/layout';
import News from './components/news/news';
import Page404 from './components/page404/page404';
import Main from "./components/Main/Main";
import Bookmarks from "./components/Cart/Bookmarks";
function App() {
  return (
    <CartContextProvider>
      <HashRouter>
        
          <Routes>
          <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to='/news' />} />
      <Route path='/news' element={<Outlet />} >
        <Route index element={<Main />} />
        <Route path=':id' element={<News />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='/bookmarks' element={<Bookmarks />} />
      <Route path='*' element={<Page404 />} />
    </Route>

          </Routes>
        
      </HashRouter>
    </CartContextProvider>
  );
}

export default App;
