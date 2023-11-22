import styled from "styled-components";

export const SectionHeading = styled.h2`
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Sections = ({ children, heading }) => {
  return (
    <div>
      {heading && <SectionHeading>{heading}</SectionHeading>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {children}
      </div>
    </div>
  );
};
