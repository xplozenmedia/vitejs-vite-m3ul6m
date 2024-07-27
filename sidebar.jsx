import { Button, Card, Grid } from "@nextui-org/react";

const Sidebar = ({ onAddElement }) => {
  return (
    <Card css={{ w: "200px", h: "100vh", bg: "$gray100" }}>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Button onPress={() => onAddElement("header")}>Header</Button>
        </Grid>
        <Grid>
          <Button onPress={() => onAddElement("paragraph")}>Paragraph</Button>
        </Grid>
        <Grid>
          <Button onPress={() => onAddElement("image")}>Image</Button>
        </Grid>
        <Grid>
          <Button onPress={() => onAddElement("button")}>Button</Button>
        </Grid>
        <Grid>
          <Button onPress={() => onAddElement("frame")}>Frame</Button>
        </Grid>
        <Grid>
          <Button onPress={() => onAddElement("shape")}>Shape</Button>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default Sidebar;