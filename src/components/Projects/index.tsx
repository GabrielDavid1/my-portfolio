//React
import { useState } from "react";

//Components
import Github from "./Icons/Github";
import Website from "./Icons/Website";
import NextBack from "./NextBack";

//utils
import myProjects from "../../utils/myProjects";

import { Body, Title, Container, Details, Image, Link, Description } from "./styles";

export default function Projects() {
  const [index, setIndex] = useState(0);
  return (
    <Container id="projects">
      <Title>
        {" "}
        {myProjects[index].title} - {myProjects[index].type}{" "}
      </Title>
      <Description> {myProjects[index].description} </Description>
      <Body>
        <NextBack
          param="back"
          index={index}
          setIndex={setIndex}
          length={myProjects.length}
        />
        <Image src={myProjects[index].img} alt={myProjects[index].title} />
        <NextBack
          param="next"
          index={index}
          setIndex={setIndex}
          length={myProjects.length}
        />
      </Body>
      <br />
      <Details>
        {myProjects[index].urlWebsite && (
          <Link
            href={myProjects[index].urlWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Website />{" "}
          </Link>
        )}
        {myProjects[index].urlGithub && (
          <Link
            href={myProjects[index].urlGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Github />{" "}
          </Link>
        )}
      </Details>
    </Container>
  );
}
