import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://picnic.propartnyor.uz/api/products")
      .then((response) => {
        setCatalog(
          response?.data?.data.filter((evt) => evt.category_id === id)
        );
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <Box p="15px 0">
        <Box className="container">
          <Heading {...css.title}>{catalog[0]?.category?.name}</Heading>
          <SimpleGrid
            columns={{ xl: 3, lg: 3, md: 2, sm: 2, base: 1 }}
            gap={"20px"}
            {...css.list}>
            {catalog.map((evt, index) => (
              <Flex key={index} {...css.item}>
                <Image
                  {...css.image}
                  alt="Image"
                  src={`https://picnic.propartnyor.uz/api/uploads/images/${evt?.image_src}`}
                />
                <Flex
                  mb={"10px"}
                  p={"0 15px"}
                  align={"center"}
                  justifyContent={"space-between"}>
                  <Heading {...css.name}>{evt?.title}</Heading>
                  {/* <Heading {...css.price}>{evt?.price} so`m</Heading> */}
                </Flex>
                <Link
                  className="products-link"
                  to={`/products-about/${evt?.id}`}>
                  Batafsil ma'lumot
                </Link>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Catalog;

const css = {
  title: {
    fontSize: "35px",
    lineHeight: "40px",
    fontWeight: 700,
    marginBottom: "20px",
    color: "#318e40",
  },
  image: {
    borderRadius: "12px 12px 0 0",
    cursor: "pointer",
    width: "100%",
    height: "330px",
    objectFit: "fill",
  },
  name: {
    fontSize: "18px",
    lineHeight: "40px",
    fontWeight: 700,
    color: "#318e40",
    textAlign: "center",
  },
  price: {
    fontSize: "18px",
    lineHeight: "40px",
    fontWeight: 700,
    color: "#318e40",
  },
  item: {
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "12px",
    height: "460px",
    width: "100%",
    flexDirection: "column",
    margin: "15px 0",
  },
};
