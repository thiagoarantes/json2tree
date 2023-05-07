import { globalCss, reset, styled } from "@/stitches";
import { JSONInput, TreeView } from "@/components";

const globalStyles = globalCss(reset);

const Container = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  padding: "$2",
  gap: "$2",
});

const RightPanel = styled("div", {
  width: "400px",
  backgroundColor: "$gray500",
});

const LeftPanel = styled("div", {
  flexGrow: 1,
  backgroundColor: "$gray400",
});

function App() {
  globalStyles();

  return (
    <Container>
      <RightPanel>
        <TreeView />
      </RightPanel>
      <LeftPanel>
        <JSONInput />
      </LeftPanel>
    </Container>
  );
}

export default App;
