import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@/stitches";
import { TreeViewItemProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled("div", {
  display: "flex",
  gap: "$0-5",
});

const ArrowContainer = styled("div", {
  width: "$space$2",
  display: "flex",
  alignItems: "center",
});

const ArrowButton = styled("div", {
  border: "none",
  width: "$2",
});

const StyleTreeViewItem = styled("div", {
  py: "$1",
  pl: "$3",
  fontSize: "0.8rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "$space$2",
  backgroundPosition: "0 9px",
  cursor: "default",

  variants: {
    variant: {
      string: { backgroundImage: "url(icons/string.svg)" },
      number: { backgroundImage: "url(icons/number.svg)" },
      boolean: { backgroundImage: "url(icons/boolean.svg)" },
      json: { backgroundImage: "url(icons/json.svg)" },
      array: { backgroundImage: "url(icons/array.svg)" },
    },
  },
});

const ChildrenContainer = styled("div", {
  pl: "$2",
});

const TreeViewItem = (props: TreeViewItemProps) => {
  const { title, content, format } = props;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const childrenArray: any[] = [];
  const isObject = format === "object";
  let finalFormat = format;

  const toggleChildren = () => {
    setIsOpen((prev) => !prev);
  };

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
      <Container>
        <ArrowContainer>
          {isObject && (
            <ArrowButton onClick={toggleChildren}>
              <FontAwesomeIcon icon={isOpen ? faCaretDown : faCaretRight} />
            </ArrowButton>
          )}
        </ArrowContainer>

        {/** @todo solve "as any" here */}
        <StyleTreeViewItem variant={finalFormat as any}>
          {!!title && `${title}: `}
          {isObject ? `(${finalFormat})` : content}
        </StyleTreeViewItem>
      </Container>

      {childrenArray.length > 0 && isOpen && (
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
