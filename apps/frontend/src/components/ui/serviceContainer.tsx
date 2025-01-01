import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { STATUS } from "shared";
import { useEffect, useState } from "react";

type State = {
  bg: string;
  background: string;
};

type Props = {
  status?: (typeof STATUS)[keyof typeof STATUS];
};

const ServiceContainer: React.FC<Props> = ({ status }) => {
  const inital: State = {
    bg: "gray.600",
    background: "gray.600",
  };

  const up: State = {
    bg: "green.600",
    background: "green.600",
  };

  const spooling: State = {
    bg: "orange.600",
    background:
      "repeating-linear-gradient(90deg, #ea580c, #ea580c 10px, #92310a 10px, #92310a 20px)",
  };

  const down: State = {
    bg: "red.600",
    background:
      "repeating-linear-gradient(135deg, #dc2626, #dc2626 10px, #991919 10px, #991919 20px)",
  };

  const [dispStatus, setDispStatus] = useState<State>(inital);

  useEffect(() => {
    switch (status) {
      case STATUS.UP:
        setDispStatus(up);
        break;
      case STATUS.SPOOLING:
        setDispStatus(spooling);
        break;
      case STATUS.DOWN:
        setDispStatus(down);
        break;
      default:
        setDispStatus(inital);
        break;
    }
  }, [status]);

  return (
    <Box
      bg={dispStatus.bg}
      p={2}
      borderRadius="md"
      textAlign="center"
      background={dispStatus.background}
      mt={2}
    >
      <Box bg="gray.900" p={2} borderRadius="md" textAlign="center">
        <Grid
          h={50}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={2}>
            <Flex>
              <Heading as="h4" size="md">
                Service Name Here
              </Heading>
            </Flex>
          </GridItem>
          <GridItem colSpan={2} rowSpan={2}>
            <Flex align="center" w="100%" h="100%">
              <Text>Last Deployment: 2 hours ago</Text>
            </Flex>
          </GridItem>
          <GridItem rowSpan={2} pr={4}>
            <Flex justify="flex-end" align="center" w="100%" h="100%">
              <Text>Up</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex>
              <Text>Version: GitHashHere</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceContainer;
