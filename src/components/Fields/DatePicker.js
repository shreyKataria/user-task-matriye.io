import styled from "styled-components";
import { Label } from "./Label";

const StyledDatePickerInput = styled.input`
  color: white;
  border: none;
  outline: none;
  border-bottom: 1px solid whitesmoke;
  margin-top: 2px;
  padding: 5px 0px;
  background-color: transparent;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 34px;
    margin: 0;
    opacity: 0;
    padding: 0;
    cursor: pointer;
    z-index: 1;
  }
`;

export const DatePicker = ({ label, ...props }) => {
  return (
    <div>
      <Label>{label ?? props?.placeholder}</Label>
      <StyledDatePickerInput {...props} type="date" />
    </div>
  );
};
