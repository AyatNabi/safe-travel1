/* eslint-disable no-undef */
import logo from "../img/logo.png";
import '../Navbar/Navbar.css';
function Navbar(){
  

    return (
        <div>
         
            <nav className='Navbar ' >
         
                    <div class="header">
              
  <div class="header-right">
    <a  href="/">Overview</a>
    <a href="/Countries.js">Countries</a>
    <a href="/Policies.js">Policies</a>
    <a href="/About.js">About Us</a>
  </div>
 
</div>  
                 
<img  className="logooo"src={logo} alt='logo' ></img>           
                    
             
     
     
             
        
              
               

                
            
            </nav>
   

        </div>
     
    
    )
}
export default Navbar