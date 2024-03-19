import React, { useContext, useState } from 'react';
import CartContext from './CartContext';

function Cos() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleCloseModal = () => {
    setCheckoutModalOpen(false);
  };

  const CheckoutModal = () => (
    <div className="checkout_modal">
      <div className="checkout_content">
        <h2>Introduceți datele bancare</h2>
        <input type="text" placeholder="Număr card" />
        <input type="text" placeholder="Data expirării" />
        <input type="text" placeholder="CVV" />
        <button onClick={handleCloseModal}>Închide</button>
        <button onClick={() => {
          cart.forEach(item => removeFromCart(item.id));
          handleCloseModal();
          console.log('Procesul de plată a fost inițiat și finalizat.');
        }}>Plătește</button>
      </div>
    </div>
  );

  return (
    <div>
      <h2>Coș de cumpărături</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="cos_img" />
              {item.name} - {item.price} Lei
              <button className="delete_button" onClick={() => removeFromCart(item.image)}>Șterge</button>

            </li>
          ))}
        </ul>
      ) : (
        <p>Coșul este gol.</p>
      )}
      <button className="buy_button" onClick={handleCheckout}>Cumpără</button>
      {isCheckoutModalOpen && <CheckoutModal />}
    </div>
  );
}

export default Cos;
