import { Box, Flex, Text } from "@chakra-ui/react";

function Skeleton() {
  return (
    <Box borderRadius="8px">
      <Box {...css.box}></Box>
      <Flex align={"center"} gap={"8px"} padding="15px 10px">
        <Text {...css.text}></Text>
      </Flex>
    </Box>
  );
}

export default Skeleton;

const css = {
  box: {
    background: "#BFC6D2",
    width: "100%",
    height: 250,
    borderRadius: "8px",
  },
  text: {
    background: "#BFC6D2",
    width: "100%",
    height: "20px",
    borderRadius: "8px",
  },
};
