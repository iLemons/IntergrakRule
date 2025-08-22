import React from "react";

const list = [
  {
    uid: 1,
    img: "/public/images/toys/toy1.jpg",
    number: 12,
  },
  {
    uid: 2,
    img: "/public/images/toys/toy2.jpg",
    number: 12,
  },
  {
    uid: 3,
    img: "/public/images/toys/toy3.jpg",
    number: 12,
  },
  {
    uid: 4,
    img: "/public/images/toys/toy4.jpg",
    number: 10,
  },
  {
    uid: 5,
    img: "/public/images/toys/toy5.jpg",
    number: 10,
  },
  {
    uid: 6,
    img: "/public/images/toys/toy6.jpg",
    number: 69,
  },
  {
    uid: 7,
    img: "/public/images/toys/toy7.jpg",
    number: 69,
  },
  {
    uid: 8,
    img: "/public/images/toys/toy8.jpg",
    number: 69,
  },
  {
    uid: 9,
    img: "/public/images/toys/toy9.jpg",
    number: 69,
  },
  {
    uid: 10,
    img: "/public/images/toys/toy10.jpg",
    number: 69,
  },
  {
    uid: 11,
    img: "/public/images/toys/toy11.jpg",
    number: 69,
  },
  {
    uid: 12,
    img: "/public/images/toys/toy12.jpg",
    number: 75,
  },
  {
    uid: 13,
    img: "/public/images/toys/toy13.jpg",
    number: 99,
  },
  {
    uid: 14,
    img: "/public/images/toys/toy14.jpg",
    number: 99,
  },
  {
    uid: 15,
    img: "/public/images/toys/toy15.jpg",
    number: 79,
  },
  {
    uid: 16,
    img: "/public/images/toys/toy16.jpg",
    number: 99,
  },
  {
    uid: 17,
    img: "/public/images/toys/toy17.jpg",
    number: 79,
  },
  {
    uid: 18,
    img: "/public/images/toys/toy18.jpg",
    number: 79,
  },
];

const CardItem = ({ infos }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          fontSize: 0,
          position: "relative",
          borderRadius: 8,
          overflow: "hidden",
          backgroundImage: `url(${infos.img})`,
          backgroundSize: "112%",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 0,
            paddingTop: "137.3148%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            bottom: "14%",
            right: "5%",
            width: "24%",
            backgroundImage: "url(./images/rules/integral.png)",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 0,
              paddingTop: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "53%",
                  transform: "translateX(-50%) translateY(-80%)",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#c80a50",
                  textShadow: "0px 1px 2px #fff,1px 2px 3px #fff;",
                }}
              >
                {infos.number * 3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Toys = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          padding: 20,
          display: "grid",
          columnGap: 20,
          rowGap: 20,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          overflow: "overlay",
        }}
      >
        {list.map((infos) => {
          return <CardItem key={infos.uid} infos={infos} />;
        })}
      </div>
    </>
  );
};

export default Toys;
