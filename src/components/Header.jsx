import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import AlStarImage from "../../assets/images/alstar4.png";
import "swiper/css";

function Header() {
  return (
    <Box>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Image
            {...css.image}
            src="https://www.windsorgreatpark.co.uk/wp-content/uploads/2023/07/shutterstock_1501433546-1536x1024.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            {...css.image}
            src="https://www.windsorgreatpark.co.uk/wp-content/uploads/2023/07/shutterstock_1501433546-1536x1024.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: "100%",
    height: {
      xl: "600px",
      lg: "500px",
      md: "450px",
      sm: "430px",
      base: "400px",
    },
    objectFit: "cover",
  },
};
