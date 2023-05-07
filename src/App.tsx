import { globalCss, reset, styled } from "@/stitches";

const globalStyles = globalCss(reset);

const OuterContainer = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  padding: "$2",
  gap: "$2",
});

const TreeViewContainer = styled("div", {
  width: "400px",
  backgroundColor: "$gray500",
});

const JSONContainer = styled("div", {
  flexGrow: 1,
  backgroundColor: "$gray400",
});

function App() {
  globalStyles();

  return (
    <OuterContainer>
      <TreeViewContainer>TreeView</TreeViewContainer>
      <JSONContainer>JSON</JSONContainer>
    </OuterContainer>
  );
}

export default App;
