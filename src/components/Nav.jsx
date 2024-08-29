import { Box, Flex, Image } from "@chakra-ui/react";
import Instagram from "../assets/svg/Instagram";
import Telegram from "../assets/svg/Telegram";
import { Link as LinkChakra } from "@chakra-ui/react";
import PiknicImage from "../assets/piknic.jpg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex className="nav" justifyContent="space-between">
          <Link to={"/"}>
            <Image width={"80px"} src={PiknicImage} />
          </Link>
          <Flex className="nav-list" gap="20px" align="center">
            <LinkChakra
              target="_blank"
              href="https://www.instagram.com/Piknic_uz">
              <Instagram height={26} width={26} />
            </LinkChakra>
            <LinkChakra target="_blank" href="https://t.me/piknic_uz">
              <Telegram height={26} width={26} />
            </LinkChakra>
            {/* <LinkChakra
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61553429155300">
              <Facebook height={16} width={16} />
            </LinkChakra> */}
            {/* <LinkChakra
              target="_blank"
              href="https://www.youtube.com/@uzbekistanalstar4978">
              <YouTube height={18} width={20} />
            </LinkChakra> */}
            {/* <a className="nav-link nav-links" href="tel:+998990691991">
              +998 99 069 19 91
            </a> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Nav;

const css = {
  box: {
    padding: "10px 0",
  },
};
