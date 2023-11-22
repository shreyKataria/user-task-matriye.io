import styled from "styled-components";
import { Label } from "./Label";

const StyledInput = styled.input`
  color: white;
  border: none;
  outline: none;
  border-bottom: 1px solid whitesmoke;
  margin-top: 2px;
  padding: 5px 0px;
  background-color: transparent;
`;

export const TextInput = ({ label, ...props }) => {
  return (
    <div>
      <Label>{label ?? props?.placeholder}</Label>
      <StyledInput {...props} />
    </div>
  );
};
