//Components
import Github from "./Icons/Github";
import Website from "./Icons/Website";
import NextBack from "./NextBack";

import { Body, 
    Title, 
    Container, 
    Details, 
    Image,
    Link,
} from "./styles";

export default function Projects() {

  const Renderer = () => {
    return (
        <>
        <Title> Projeto X - Back-End / Front-End </Title>
        <Body>
          <NextBack param="back"/>
          <Image
            src="https://raw.githubusercontent.com/GabrielDavid1/ProjetoCMS/main/public/imagemdosistema.png"
            alt=""
          />
          <NextBack param="next"/>
        </Body>
        <br />
        <Details>
          <Link href="https://projetocms-gabrieldavid75315-gmailcom.vercel.app" target="_blank" rel="noopener noreferrer"> <Website /> </Link>
          <Link href="https://github.com/GabrielDavid1/ProjetoCMS" target="_blank" rel="noopener noreferrer"> <Github  /> </Link>
        </Details>
        </>
    )
  }

  return (
    <Container id="projects">
        {Renderer()}
    </Container>
  );
}
