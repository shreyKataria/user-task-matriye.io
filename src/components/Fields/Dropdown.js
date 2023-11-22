import styled from "styled-components";
import { Label } from "./Label";

const StyledSelect = styled.select`
  color: white;
  border: none;
  outline: none;
  border-bottom: 1px solid whitesmoke;
  margin-top: 2px;
  padding: 6.5px 0px;
  background-color: transparent;
  width: 100%;
  max-width: 182px;
`;

export const Dropdown = ({ label, options, ...props }) => {
  return (
    <div>
      <Label>{label ?? props?.placeholder}</Label>
      <StyledSelect {...props}>
        {options.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};
