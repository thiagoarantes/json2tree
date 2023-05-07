import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@/stitches";
import { JSONInputProps } from "./types";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

const StyledButton = styled("button", {
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  p: "$1",
  width: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$1",
  color: "$neutral100",
  backgroundColor: "$primary500",
  border: "none",
});

const StyledTextarea = styled("textarea", {
  flexGrow: 1,
  p: "$2",
  border: "1px solid $neutral400",

  "&:focus-visible": {
    borderColor: "transparent",
    outline: "3px solid $primary400",
  },

  variants: {
    valid: {
      false: {
        backgroundColor: "$errorLight",
      },
    },
  },
});

const JSONInput = (props: JSONInputProps) => {
  const { value: propValue, updateJSONValue: handleUpdateToParent } = props;

  const [value, setValue] = useState<string>(propValue);
  const [valid, setValid] = useState<boolean>(true);

  /**
   * Validate entered JSON is correct
   */
  const isJSON = (value: string): boolean => {
    try {
      JSON.parse(value);
      setValid(true);
    } catch (_e) {
      console.log("JSON not valid!");
      setValid(false);
      return false;
    }

    return true;
  };

  /**
   * Update state with current value of JSON input
   */
  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  /**
   * Send valid JSON back to parent component
   */
  const handleValueUpdateToParent = () => {
    isJSON(value) && handleUpdateToParent(value);
  };

  return (
    <Container>
      <StyledButton onClick={handleValueUpdateToParent}>
        <FontAwesomeIcon icon={faCaretLeft} />
        Transform
      </StyledButton>
      <StyledTextarea
        value={value}
        onChange={handleValueChange}
        valid={valid}
      />
    </Container>
  );
};

export default JSONInput;
