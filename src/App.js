import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/home";
import Course from "./pages/course";
import Blog from "./pages/blog";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}