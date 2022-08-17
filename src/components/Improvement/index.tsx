//Utils
import translate from '../../utils/Translate';

import { 
  Text,
  Title, 
  Field,
  Content,
  SubTitle,
  Container,
} from './styles';

interface Props {
  toggleLanguage: boolean;
}

export default function Improvement ({ toggleLanguage }:Props) {
 return (
   <Container id="improvement"> 
    <Title> {(toggleLanguage) ? translate.improvement.title_BR : translate.improvement.title_EN} </Title>
    <Content>
        <Field>
          <SubTitle>{(toggleLanguage) ? translate.improvement.content[0].title_BR : translate.improvement.content[0].title_EN}</SubTitle>
          <Text>{(toggleLanguage) ? translate.improvement.content[0].subTitle_BR : translate.improvement.content[0].subTitle_EN}</Text>
        </Field>
        <Field>
          <SubTitle>{(toggleLanguage) ? translate.improvement.content[1].title_BR : translate.improvement.content[1].title_EN}</SubTitle>
          <Text>{(toggleLanguage) ? translate.improvement.content[1].subTitle_BR : translate.improvement.content[1].subTitle_EN}</Text>
        </Field>
        <Field>
          <SubTitle>{(toggleLanguage) ? translate.improvement.content[2].title_BR : translate.improvement.content[2].title_EN}</SubTitle>
          <Text>{(toggleLanguage) ? translate.improvement.content[2].subTitle_BR : translate.improvement.content[2].subTitle_EN}</Text>
        </Field>
    </Content>
   </Container>
 )
}