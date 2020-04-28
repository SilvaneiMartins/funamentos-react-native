/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Desafio 08: Fundamentos do React Native;
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </CartProvider>
  );
};

export default AppProvider;
