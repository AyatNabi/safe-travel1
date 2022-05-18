
import React from "react";
import '../pages/Policies.css';
const Policies =()=>{


    return(
        <div className="Policies">

    
    <div className="polip">
        <h1>Covid-19</h1>
        <h2>Information for travellers</h2>
        <br></br>
<p>Individual nations' travel status might change quickly due of the current COVID-19 outbreak. We've drawn out country-specific admission restrictions to assist you figure out where you may plan an overseas vacation. Filter for border status, COVID-19 testing requirements, and quarantine criteria to see which countries are available to vaccinated passengers. Simply choose your departure country below, and the map will refresh to reflect the status of each nation's opening and any COVID-19-related entry restrictions for air travelers. Make careful to double-check your country's official government website before booking. Simply enter your departure country below, and the map will update to reflect the status of nations' openings and any air travel entrance requirements. Make careful to double-check your country's official government website before booking.</p>
</div>


<hr className="hrp"></hr>
<div className="map1">

    <a href="#po" className="map">COVID Travel Restrictions Map</a>
    </div>
 
    <br></br>
<div className="mapp">
 <iframe id="po"   title="map" width="80%" height="670px" src="https://www.arcgis.com/home/webmap/viewer.html?url=https://services3.arcgis.com/t6lYS2Pmd8iVx1fy/ArcGIS/rest/services/COVID_Travel_Restrictions_V3/FeatureServer&source=sd" frameborder="0" allowFullScreen="true"></iframe>
 </div>
 <div className="cle"></div>

        </div>
     )
    };
    export default Policies