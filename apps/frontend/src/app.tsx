import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import ServiceContainer from "./components/ui/serviceContainer";
import { STATUS } from "shared";
import NewEditDrawer from "./components/newEditDrawer";

const App: React.FC = () => {
  return (
    <Flex w="100%" h="100vh" p={8} direction="column" align="center">
      <Flex w="100%" maxW={800} align="flex-start" mb={8}>
        <Heading>Uptime Watcher</Heading>
      </Flex>
      <Flex direction="column" w="100%" maxW={800}>
        <ServiceContainer />
        <ServiceContainer status={STATUS.UP} />
        <ServiceContainer status={STATUS.SPOOLING} />
        <ServiceContainer status={STATUS.DOWN} />
      </Flex>
    </Flex>
  );
};

export default App;
