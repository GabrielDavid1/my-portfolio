//Utils
import translate from '../../utils/Translate';

import { 
  Container, 
  ProfileArea,
  ProfileText,
  ProfileTitle,
} from './styles';

interface Props {
  toggleLanguage: boolean;
}

export default function Presentation ({ toggleLanguage }:Props) {
  
 return (
   <Container id="presentation"> 
    <ProfileArea>
      <ProfileTitle> {(toggleLanguage) ? translate.presentation.title_BR : translate.presentation.title_EN} </ProfileTitle>
      <ProfileText>
        {(toggleLanguage) ? translate.presentation.subtitle_BR : translate.presentation.subtitle_EN} 
      </ProfileText>
    </ProfileArea>
   </Container>
 )
}