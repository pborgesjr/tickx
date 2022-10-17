import React from "react";
import {
  Circle as ChakraUICircle,
  SquareProps,
  useMediaQuery,
} from "@chakra-ui/react";

interface CircleProps extends SquareProps {}

export const Circle = React.memo(({ ...rest }: CircleProps) => {
  const [isPortraitMode] = useMediaQuery("(max-height: 490px)");

  return (
    <ChakraUICircle
      {...rest}
      m={1}
      size={isPortraitMode ? "40px" : ["40px", "50px", "70px", "80px", "100px"]}
    />
  );
});
