import styled from "styled-components";
const StyledInput = styled.input`
  border: 1px solid whitesmoke;
  padding: 8px;
  border-radius: 5px;
  color: white;
  &::file-selector-button {
    background: linear-gradient(90deg, rgba(0, 255, 255, 0.683), #0769c2);
    outline: none;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 5px 15px;
    margin-right: 15px;
  }
`;

const StyledDiv = styled.div``;

export const FileInput = ({ ...props }) => {
  return (
    <StyledDiv>
      <StyledInput {...props} type="file" />
    </StyledDiv>
  );
};
