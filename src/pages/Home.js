
import React from "react";
import './Home.css';
import cov from '../components/img/cov.png';
import {btnc} from '../pages/btnc';



const Home =()=>{

const btn1 =btnc.map(({url,title}, index)=>{  
        return(
            <li key={index}>
                <a href={url}>{title}</a>
            </li>
        );
        });
              

return(
    


<div className="home">
<div className="container">

  <div className="centered"> RISK LEVELS </div>
  <div className="conc">
<p>As the pandemic starts spreading in communities worldwide, the public requires consistent and clear information concerning COVID-19 risk levels to notify travelers as well as other viewers to worldwide health threats. The pandemic is being tracked in real time by our interactive risk levels dashboard. By using framework, our team will continue to provide data-driven advice to policymakers across the country.</p>
</div>
</div>
<br></br>
<div>
<hr className="hr1"></hr>
<div className="dash1">
    <a href="#df" className="dash">DASHBOARD</a>
    </div>
    </div>
 <br></br>
 <br></br>
 <div className="dff" id="df">
 <iframe   title="first+ - Traveling Health Risk" width="75%" height="650"   src="https://app.powerbi.com/view?r=eyJrIjoiNzE1MzJiZWMtNjE3ZC00YTA2LWFkYmQtNjczMzAxNjNmZTdiIiwidCI6ImEwZjA5ZjY5LTNjYWEtNGIyMS04ZWZkLTRlZjAxZjI1MGQxMCIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
 </div>
 <div className="tabd">
 <h1>KEY METRICS FOR COVID SUPPRESSION FRAMEWORK</h1>
 </div>
 <div className="tabds">
 <h4>PER 100,000 PEOPLE</h4>
 <br></br>
 <h5>LESS THAN ONE CASE</h5>
 <div className="y">
 <h5 >1-9 CASES</h5>
 </div>
 <div className="o">
 <h5 >10-24 CASES</h5>
 </div>
 <div className="r">
 <h5 >25+ CASES</h5>
 </div>
 </div>
 <br></br>
 <br></br>
 <br></br>
 {btn1}



 
    </div>



)
};
export default Home