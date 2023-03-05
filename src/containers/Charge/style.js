import styled from "styled-components";

export const Direction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const VerticalCenter = styled.div`
 top:50%;
 transform: translateY(-50%);
`;

export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioWord = styled.div`
  .ant-radio-wrapper span:nth-of-type(2) {
    width: 45px;
  }
`;

export const RadioWordLength = styled.div`
  .ant-radio-wrapper span:nth-of-type(2) {
    width: 65px;
  }
`;
