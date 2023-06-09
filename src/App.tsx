import { useState } from "react";
import { globalCss, reset, styled } from "@/stitches";
import { Header, JSONInput, TreeView } from "@/components";
import { DEFAULT_JSON } from "@/utils";

const globalStyles = globalCss(reset);

const Container = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  p: "$7 $2 $2",
  gap: "$2",
});

function App() {
  const [JSONValue, setJSONValue] = useState<string>(DEFAULT_JSON);

  const updateJSONValue = (value: string): void => {
    setJSONValue(value);
  };

  globalStyles();

  return (
    <Container>
      <Header />
      <TreeView value={JSONValue} />
      <JSONInput value={JSONValue} updateJSONValue={updateJSONValue} />
    </Container>
  );
}

export default App;
