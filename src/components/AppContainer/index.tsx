import React from 'react';

import { 
  Container, 
} from './styles';

interface Props {
  children: React.ReactNode;
}

export default function AppContainer ({ children }:Props){
 return (
   <Container>
    {children}
   </Container>
 )
}