import { Box, Flex, Image } from "@chakra-ui/react";
import { Link as LinkChakra } from "@chakra-ui/react";
import PiknicImage from "../assets/piknic.jpg";
import { Link } from "react-router-dom";
import TelegramIcon from "../assets/telegram.webp";
import InstagramIcon from "../assets/instagram.png";

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
              <Image src={InstagramIcon} {...css.image} />
            </LinkChakra>
            <LinkChakra target="_blank" href="https://t.me/piknic_uz">
              <Image src={TelegramIcon} {...css.image} />
            </LinkChakra>
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
  image: {
    width: "25px",
    height: "25px",
  },
};
