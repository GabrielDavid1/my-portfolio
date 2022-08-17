//React
import { useState } from 'react';

//Components
import Languages from '../Languages';

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

export default function Navigation () {
 const [toggleLanguage, setToggleLanguage] = useState(true);
 return (
   <Container>  
     <ProfileImageArea>
        <ProfileImage src={require('../../assets/profile.jpg')} />
     </ProfileImageArea> 
     <Title> Gabriel David da Silva </Title>
     <SubTitle> FullStack Developer </SubTitle>
     <ListArea>
        <ListField>
          <ListElement href="#presentation"> Initial </ListElement>
          <ListElement href="#technologies"> Technologies </ListElement>
          <ListElement href="#projects"> Projects </ListElement>
          <ListElement href="#improvement"> Improvement </ListElement>
          <ListElement onClick={() => setToggleLanguage(!toggleLanguage)}>
            <Languages toggleLanguage={toggleLanguage} />  
          </ListElement>
        </ListField>
     </ListArea>
   </Container>
 )
}