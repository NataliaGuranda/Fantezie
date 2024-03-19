import React, { useContext } from 'react';
import CartContext from './CartContext';
import i11 from './img/nou1.jpg';
import i12 from './img/nou2.jpg';
import i13 from './img/nou3.jpg';
import i14 from './img/nou4.jpg';
import a1 from './img/a1.jpg';
import a2 from './img/nou5.jpg';
import a3 from './img/nou6.jpg';
import n1 from './img/n1.jpg';
import n2 from './img/n2.jpg';
function Promo(){
    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 111, name: 'Cupcake cu mango', price: 190, image: i11 },
        { id: 112, name: 'Cupcake cu fulgi de ciocolată', price: 195, image: i12 },
        { id: 113, name: 'Cupcake cu zmeură', price: 220, image: i13 },
        { id: 114, name: 'Cupcake Poni', price: 190, image: i14 },
        { id: 115, name: 'Cupcake cu fructe', price: 220, image: a1 },
        { id: 116, name: 'Cupcake "Vis de Mure"', price: 230, image: a2 },
        { id: 117, name: 'Cupcake "Inima Dulce"', price: 200, image: a3 },
        { id: 118, name: 'Cupcake "Căpșuni și Cream"', price: 300, image: n1 },
        { id: 119, name: 'Cupcake "Capriciu Roz cu Zmeură"', price: 250, image: n2 }
  
    ];
return(
<>

<div class="produse1">20%</div> <br/>
<br/>
<section class="img_shop_1">
    <div class="img_shop">
        <img src={i11}/>
        <div class="product_info">
            <span class="product_name">"Tort Citrus Delight cu Mango"</span>
            <span class="product_price">190 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Citrus Delight cu Mango', price: 190, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i12}/>
        <div class="product_info">
            <span class="product_name">"Trufă de Ciocolată și Nuci"</span>
            <span class="product_price">195 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Trufă de Ciocolată și Nuci', price: 195, image: i12})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i13}/>
        <div class="product_info">
            <span class="product_name">"Tort Mosaic Fructat"</span>
            <span class="product_price">220 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Mosaic Fructat', price: 220, image: i13})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i14}/>
        <div class="product_info">
            <span class="product_name">"Tort Eleganță cu Pere și Caramel"</span>
            <span class="product_price">190 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Eleganță cu Pere și Caramelo', price: 190, image: i14})}>Cumpără</button>
        </div>
    </div>
</section>
<br/> <br/>
<div class="produse1">15%</div>
<section class="img_shop_4">
    <div class="img_shop_a">
    <img src={a1} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">"Tort Luceafărul"</span>
            <span class="product_price">220 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Luceafărul', price: 220, image: a1})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={a2} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">"Tort Rapsodie în Verde"</span>
            <span class="product_price">230 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Rapsodie în Verde', price: 230, image: a2})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={a3} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">"Tort Rubiniu cu Note de Rodie"</span>
            <span class="product_price">200 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort Rubiniu cu Note de Rodie', price: 200, image: a3})}>Cumpără</button>
        </div>
    </div>
</section> <br/>

<div class="produse1">5%</div>
<section class="img_shop_5">
    <div class="img_shop_a">
    <img src={n1} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">"Tort FIESTA"</span>
            <span class="product_price">300 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort FIESTA', price: 300, image: n1})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={n2} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">"Tort cu ciocolată albă și zmeură"</span>
            <span class="product_price">250 Lei/kg</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Tort cu ciocolată albă și zmeură', price: 250, image: n2})}>Cumpără</button>
        </div>
    </div>
</section> <br/>
</>
)
}
export default Promo;