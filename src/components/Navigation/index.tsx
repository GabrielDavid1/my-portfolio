//React
import React from 'react';

import { 
  Container, 
  Title,
  List,
  ListElement,
} from './styles';

export default function Navigation (){
 return (
   <Container>  
     <div className="logo-area">
        <Title> My Portfolio </Title>
     </div>
     <div className="list-area">
        <List>
            <ListElement> Initial </ListElement>
            <ListElement> Technologies </ListElement>
            <ListElement> Projects </ListElement>
            <ListElement> Contact </ListElement>
            <ListElement> Languages </ListElement>
        </List>
     </div>
   </Container>
 )
}