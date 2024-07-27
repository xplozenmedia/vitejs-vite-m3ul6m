import { useState } from "react";
import { Modal, Button, Radio } from "@nextui-org/react";

const ButtonStyles = ({ visible, onClose, onSelect }) => {
  const [style, setStyle] = useState("primary");

  const handleSelect = () => {
    onSelect(style);
    onClose();
  };

  return (
    <Modal open={visible} onClose={onClose}>
      <Modal.Header>
        <h3>Choose Button Style</h3>
      </Modal.Header>
      <Modal.Body>
        <Radio.Group value={style} onChange={setStyle}>
          <Radio value="primary">Primary</Radio>
          <Radio value="secondary">Secondary</Radio>
          <Radio value="success">Success</Radio>
          <Radio value="error">Error</Radio>
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

export default ButtonStyles;