import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function AboutProduct() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://picnic.propartnyor.uz/api/products/${id}`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Box p={"25px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          gap={"20px"}
          width={"100%"}>
          <Box {...css.left}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop
              className="mySwiper">
              {products?.product_images?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    {...css.image}
                    src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.images_src}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box>
            <Heading {...css.title}>{products?.title}</Heading>
            <Text {...css.text}>{products?.description}</Text>
            <Heading {...css.price}>Narxi: {products?.price} so`m</Heading>
            <Link href="tel:+998990691991" {...css.button}>
              Bog`lanish
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AboutProduct;

const css = {
  image: {
    width: "100%",
    height: {
      base: "350px",
      lg: "550px",
    },
    objectFit: "fill",
  },
  left: {
    width: {
      base: "100%",
      lg: "40%",
    },
  },
  title: {
    fontSize: {
      base: "25px",
      lg: "45px",
    },
    fontWeight: "bold",
    color: "#245E2E",
    lineHeight: {
      base: "35px",
      lg: "50px",
    },
    width: {
      base: "100%",
      lg: "650px",
    },
  },
  text: {
    fontSize: "16px",
    color: "#245E2E",
    lineHeight: "26px",
    width: {
      base: "100%",
      lg: "650px",
    },
    margin: "20px 0",
    fontWeight: 500,
  },
  price: {
    color: "#245E2E",
    fontSize: "25px",
    lineHeight: "40px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    background: "#245E2E",
    color: "#fff",
    fontWeight: "600 !important",
    transition: "0.3s ease",
    fontSize: "16px",
    lineHeight: "26px",
    cursor: "pointer",
    border: "2px solid #245E2E",
    letterSpacing: "1.5px",
    padding: "8px 15px",
    borderRadius: "8px",

    _hover: {
      background: "#fff",
      color: "#245E2E",
      border: "2px solid #245E2E",
      cursor: "pointer",
      transition: "0.3s ease",
      letterSpacing: "1.5px",
      transform: "scale(1.02)",
    },
  },
};
