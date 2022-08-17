import { 
  Element,
  Container,
} from './styles';

interface Props {
    toggleLanguage: boolean;
}

export default function Languages ({ toggleLanguage }:Props) {
 return (
   <Container> 
    <Element toggleLanguage={toggleLanguage}> {(toggleLanguage) ? 'português' : 'english'}  </Element> 
    <svg width="5%"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
        <path d="M18 31H38V5" stroke={(toggleLanguage) ? 'green' : '#960505'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 21H10V43" stroke={(toggleLanguage) ? 'green' : '#960505'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 11L38 5L32 11" stroke={(toggleLanguage) ? 'green' : '#960505'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 37L10 43L4 37" stroke={(toggleLanguage) ? 'green' : '#960505'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
   </Container>
 )
}