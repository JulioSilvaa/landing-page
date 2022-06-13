import { StyledHeader, Nav, Logo } from "../Styles/Header.styled";
import { Container } from "./Container";
import { Flex } from "../Styles/Flex.styled";
import { Button } from "../Styles/Button.Styled";
import logo from "../assets/3903482.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="" />
          <div>
            <Button>Contato</Button>
            <Button>Sobre nós</Button>
            <Button>Login</Button>
          </div>
        </Nav>

        <Flex>
          <div>
            <h1>Celebre conosco essa vitória!</h1>

            <p>
              Visite a nossa loja e concorra a brindes de inauguração. Planeje
              seu dia e venha conhecer as peças lindas dessa inauguração. O
              sonho se tornou realidade, brinde com a gente! O sucesso está
              aqui, celebre conosco!
            </p>
          </div>
          <>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={"true"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
