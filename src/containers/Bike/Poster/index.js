import React, { useState } from "react";
import { Input, Upload, DatePicker, Button, QRCode, Row, Col } from "antd";
import html2canvas from "html2canvas";
import dayjs from "dayjs";

function Poster() {
  const [fileList, setFileList] = useState([]);
  const dateFormat = "YYYY/MM/DD";
  const date = new Date();

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleSavaImage = () => {
    const element = document.getElementById("posterImg");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "activity-image.png";
      link.href = imgData;
      link.click();
    });
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div>
        <div>
          <Row>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              <p>請放入素材....</p>
            </Upload>
          </Row>
          <Row>
            <Input placeholder="請輸入標題....." />

          </Row>
          <Row>
            
          </Row>
        </div>
        <Button type="primary" onClick={handleSavaImage} block>
          製作完成
        </Button>
      </div>
      <div id="posterImg"></div>
    </div>
  );
}

export default Poster;
