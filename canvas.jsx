import { Card, Container } from "@nextui-org/react";

const Canvas = ({ children }) => {
  return (
    <Container css={{ flex: 1, p: "$10", bg: "$gray200", h: "100vh" }}>
      <Card css={{ minHeight: "100vh", p: "$10", bg: "$white" }}>
        {children}
      </Card>
    </Container>
  );
};

export default Canvas;