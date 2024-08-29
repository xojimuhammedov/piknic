import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios
      .get("https://picnic.propartnyor.uz/api/categories")
      .then((response) => {
        setCatalog(response?.data?.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Box id="product" p="35px 0">
        <Box className="container">
          <Heading {...css.title}>Bizning Mahsulotlar</Heading>
          <SimpleGrid
            columns={{ xl: 3, lg: 3, md: 2, sm: 2, base: 1 }}
            gap={"25px"}
            mt="30px"
            {...css.list}>
            {catalog.map((evt, index) => (
              <Link to={`/products/${evt?.id}`} key={index}>
                <Flex {...css.item}>
                  <Image
                    {...css.image}
                    alt="Image"
                    src={`https://picnic.propartnyor.uz/api/uploads/images/${evt?.image_src}`}
                  />
                  <Heading {...css.name}>{evt.name}</Heading>
                </Flex>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Product;

const css = {
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "20px",
    color: "#318e40",
  },
  name: {
    fontSize: "25px",
    lineHeight: "40px",
    fontWeight: 700,
    textAlign: "center",
    color: "#318e40",
  },
  image: {
    borderRadius: "12px 12px 0 0",
    cursor: "pointer",
    width: "100%",
    height: "450px",
    objectFit: "fill",
  },
  item: {
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "12px",
    height: "520px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};
