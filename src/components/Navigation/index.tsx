//React
import React from 'react';

import { 
  Container, 
  Title,
  ListArea,
  ProfileImageArea,
  ProfileImage,
  ListField,
  ListElement,
  SubTitle,
} from './styles';

export default function Navigation (){
 return (
   <Container>  
     <ProfileImageArea>
        <ProfileImage src={require('../../assets/profile.jpg')} />
     </ProfileImageArea> 
     <Title> Gabriel David da Silva </Title>
     <SubTitle> FullStack Developer </SubTitle>
     <ListArea>
        <ListField>
          <ListElement> Initial </ListElement>
          <ListElement> Technologies </ListElement>
          <ListElement> Projects </ListElement>
          <ListElement> Contacts </ListElement>
          <ListElement> Languages </ListElement>
        </ListField>
     </ListArea>
   </Container>
 )
}