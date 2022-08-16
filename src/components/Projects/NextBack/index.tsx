import { Container } from "./styles";

interface Props {
  param: string;
}

export default function NextBack({ param }: Props) {
  if (param === "next") {
    return (
      <Container>
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
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    );
  } else {
    return (
      <Container>
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
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    );
  }
}
