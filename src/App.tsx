import { useState } from "react";
import { globalCss, reset, styled } from "@/stitches";
import { JSONInput, TreeView } from "@/components";
import { DEFAULT_JSON } from "@/utils";

const globalStyles = globalCss(reset);

const Container = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  p: "$2",
  gap: "$2",
});

const LeftPanel = styled("div", {
  width: "400px",
  backgroundColor: "$gray500",
});

const RightPanel = styled("div", {
  flexGrow: 1,
});

function App() {
  const [JSONValue, setJSONValue] = useState<string>(DEFAULT_JSON);

  const updateJSONValue = (value: string): void => {
    setJSONValue(value);
  };

  globalStyles();

  return (
    <Container>
      <LeftPanel>
        <TreeView value={JSONValue} />
      </LeftPanel>
      <RightPanel>
        <JSONInput value={JSONValue} updateJSONValue={updateJSONValue} />
      </RightPanel>
    </Container>
  );
}

export default App;
