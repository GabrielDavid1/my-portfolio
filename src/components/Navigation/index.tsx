//Utils
import translate from '../../utils/Translate';
import Contact from '../Contact';

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

interface Props {
  toggleLanguage: boolean;
  setToggleLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navigation ({
  toggleLanguage,
  setToggleLanguage,
  setIndex,
}:Props) {
  return (
   <Container> 
     <ProfileImageArea>
        <ProfileImage src={require('../../assets/profile.jpg')} />
     </ProfileImageArea> 
     <Title className="my-name"> Gabriel David da Silva </Title>
     <SubTitle className="my-career"> {(toggleLanguage) ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'} </SubTitle>
     <ListArea>
        <ListField className="list">
          <ListElement href="#presentation" onClick={() => setIndex(1)}> {(toggleLanguage) ? translate.presentation.navTitle_BR : translate.presentation.navTitle_EN} </ListElement>
          <ListElement href="#technologies" onClick={() => setIndex(2)}> {(toggleLanguage) ? translate.technologies.navTitle_BR : translate.technologies.navTitle_EN} </ListElement>
          <ListElement href="#projects" onClick={() => setIndex(3)}> {(toggleLanguage) ? translate.projects.navTitle_BR : translate.projects.navTitle_EN} </ListElement>
          <ListElement href="#improvement" onClick={() => setIndex(4)}> {(toggleLanguage) ? translate.improvement.navTitle_BR : translate.improvement.navTitle_EN} </ListElement>
          <ListElement onClick={() => setToggleLanguage(!toggleLanguage) }>
            <Languages toggleLanguage={toggleLanguage} />  
          </ListElement>
          <Contact />
        </ListField>
     </ListArea>
   </Container>
  )
}