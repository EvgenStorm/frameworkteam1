
import './App.css'
import './index.css'
import {useTheme} from './hooks/use-theme.js'


function App() {

{/* <img src={logo} alt="" width="91" height="20"></img> */}
const {theme,setTheme} = useTheme()

const switchTheme=() => {
  setTheme((cur)=> cur === "light" ? "dark": "light")
};
  return (
    
    <>
     
<div className="heads">
<nav className="navbar">
  <div className="container-fluid">
  <a className="navbar-brand" href="#" >
      <div  className="logos" style={{width:"91px",height:"20px"}} ></div>   
    </a>
    <label className='dom2'><input onChange={switchTheme}type="checkbox" id ="toggle-btn"></input><span></span></label>
    
  </div>
</nav>
<div className="content col-12">

<div className="image-container col-3 img1">
  <div className="text-overlay">
    <div className="title">cascate di tivoli</div>
    <div className="date">1761</div>
  </div>
</div>
<div className="image-container col-3 img2">
  <div className="text-overlay">
    <div className="title">portrait of vincent van gogh</div>
    <div className="date">1886</div>
  </div>
</div>
<div className="image-container col-3 img3" >
  <div className="text-overlay">
    <div className="title">unequal marriage</div>
    <div className="date">1862</div>
  </div>
</div>
<div className="image-container col-3 img4">
  <div className="text-overlay">
    <div className="title">the happy violonist</div>
    <div className="date">1624</div>
  </div>
</div>
<div className="image-container col-3 img5">
  <div className="text-overlay">
    <div className="title">arcadian</div>
    <div className="date">1834</div>
  </div>
</div>
<div className="image-container col-3 img6">
  <div className="text-overlay">
    <div className="title">golfo di napoli</div>
    <div className="date">1845</div>
  </div>
</div>

</div>
</div>





      
    </>
  )
}

export default App
{/* <div className="artwork-container">
  <img src={art} alt="Cascate di Tivoli"></img>
  <div className="artwork-description">
    <div className="artwork-title">CASCATE DI TIVOLI</div>
    <div className="artwork-year">1761</div>
  </div>
</div> */}