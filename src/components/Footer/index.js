import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <span>React</span>
      </a>
      <p>
        Feito pelo Moacir Junior
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da empresa que não me paga
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
