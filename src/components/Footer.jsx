import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import XInstagram from "../assets/svg/XInstagram";
import XTelegram from "../assets/svg/XTelegram";

function Footer() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex align={"center"} justifyContent={"space-between"}>
          <Heading {...css.title}>
            Piknic uchun kerakli buyumlarni sotib olishni xohlasizmi?
          </Heading>
          <Link {...css.number} href="tel:+998990691991">
            Bog`lanish
          </Link>
        </Flex>
        <Flex mt={"30px"} gap="20px" align="center">
          <Link target="_blank" href="https://www.instagram.com/Piknic_uz">
            <XInstagram height={26} width={26} />
          </Link>
          <Link target="_blank" href="https://t.me/piknic_uz">
            <XTelegram height={26} width={26} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  box: {
    background: "#245E2E",
    padding: "40px 0",
  },
  title: {
    fontSize: "30px",
    color: "#fff",
    lineHeight: "40px",
  },
  number: {
    border: "2px solid #fff",
    padding: "12px 30px",
    borderRadius: "25px",
    color: "#fff",
    textDecoration: "none",
    transition: "0.3s all",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",

    _hover: {
      color: "#245E2E",
      backgroundColor: "#fff",
    },
  },
};
