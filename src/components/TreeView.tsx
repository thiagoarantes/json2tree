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

  let returnArray: any[] = [];

  if (isArray) {
    formattedObj.forEach((item: any) => {
      returnArray.push(["", formattedObj[item]]);
    });
  } else {
    Object.keys(formattedObj).forEach((key: string) => {
      returnArray.push([key, formattedObj[key]]);
    });
  }

  return (
    <Container>
      <b>{isArray ? "Array" : "JSON"}</b>
      <br />
      <br />
      {returnArray.map(([key, item]) => (
        <div>
          {key}: ({typeof item}) {item}
        </div>
      ))}
    </Container>
  );
};

export default TreeView;
