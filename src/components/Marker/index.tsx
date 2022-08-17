import { 
  Container, 
  Element,
} from './styles';

interface Props {
    index:number;
}

export default function Marker ({ index }:Props) {
 return (
   <Container> 
    <Element isActive={(index === 1)}></Element>
    <Element isActive={(index === 2)}></Element>
    <Element isActive={(index === 3)}></Element>
    <Element isActive={(index === 4)}></Element>
   </Container>
 )
}