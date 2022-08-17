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
  positionScroll:boolean;
  setToggleLanguage: React.Dispatch<React.SetStateAction<boolean>>;
  setPositionScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation ({
  toggleLanguage,
  setToggleLanguage,
  positionScroll,
  setPositionScroll,
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
          <ListElement href="#presentation"> {(toggleLanguage) ? translate.presentation.navTitle_BR : translate.presentation.navTitle_EN} </ListElement>
          <ListElement href="#technologies"> {(toggleLanguage) ? translate.technologies.navTitle_BR : translate.technologies.navTitle_EN} </ListElement>
          <ListElement href="#projects"> {(toggleLanguage) ? translate.projects.navTitle_BR : translate.projects.navTitle_EN} </ListElement>
          <ListElement href="#improvement" onClick={() => setPositionScroll(!positionScroll)}> {(toggleLanguage) ? translate.improvement.navTitle_BR : translate.improvement.navTitle_EN} </ListElement>
          <ListElement onClick={() => setToggleLanguage(!toggleLanguage) }>
            <Languages toggleLanguage={toggleLanguage} />  
          </ListElement>
          <Contact />
        </ListField>
     </ListArea>
   </Container>
  )
}