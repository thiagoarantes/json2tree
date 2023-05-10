import { styled } from "@/stitches";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled("div", {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  height: "$space$7",
  backgroundColor: "white",
  p: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "$primary500",
});

const StyledButton = styled("button", {
  border: "none",
  backgroundColor: "transparent",
  fontSize: "1.6rem",
  color: "$primary500",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  "&:hover::before": {
    content: "Github",
    fontSize: "0.9rem",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    pr: "$1-5",
    fontWeight: "bolder",
  },

  "&:hover::after": {
    content: "",
    position: "absolute",
    top: "-$1",
    bottom: "-$1",
    left: "-$1",
    right: "-$1",
    zIndex: -1,
    backgroundColor: "$primary100",
  },
});

const Header = () => {
  return (
    <Container>
      <b>json2Tree</b>
      <StyledButton
        onClick={() =>
          window.open("https://github.com/thiagoarantes/json2tree")
        }
      >
        <FontAwesomeIcon icon={faGithub} />
      </StyledButton>
    </Container>
  );
};

export default Header;
