import './App.css';
import { About } from './component/about/About';
import { Home } from './component/home/Home';
import {
  BrowserRouter as Router,
  Route,Routes
  
} from 'react-router-dom';
import ArticleList from './component/articles/ArticleList';
import { Article } from './component/articles/Article';
import {Error} from './component/error/Error';
import Header from './component/header/Header';
import { Footer } from './component/footer/Footer';
import { SignUp } from './component/signup/SignUp';
import { Addarticle } from './component/articles/Addarticle';
import { Login } from './component/signup/Login';
import { UpArticle } from './component/articles/UpArticle';
import { DelArticles } from './component/articles/DelArticles';
import { Logout } from './component/signup/Logout';

function App() {
  return (
    <div className="App">
       <Router>
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>} />
              <Route path="/article-list" element={<ArticleList/>} />
              <Route path="/addart" element={<Addarticle/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<Login/>} />
              <Route path='/article/:name' element={<Article/>}/>
              <Route path='/uparticle/:name' element={<UpArticle/>}/>
              <Route path='/delarticle/:name' element={<DelArticles/>}/>
              
              <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
        </>
           </Router>
           
    </div>
  );
}

export default App;
