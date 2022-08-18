import { 
  Container, 
  Element,
} from './styles';

interface Props {
    index:number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Marker ({ index, setIndex }:Props) {
 return (
   <Container>
    <Element isActive={(index === 1)} href="#presentation" onClick={() => setIndex(1)} ></Element>
    <Element isActive={(index === 2)} href="#technologies" onClick={() => setIndex(2)} ></Element>
    <Element isActive={(index === 3)} href="#projects" onClick={() => setIndex(3)} ></Element>
    <Element isActive={(index === 4)} href="#improvement" onClick={() => setIndex(4)} ></Element>
   </Container>
 )
}