import { Card } from "@nextui-org/react";

const FrameSection = ({ children }) => {
  return (
    <Card css={{ p: "$10", mb: "$10", bg: "$gray100" }}>
      {children}
    </Card>
  );
};

export default FrameSection;