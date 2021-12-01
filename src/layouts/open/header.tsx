import React from "react";
import { Box, Text, extendTheme } from "@chakra-ui/react";

interface Props {}

const theme = extendTheme({
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
  },
});

export const HeaderLayout = (props: Props) => {
  return (
    <>
      <Box w="100%" p={4} align="center" layerStyle={"base"}>
        <Text fontSize="6xl" color="#66C1DE">
          <b>Bechke</b>
        </Text>
      </Box>
    </>
  );
};
