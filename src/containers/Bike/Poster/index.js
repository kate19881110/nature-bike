import React, { useState, useRef } from "react";
import { Input, Upload, DatePicker, Button, QRCode, Row, Col } from "antd";
import html2canvas from "html2canvas";
import dayjs from "dayjs";
import * as Style from "./style";

function Poster() {
  const ref = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [uploaded, setUploaded] = useState(false);

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

  const beforeUpload = (file) => {
    if (uploaded) {
      return false;
    }
    setUploaded(true);
    return true;
  };

  const handleSavaImage = () => {
    // ref.current 截圖的元素
    html2canvas(ref.current).then((canvas) => {
      const imgData = canvas.toDataURL(); // 將canvas轉換為圖片數據URL
      const img = new Image();
      img.src = imgData;
      const location = document.getElementById("site");
      location.appendChild(img); // 在頁面上顯示截圖結果
    });
  };
  return (
    <Style.Wrapper>
      <div>
        <Style.Title>
          <h1>製作海報</h1>
        </Style.Title>
        <div ref={ref}>
          <Row>
            <Style.UploadImg>
              <Upload
                action="http://localhost:3000/poster"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                beforeUpload={beforeUpload}
              >
                {fileList.length >= 1 ? null : <p>素材1</p>}
              </Upload>
            </Style.UploadImg>
          </Row>
          <Row>
            <Input placeholder="請輸入標題....." />
            <DatePicker renderExtraFooter={() => "extra footer"} showTime />
          </Row>
          <Row></Row>
        </div>
        <Button type="primary" onClick={handleSavaImage} block>
          製作完成
        </Button>
      </div>
      <div id="site" style={{ width: "50%", height: "50%" }}></div>
    </Style.Wrapper>
  );
}

export default Poster;
