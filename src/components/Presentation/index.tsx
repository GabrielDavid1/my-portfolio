import { 
  Container, 
  ProfileArea,
  ProfileText,
  ProfileTitle,
} from './styles';

export default function Presentation (){
 return (
   <Container id="presentation"> 
    <ProfileArea>
      <ProfileTitle> 👋😃 Seja Bem vindo ao meu portfólio </ProfileTitle>
      <ProfileText>
        Meu nome é gabriel, tenho 23 anos, graças ao criador do céu e da terra tenho uma grande paixão de botar todas minhas ideias em prática. Fissurado em desafios, resolver problemas e desenvolver projetos, me considero muito curioso pois curto muito aprender assuntos novos mesmo que não tenha haver com minha área de atuação.
      </ProfileText>
    </ProfileArea>
   </Container>
 )
}