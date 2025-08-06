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
import Faculty from "./pages/faculty";
import Contact from "./pages/ContactUs";
import Jobs from "./pages/job";
import About from "./pages/about";
import Project from "./pages/projects"
import Signup from "./pages/signup";
import Login from "./pages/login"
import ThankYou from "./pages/thankyou";
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
      <Route path="/job" element={<Jobs/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/thank-you" element={<ThankYou />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}