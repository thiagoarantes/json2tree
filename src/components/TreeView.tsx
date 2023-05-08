import { styled } from "@/stitches";
import { TreeViewProps } from "./types";
import { TreeViewItem } from ".";

const Container = styled("div", {
  width: "400px",
  border: "1px solid $neutral500",
  p: "$2",
  overflow: "auto",
});

const TreeView = (props: TreeViewProps) => {
  const { value } = props;

  return (
    <Container>
      <TreeViewItem content={value} format="object" />
    </Container>
  );
};

export default TreeView;
