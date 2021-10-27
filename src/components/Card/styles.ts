import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  min-height: 220px;
  border: 2px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  margin: 1%;
  padding: 5px;

  :hover {
    box-shadow: 0px 0px 36px 2px rgba(0, 0, 0, 0.24);
    -webkit-box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const BoxImg = styled.div`
  max-width: 150px;
  max-height: 150px;

  > img {
    min-width: 65%;
    height: 100%;
  }
`;
