import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import {Routes,Route} from "react-router-dom";
import About from "./components/pages/About";
import UseState from "./hooks/UseState";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import UseEffect from "./hooks/UseEffect";
import Form from "./components/Form";
import Todo from "./components/Todo";
const App=()=>{
  return(<>   
    <Navbar/>
    <Header/>
    <Footer/>
    <Routes>
      <Route path="/" element={<Home name="Dharani" dept="CSE"/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/service"element={<Services />}/>
      <Route path="/UseState"element={<UseState/>}/>
      <Route path="/UseEffect"element={<UseEffect/>}/>
      <Route path="/Form"element={<Form/>}/>
      <Route path="/Todo"element={<Todo/>}/>
  
    </Routes>
  </>
    
  )
}
export default App;