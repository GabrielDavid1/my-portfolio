import { 
  Text,
  Title, 
  Field,
  Content,
  SubTitle,
  Container,
} from './styles';

export default function Improvement () {
 return (
   <Container id="improvement"> 
    <Title> Although I have improved a lot in 2022, I see that I have points to improve to reach an excellent level as a professional, these points are: </Title>
    <Content>
        <Field>
          <SubTitle>Ux Design</SubTitle>
          <Text>My notions in this modality were dark in 2022, it evolves a lot in this regard, but I have a lot to go through if you consider the high-level projects that are developed by excellent professionals.</Text>
        </Field>
        <Field>
          <SubTitle>Search</SubTitle>
          <Text> The scope of research involves understanding methodologies to map the best paths to problem solving. </Text>
        </Field>
        <Field>
          <SubTitle>Process</SubTitle>
          <Text>Study in depth about the processes before the code to increase the accuracy in the creation of tools.</Text>
        </Field>
    </Content>
   </Container>
 )
}