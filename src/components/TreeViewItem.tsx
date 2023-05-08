import { v4 as uuidv4 } from "uuid";
import { styled } from "@/stitches";
import { TreeViewItemProps } from "./types";

const StyleTreeViewItem = styled("div", {
  py: "$1",
  fontSize: "0.8rem",

  variants: {
    variant: {
      string: {},
      number: {},
      boolean: {},
      json: {},
      array: {},
    },
  },
});

const ChildrenContainer = styled("div", {
  pl: "$2",
});

const TreeViewItem = (props: TreeViewItemProps) => {
  const { title, content, format } = props;

  const childrenArray: any[] = [];
  const isObject = format === "object";
  let finalFormat = format;

  if (isObject) {
    const formattedObj = JSON.parse(content);
    const isArray = Array.isArray(formattedObj);

    if (isArray) {
      finalFormat = "array";

      formattedObj.forEach((item: any) => {
        childrenArray.push([undefined, item]);
      });
    } else {
      finalFormat = "json";

      Object.keys(formattedObj).forEach((key: string) => {
        childrenArray.push([key, formattedObj[key]]);
      });
    }
  }

  return (
    <>
      {/** @todo solve "as any" here */}
      <StyleTreeViewItem variant={finalFormat as any}>
        {!!title && `${title}: `}
        {isObject ? `(${finalFormat})` : content}
      </StyleTreeViewItem>

      {childrenArray.length > 0 && (
        <ChildrenContainer>
          {childrenArray.map(([childTitle, childContent]) => (
            <TreeViewItem
              key={uuidv4()}
              title={childTitle}
              content={isObject ? JSON.stringify(childContent) : childContent}
              format={typeof childContent}
            />
          ))}
        </ChildrenContainer>
      )}
    </>
  );
};

export default TreeViewItem;
