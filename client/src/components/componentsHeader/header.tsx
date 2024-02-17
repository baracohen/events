import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
  name: string;
  Component?: any;
};

const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const NameContainer = styled.div`
  margin-bottom: 10px;
`;
const NamesContainer = styled.div`
  display: grid;
`;
const NameSmall = styled.span`
  font-size: 14px;
  color: lightgrey;
  margin-bottom:10px;
`;

const NameBig = styled.span`
  font-size: 24px;
`;

const Header: React.FC<HeaderProps> = ({ name, Component }) => {
  return (
    <HeaderContainer>
      <NamesContainer>
        <NameContainer>
          <NameSmall>{name}</NameSmall>
        </NameContainer>
        <NameContainer>
          <NameBig>{name}</NameBig>
        </NameContainer>
      </NamesContainer>
      {Component && Component 
      }
    </HeaderContainer>
  );
};

export default Header;
