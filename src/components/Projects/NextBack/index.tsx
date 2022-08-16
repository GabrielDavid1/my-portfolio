import { Container } from "./styles";

interface Props {
  param:string;
  index:number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  length:number;
}

export default function NextBack({ param, index, setIndex, length }: Props) {
  
  function moveIndex () {
    const limit = length - 1;
    if (param === "next") {
        (index < limit) && setIndex(index + 1);
    } else {
        (index > 0) && setIndex(index - 1);
    }
  }

  if (param === "next") {
    return (
      <Container onClick={moveIndex}>
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="white" fillOpacity="0.01" />
          <path
            d="M19 12L31 24L19 36"
            stroke={index === (length-1) ? "#818181" : "#000"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    );
  } else {
    return (
      <Container onClick={moveIndex}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="white" fillOpacity="0.01" />
          <path
            d="M31 36L19 24L31 12"
            stroke={index === 0 ? "#818181" : "#000"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    );
  }
}
