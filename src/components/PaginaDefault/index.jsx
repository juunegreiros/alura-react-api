import React from 'react';
import EstiloBase from '../../settings/theme';

import Header from './Header';
import Footer from './Footer';
import { AppWrapper, Main } from './style';

const PaginaDefault = ({ children }) => (
  <AppWrapper>
    <EstiloBase />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </AppWrapper>
);

export default PaginaDefault;
