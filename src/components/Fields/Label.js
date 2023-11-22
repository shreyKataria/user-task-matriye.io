import styled from "styled-components";

const StyledLabel = styled.p`
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Label = ({ children }) => {
  return <StyledLabel>{children} </StyledLabel>;
};
