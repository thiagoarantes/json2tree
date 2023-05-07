import { styled } from "@/stitches";
import { TreeViewProps } from "./types";

const Container = styled("div", {
  width: "400px",
  border: "1px solid $gray500",
  p: "$2",
});

const TreeView = (props: TreeViewProps) => {
  const { value } = props;

  const formattedObj = JSON.parse(value);
  const isArray = Array.isArray(formattedObj);

  return (
    <Container>
      <b>{isArray ? "Array" : "JSON"}</b>
      <br />
      {value}
    </Container>
  );
};

export default TreeView;
