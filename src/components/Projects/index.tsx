//React
import { useEffect, useState } from "react";

//Components
import NextBack from "./NextBack";
import Github from "./Icons/Github";
import Website from "./Icons/Website";

//utils
import myProjects from "../../utils/myProjects";

import { 
   Body,
   Title,
   Container,
   Details,
   Image,
   Link,
   Description
} from "./styles";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    setImageIndex((index > lastIndex) ? index-1 : index+1);
    setOpacity('0');
    setTimeout(() => setOpacity('1'), 1000);
  } , [index]);

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
          setLastIndex={setLastIndex}
        />
         {(opacity === '1') 
             ? <Image src={myProjects[index].img} alt={myProjects[index].title} opacity={opacity} />
             : <Image src={myProjects[imageIndex].img} alt={myProjects[index].title} opacity={opacity} />
         }
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
