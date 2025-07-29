import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/home";
import Course from "./pages/course";
import Blog from "./pages/blog";
import Success from "./pages/success";
import Footer from "./components/footer";
import Faq from "./pages/faq";
import Service from "./pages/service";
import Faculty from "./pages/Faculty";
import Contact from "./pages/ContactUs";
// import Learning from "./pages/learning";
import KnowledgeHub from "./pages/knowledgehub/knowledgehub";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <Faq/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/knowledgehub" element={<KnowledgeHub/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/faculty" element={<Faculty/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}