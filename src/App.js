
import { useRoutes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Addarticle from './pages/Addarticle';
import Edditarticle from './pages/Edditarticle';
import Article from './pages/Article';

function App() {
  let routes=useRoutes([
    {path:"/",element:<Home></Home>},
    {path:"/about",element:<About></About>},
    {path:"/addarticle",element:<Addarticle></Addarticle>},
    {path:"/edditarticle/:id",element:<Edditarticle></Edditarticle>},
    {path:"/article/:id",element:<Article></Article>}
  ])
  return (
  <>
  {routes}
  </>
  );
}

export default App;
