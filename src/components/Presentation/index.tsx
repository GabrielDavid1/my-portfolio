import { 
  Container, 
  ProfileArea,
  ProfileText,
  ImageArea,
} from './styles';

export default function Presentation (){
 return (
   <Container> 
    <ProfileArea>
      <ProfileText>
        <ImageArea src="https://img.freepik.com/premium-vector/software-development-programming-program-code-tags-laptop-screen-big-data-processing-3d-isometric-flat-modern-illustration_172533-36.jpg?w=2000" />
        Meu nome é gabriel, tenho 23 anos, graças ao criador do céu e da terra tenho uma grande paixão de botar todas minhas ideias em prática. Fissurado em desafios, resolver problemas e desenvolver projetos, me considero muito curioso pois curto muito aprender assuntos novos mesmo que não tenha haver com minha área de atuação.
      </ProfileText>
    </ProfileArea>
   </Container>
 )
}