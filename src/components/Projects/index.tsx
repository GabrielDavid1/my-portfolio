//React
import { useEffect, useState } from "react";

//Components
import NextBack from "./NextBack";
import Github from "./Icons/Github";
import Website from "./Icons/Website";

//utils
import myProjects from "../../utils/myProjects";
import translate from "../../utils/Translate";

import {
  Body,
  Title,
  Container,
  Details,
  Image,
  Link,
  Description,
} from "./styles";

interface Props {
  toggleLanguage: boolean;
}

export default function Projects({ toggleLanguage }: Props) {
  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const [opacity, setOpacity] = useState("0");

  const content = translate.projects.content;

  useEffect(() => {
    setImageIndex(index > lastIndex ? index - 1 : index + 1);
    setOpacity("0");
    setTimeout(() => setOpacity("1"), 1000);
  }, [index]);

  return (
    <Container id="projects">
      <Title className="title-project">
        {" "}
        {myProjects[index].title} - {myProjects[index].type}{" "}
      </Title>
      <Description>
        {" "}
        {toggleLanguage
          ? content[index].BR_description
          : content[index].EN_description}{" "}
      </Description>
      <Body className="view">
        <NextBack
          param="back"
          index={index}
          setIndex={setIndex}
          length={myProjects.length}
          setLastIndex={setLastIndex}
        />
        {opacity === "1" ? (
          <Image
            src={myProjects[index].img}
            alt={myProjects[index].title}
            opacity={opacity}
          />
        ) : (
          <Image
            src={myProjects[imageIndex].img}
            alt={myProjects[index].title}
            opacity={opacity}
          />
        )}
        <NextBack
          param="next"
          index={index}
          setIndex={setIndex}
          length={myProjects.length}
          setLastIndex={setLastIndex}
        />
      </Body>
      <br />
      <Details>
        {myProjects[index].urlWebsite && (
          <Website url={myProjects[index].urlWebsite} />
        )}
        {myProjects[index].urlGithub && (
          <Github url={myProjects[index].urlGithub} />
        )}
      </Details>
    </Container>
  );
}
