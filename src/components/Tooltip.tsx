import { useState } from "react";
import { styled } from "@/stitches";
import { TooltipProps } from "./types";

const TooltipWrapper = styled("div", {
  display: "inline-block",
  position: "relative",
});

const TooltipTip = styled("div", {
  position: "absolute",
  borderRadius: "$0-5",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "$1",
  background: "$neutral400",
  lineHeight: "1",
  zIndex: "100",
  whiteSpace: "nowrap",

  "&::before": {
    content: " ",
    left: "50%",
    border: "solid transparent",
    height: "0",
    width: "0",
    position: "absolute",
    pointerEvents: "none",
    borderWidth: "$space$1",
    ml: "calc($space$1 * -1)",
  },

  variants: {
    direction: {
      top: {
        top: "calc($space$4 * -1)",

        "&::before": {
          top: "100%",
          borderTopColor: "$neutral400",
        },
      },
      right: {
        left: "calc(100% + $space$4)",
        top: "50%",
        transform: "translateX(0) translateY(-50%)",

        "&::before": {
          left: "calc($space$1 * -1)",
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          borderRightColor: "$neutral400",
        },
      },
      bottom: {
        bottom: "calc($space$4 * -1)",

        "&::before": {
          bottom: "100%",
          borderBottomColor: "$neutral400",
        },
      },
      left: {
        left: "auto",
        right: "calc(100% + $space$4)",
        top: "50%",
        transform: "translateX(0) translateY(-50%)",

        "&::before": {
          left: "auto",
          right: "calc($space$1 * -1)",
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          borderLeftColor: "$neutral400",
        },
      },
    },
  },
});

const Tooltip = (props: TooltipProps) => {
  const { children, content, delay, direction } = props;

  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {/* Wrapping */}
      {children}
      {active && (
        <TooltipTip direction={direction || "top"}>
          {/* Content */}
          {content}
        </TooltipTip>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
