//React
import { useState } from 'react';
import IconsBackEnd from './IconsBackEnd';
import IconsDatabase from './IconsDatabase';
import IconsFrontEnd from './IconsFrontEnd';
import IconsMobile from './IconsMobile';

import { 
  Container,
  TechnologiesArea,
  Title,
  ContentArea,
  TabElement,
} from './styles';

export default function Technologies () {

 const [status, setStatus] = useState({
  frontEnd: true,
  backEnd: false,
  mobile: false,
  database: false,
 });

 function handleClick(param:string) {
   switch(param) {
      case 'frontEnd': 
        setStatus({...status, frontEnd: true, backEnd: false, mobile: false, database: false});
      break;
      case 'backEnd':
        setStatus({...status, frontEnd: false, backEnd: true, mobile: false, database: false});
      break;
      case 'mobile':
        setStatus({...status, frontEnd: false, backEnd: false, mobile: true, database: false});
      break;
      case 'database':
        setStatus({...status, frontEnd: false, backEnd: false, mobile: false, database: true});
      break;
   }
 }

 return (
   <Container id="technologies"> 
      <Title>Technologies</Title>
      <TechnologiesArea>
        <TabElement isActive={status.frontEnd} onClick={() => handleClick('frontEnd')}> Front-End  </TabElement>
        <TabElement isActive={status.backEnd}  onClick={() => handleClick('backEnd')}> Back-End </TabElement>
        <TabElement isActive={status.mobile}   onClick={() => handleClick('mobile')}> Mobile </TabElement>
        <TabElement isActive={status.database} onClick={() => handleClick('database')}> Database </TabElement> 
      </TechnologiesArea>
      <ContentArea>
        {status.frontEnd && <IconsFrontEnd />}
        {status.backEnd && <IconsBackEnd />}
        {status.mobile && <IconsMobile />}
        {status.database && <IconsDatabase />}
      </ContentArea>
   </Container>
 )
}