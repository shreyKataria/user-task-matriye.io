import styled from "styled-components";

export const FieldContainer = styled.div`
  width: 25%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Field = ({ children }) => {
  return <FieldContainer>{children}</FieldContainer>;
};
