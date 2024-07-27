import { useState } from "react";
import { Container, Row, Col, Button, Image } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import ImagePicker from "../components/ImagePicker";
import ButtonStyles from "../components/ButtonStyles";
import FrameSection from "../components/FrameSection";
import Shapes from "../components/Shapes";

export default function Home() {
  const [elements, setElements] = useState([]);
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [buttonStylesVisible, setButtonStylesVisible] = useState(false);
  const [shapesVisible, setShapesVisible] = useState(false);

  const addElement = (type) => {
    switch (type) {
      case "image":
        setImagePickerVisible(true);
        break;
      case "button":
        setButtonStylesVisible(true);
        break;
      case "shape":
        setShapesVisible(true);
        break;
      default:
        setElements([...elements, { type }]);
    }
  };

  const onImageSelect = (url) => {
    setElements([...elements, { type: "image", url }]);
    setImagePickerVisible(false);
  };

  const onButtonStyleSelect = (style) => {
    setElements([...elements, { type: "button", style }]);
    setButtonStylesVisible(false);
  };

  const onShapeSelect = (shape) => {
    setElements([...elements, { type: "shape", shape }]);
    setShapesVisible(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Sidebar onAddElement={addElement} />
        </Col>
        <Col>
          <Canvas>
            {elements.map((el, index) => {
              switch (el.type) {
                case "header":
                  return <h1 key={index}>Header</h1>;
                case "paragraph":
                  return <p key={index}>Paragraph</p>;
                case "image":
                  return <Image key={index} src={el.url} alt="Selected" />;
                case "button":
                  return <Button key={index} color={el.style}>Button</Button>;
                case "frame":
                  return <FrameSection key={index}>Frame</FrameSection>;
                case "shape":
                  return <div key={index}>{el.shape}</div>;
                default:
                  return null;
              }
            })}
          </Canvas>
        </Col>
      </Row>
      <ImagePicker
        visible={imagePickerVisible}
        onClose={() => setImagePickerVisible(false)}
        onSelect={onImageSelect}
      />
      <ButtonStyles
        visible={buttonStylesVisible}
        onClose={() => setButtonStylesVisible(false)}
        onSelect={onButtonStyleSelect}
      />
      <Shapes
        visible={shapesVisible}
        onClose={() => setShapesVisible(false)}
        onSelect={onShapeSelect}
      />
    </Container>
  );
}