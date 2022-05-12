import "./App.css";

import { BrowserRouter, Routes, Route,Outlet,Navigate } from "react-router-dom";


import CartPage from "./components/Cart";
import CartContextProvider from "./components/Cart/CartContextProvider";
import About from './components/about/about';
import Layout from './components/layout/layout';
import News from './components/news/news';
import Page404 from './components/page404/page404';
import Main from "./components/Main/Main";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        
          <Routes>
          <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to='/news' />} />
      <Route path='/news' element={<Outlet />} >
        <Route index element={<Main />} />
        <Route path=':id' element={<News />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='/bookmarks' element={<CartPage />} />
      <Route path='*' element={<Page404 />} />
    </Route>

          </Routes>
        
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
