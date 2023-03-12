import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: "100vh";
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const UploadImg = styled.div`
  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select {
    background: transparent;
    border: none;
  }

  .ant-upload-list .ant-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 8px;
    cursor: pointer;
    width: 275px;
    height: 800px;
  }

  .ant-upload-list .ant-upload-list-item .ant-upload-list-item-done{
    width: 307px;
    height: 800px;
  }
`;



export const RowType = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const PosterSize = styled.div`
  img {
    width: "600px";
    height: "1000px";
  }
`;
