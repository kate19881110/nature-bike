import React, { useState, useRef } from "react";
import { Form, Input, Upload, DatePicker, Button, QRCode } from "antd";
import html2canvas from "html2canvas";
import dayjs from "dayjs";
import * as Style from "./style";
import { getUserInfo } from "../../../utils/auth";

function Poster() {
  const ref = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [qrCodeValue, setQrCodeValue] = useState("");
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

  const handleBeforeUpload = (file) => {
    return new Promise((resolve, reject) => {
      // 创建一个图片对象
      const img = new Image();

      // 当图片加载完毕后
      img.onload = () => {
        // 创建一个 Canvas 元素
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // 将图片绘制到 Canvas 上，并调整大小和旋转角度
        canvas.width = img.width / 2; // 将图片宽度调整为原来的一半
        canvas.height = img.height / 2; // 将图片高度调整为原来的一半
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        ); // 将图片绘制到 Canvas 上
        canvas.toBlob(
          (blob) => {
            // 将处理后的图片转换成 Blob 对象
            file = new File([blob], file.name, { type: "image/jpeg" });

            // // 将处理后的图片上传到服务器
            // props.upload(file).then(resolve).catch(reject);
          },
          "image/jpeg",
          0.8
        );
      };

      // 加载图片
      img.src = URL.createObjectURL(file);
    });
  };

  const handleQRcode = (e) => {
    setQrCodeValue(e.target.value);
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

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Style.Wrapper>
      <div>
        <Style.Title>
          <h1>製作海報</h1>
        </Style.Title>
        <Style.PosterSize ref={ref}>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "請選擇素材1 !",
                },
              ]}
            >
              <Style.UploadImg>
                <Upload
                  action="http://localhost:3000/poster"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  beforeUpload={handleBeforeUpload}
                >
                  {fileList.length >= 1 ? null : <p>素材1</p>}
                </Upload>
              </Style.UploadImg>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
              name="title"
              rules={[
                {
                  required: true,
                  message: "請輸入標題!",
                },
              ]}
            >
              <Input placeholder="請輸入標題....." />
            </Form.Item>
            <Form.Item
              label="活動時間:"
              name="activityTime"
              rules={[
                {
                  required: true,
                  message: "請填活動時間!",
                },
              ]}
            >
              <DatePicker renderExtraFooter={() => "extra footer"} showTime />
            </Form.Item>
            <Form.Item
              label="集合地點:"
              name="meetingPoint"
              rules={[
                {
                  required: true,
                  message: "請填集合地點!",
                },
              ]}
            >
              <Input placeholder="請輸入地點....." />
            </Form.Item>

            <Form.Item
              label="社團 QRCode:"
              name="qrCodeUrl"
              rules={[
                {
                  required: true,
                  message: "請填QRCode Url!",
                },
              ]}
            >
              <Input value={qrCodeValue} onChange={handleQRcode} />
              {<Input value={qrCodeValue} /> ? (
                <QRCode value={qrCodeValue} />
              ) : (
                {}
              )}
            </Form.Item>
          </Form>
          <Style.RowType>
            <p>社長: {getUserInfo().name}</p>
            <p> 信箱: {getUserInfo().email}</p>
          </Style.RowType>
        </Style.PosterSize>
        <Button type="primary" onClick={handleSavaImage} block>
          製作完成
        </Button>
      </div>
      <div>
        <div id="site"></div>
        <Button type="primary" block>
          寄送
        </Button>
      </div>
    </Style.Wrapper>
  );
}

export default Poster;
