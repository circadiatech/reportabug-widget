import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { Modal, Button } from "antd";
import "./style.css";

let abc = false;
export default function ScreenshotButton(props = {}) {
  let doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    x = docElem.clientWidth || body.clientWidth,
    y = docElem.clientHeight || body.clientHeight;
  const { width = x, height = y, pixelRatio = window.devicePixelRatio } = props;
  let canvasRef = useRef(null);

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const style = { width, height };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const screenshot = () => {
    html2canvas(document.body).then(function (newCanvas) {
      const context = canvasRef.current.getContext("2d");
      if (abc) {
        context.clearRect(10, 10, x, y);
        context.beginPath();
        abc = false;
        return;
      }
      abc = true;
      context.drawImage(newCanvas, 10, 10);
    });
  };
  canvasRef = React.createRef();

  return (
    <>
      <button className="reportABug-button" onClick={screenshot}>
        Report A Bug
      </button>{" "}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <canvas ref={canvasRef} width={dw} height={dh} style={style}></canvas>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}
