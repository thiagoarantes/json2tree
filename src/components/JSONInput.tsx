import { styled } from "@/stitches";

const DEFAULT_JSON =
  "{\n\tname: 'Thiago',\n\tage: 40,\n\tprofession: 'Daddy'\n}";

const Container = styled("textarea", {
  width: "100%",
  height: "100%",
  padding: "$2",
});

const JSONInput = () => {
  return <Container value={DEFAULT_JSON} />;
};

export default JSONInput;
