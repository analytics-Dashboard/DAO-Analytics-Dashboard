import {
  Button,
  Box,
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useWeb3React } from '@web3-react/core'
import { injected } from "../wallet/connect"




type Props = {
  onOpen: () => void;
};

export default function NavTop(props: Props) {
  const { onOpen } = props;

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("#212145", "gray.800");

  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  async function connectWallet() {
    try {
      await activate(injected)
    } catch (error) {
      console.log(error);
    }
  }
  function disconnectWallet() {
    try {
      deactivate()
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={bg}
      borderBottomWidth="1px"
      borderColor={useColorModeValue("#DBDBFF", "#212145")}
      h="14"
    >
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", md: "none" }}
        onClick={onOpen}
        icon={<FiMenu />}
        size="sm"
      />

      {/* <InputGroup w="96" display={{ base: "none", md: "flex" }}>
        <InputLeftElement color="gray.500">
          <FiSearch />
        </InputLeftElement>
        <Input placeholder="Search metrics..." />
      </InputGroup> */}

      <Box
        as="iframe"
        src="https://coinhippo.io?widget=price-marquee&theme=?"
        title="Price Update"
        frameBorder="0"
        width="100%"
        height="35"
      />
      

      <Flex align="center">
        <Button
        onClick={connectWallet}
          color={color}
          borderWidth={1}
          borderColor="#212145"
          bg="purple.200"
        >
          Connect Wallet
        </Button>
      </Flex>
    </Flex>
  );
}
