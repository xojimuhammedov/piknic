import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import XTelegram from "../assets/svg/XTelegram";

import "yet-another-react-lightbox/styles.css";
import { Lightbox } from "yet-another-react-lightbox";

import LupaIcon from "../assets/lupa.jpg";
import { Fullscreen } from "yet-another-react-lightbox/plugins";

function AboutProduct() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const videoRef = useRef();

  useEffect(() => {
    axios
      .get(`https://picnic.propartnyor.uz/api/products/${id}`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (videoRef.current && products?.video_src) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Video cannot be played:", error);
      });
    }
  }, [products?.video_src]);

  if (loading) {
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#245E2E"
      size="xl"
    />;
  }
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
                <SwiperSlide style={{ position: "relative" }} key={index}>
                  <Image
                    {...css.image}
                    src={`https://picnic.propartnyor.uz/api/uploads/images/${item?.images_src}`}
                  />
                  <Image
                    onClick={() => setOpen(true)}
                    {...css.lupa}
                    src={LupaIcon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box>
            <Heading {...css.title}>{products?.title}</Heading>
            <Text
              {...css.text}
              dangerouslySetInnerHTML={{
                __html: products?.description,
              }}
            />
            <Heading {...css.price}>
              Narxi: <strong>{products?.price}</strong> so`m
            </Heading>
            <Link target="_blank" href="https://t.me/Piknicuzz" {...css.button}>
              <XTelegram height={26} width={26} /> Sotuvchi bilan bog`lanish
            </Link>
          </Box>
        </Flex>
        {/* <Flex> */}
        {products?.video_src && (
          <video className="course-video" ref={videoRef} autoPlay loop controls>
            <source
              src={`https://picnic.propartnyor.uz/api/uploads/images/${products?.video_src}`}
              type="video/mp4"
            />
          </video>
        )}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Fullscreen]}
          slides={products?.product_images?.map((item) => {
            return {
              src: `https://picnic.propartnyor.uz/api/uploads/images/${item?.images_src}`,
            };
          })}
        />
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
    color: "#318e40",
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
    color: "#000",
    lineHeight: "26px",
    width: {
      base: "100%",
      lg: "650px",
    },
    margin: "20px 0",
    fontWeight: 500,
  },
  price: {
    color: "#000",
    fontSize: "25px",
    lineHeight: "40px",
    // fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    background: "#318e40",
    color: "#fff",
    fontWeight: "600 !important",
    transition: "0.3s ease",
    fontSize: "16px",
    lineHeight: "26px",
    cursor: "pointer",
    border: "2px solid #318e40",
    letterSpacing: "1.5px",
    padding: "8px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "300px",
    justifyContent: "center",

    _hover: {
      textDecoration: "none",
    },
  },
  lupa: {
    width: "45px",
    height: "45px",
    position: "absolute",
    top: "2%",
    right: "3%",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
