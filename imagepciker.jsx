import { useState } from "react";
import { Modal, Button, Input } from "@nextui-org/react";

const ImagePicker = ({ visible, onClose, onSelect }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleSelect = () => {
    onSelect(imageUrl);
    onClose();
  };

  return (
    <Modal open={visible} onClose={onClose}>
      <Modal.Header>
        <h3>Choose an Image</h3>
      </Modal.Header>
      <Modal.Body>
        <Input
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto onPress={handleSelect}>
          Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePicker;