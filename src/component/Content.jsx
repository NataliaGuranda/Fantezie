import React from "react";
import i1 from './img/i1.png';
import i2 from './img/i2.png';
import i3 from './img/i3.png';
import i4 from './img/i4.png';



function Content(){
return(
    <>
<div class="content">
    <div class="content-text">
        <h2>"Creăm momente dulci pentru fiecare gust și ocazie"</h2>
        <div class="stats">
            <div>
                <strong>50+</strong>
                <p>Torturi</p>
            </div>
            <div>
                <strong>1000+</strong>
                <p>Beneficiari</p>
            </div>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Ce căutați?"/>
            <button>🔍</button>
        </div>
    </div>
    <div class="content-image">
        <img src={i1}  alt="Imagine Descriptiva"/>
    </div>
</div>



<section class="about-section">
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
        </section>


        <div class="testimonials-section">
    <h2>Ce spun clienții despre noi?</h2>
    <div class="testimonial">
        <p class="testimonial-text">"Produsele de la acest magazin de dulciuri sunt absolut delicioase! Am comandat un tort pentru aniversarea fiului meu și a fost un adevărat succes! Gustul și prezentarea au fost impecabile. Recomand cu încredere acest magazin tuturor celor care apreciază dulciurile de calitate!"</p>
        <p class="testimonial-author">Cozma Victoria</p>
    </div>
    <div class="testimonial">
        <p class="testimonial-text">"Produsele de la acest magazin de dulciuri sunt absolut minunate! Am comandat prăjituri pentru o petrecere și au fost un adevărat succes! Toți invitații au apreciat gustul delicios și aspectul atrăgător al dulciurilor. Cu siguranță voi reveni să mai fac comenzi în viitor. Recomand cu încredere acest magazin!"</p>
        <p class="testimonial-author">Ursu Ion</p>
    </div>
</div>

</>
)
}
export default Content;