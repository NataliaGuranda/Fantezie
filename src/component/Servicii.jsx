import React from "react";
import i2 from './img/i2.png';
import i3 from './img/i3.png';
import i4 from './img/i4.png';

function Servicii(){
return(
<div class="about-section">
    <h2>Despre noi</h2>
    <p>Descoperă o lume a gusturilor dulci. Comandă acum și bucură-te de fiecare aromă delicioasă!</p>
    <div class="about-items">
        <div class="about-item">
            <img src={i2} alt="Sortiment bogat"/>
            <h3>Sortiment bogat</h3>
            <p>Descoperă o selecție diversă de dulciuri, fiecare categorie având mai puține varietăți, dar toate la fel de delicioase.</p>
        </div>
        <div class="about-item">
            <img src={i3} alt="Livrare rapidă"/>
            <h3>Livrare rapidă</h3>
            <p>Livrare rapidă în 3 zile lucrătoare, cu o taxă mică de expediere.</p>
        </div>
        <div class="about-item">
            <img src={i4} alt="24/7 Suport"/>
            <h3>24/7 Suport</h3>
            <p>Oferim asistență personalizată și răspunsuri rapide la orice întrebare legată de dulciuri, disponibile non-stop, 24/7</p>
        </div>
    </div>
</div>



)

}
export default  Servicii;