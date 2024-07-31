import Header from "./components/UI/Header"
import hero_background from './assets/hero-background.jpg'
import Footer from "./components/UI/Footer"
// import { Route, Routes } from "react-router-dom";
// import SignUp from "./components/auth/SignUp";
// import Login from "./components/auth/Login";
import Hero from "./components/UI/Hero";
import Travel from "./components/UI/Travel";
import AboutUs from "./components/UI/AboutUs";
import Contact from "./components/UI/Contact";
import BlogPage from "./components/UI/Blogs";
function App() {

  return (
    <div className="h-full w-full bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${hero_background})`}}>
      <Header />
      <Hero/>
      <Travel/>
      <BlogPage/>
       <AboutUs/>
      <Contact/> 
    


      
      
      <Footer/>  

    </div>
  )
}

export default App;
