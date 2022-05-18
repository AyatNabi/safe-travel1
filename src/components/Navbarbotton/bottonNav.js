
import '../Navbarbotton/bottonNav.css';
import { Menulist2 } from './Menulist2';
import logo from '../img/logo.png';
import c from '../img/c.png';


function Navbarbotton(){ 
    const menulist2 =Menulist2.map(({url,title}, index)=>{  
        return(
            <li key={index}>
                <a href={url}>{title}</a>
            </li>
        );
        });
    

  return (

        <div>
            <nav className="Navbarbotton">
                <img className='logo' src={logo} alt="logo"></img>
                
                <hr className='hr2'></hr>

           <ul className='cla2'>
               <li>
           {menulist2}
           </li>
           </ul>
       <div className='cla3'>
           <img className='c' src={c} alt='c'></img>
           <p10>
               2022 <span className='c1'>Safe</span>Travel - All Rights Reserved
                </p10>
       </div>
     


         
         
            </nav>
        </div>
    )
}
export default Navbarbotton