import React, { useState } from 'react';
import styled from 'styled-components';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const CartContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItemContainer key={item.id}>
          <div>
            {item.name} (Quantity: {item.quantity})
          </div>
          <div>${item.price * item.quantity}</div>
        </CartItemContainer>
      ))}
      <p>Total: ${calculateTotal()}</p>
    </CartContainer>
  );
};

export default Cart;

