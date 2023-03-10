// import { Button, styled } from "@mui/material";
import styled from "styled-components";
// export const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.custom.light,
// }));
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
