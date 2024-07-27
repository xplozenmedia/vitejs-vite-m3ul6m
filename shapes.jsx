import { useState } from "react";
import { Modal, Button, Radio } from "@nextui-org/react";

const Shapes = ({ visible, onClose, onSelect }) => {
  const [shape, setShape] = useState("circle");

  const handleSelect = () => {
    onSelect(shape);
    onClose();
  };

  return (
    <Modal open={visible} onClose={onClose}>
      <Modal.Header>
        <h3>Choose a Shape</h3>
      </Modal.Header>
      <Modal.Body>
        <Radio.Group value={shape} onChange={setShape}>
          <Radio value="circle">Circle</Radio>
          <Radio value="square">Square</Radio>
          <Radio value="triangle">Triangle</Radio>
        </Radio.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onPress={handleSelect}>
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Shapes;