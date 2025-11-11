import React, { useEffect, useState } from "react";
import { createUUID } from "./utils";

import toy1 from "../public/images/toys/toy1.jpg";
import toy2 from "../public/images/toys/toy2.jpg";

const list = [
  {
    img: toy1,
    number: 12,
  },
  {
    img: toy2,
    number: 12,
  },
  {
    img: "./images/toys/toy3.jpg",
    number: 12,
  },
  {
    img: "./images/toys/toy4.jpg",
    number: 10,
  },
  {
    img: "./images/toys/toy5.jpg",
    number: 10,
  },
  {
    img: "./images/toys/toy6.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy7.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy8.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy9.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy10.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy11.jpg",
    number: 69,
  },
  {
    img: "./images/toys/toy12.jpg",
    number: 75,
  },
  {
    img: "./images/toys/toy13.jpg",
    number: 99,
  },
  {
    img: "./images/toys/toy14.jpg",
    number: 99,
  },
  {
    img: "./images/toys/toy15.jpg",
    number: 79,
  },
  {
    img: "./images/toys/toy16.jpg",
    number: 99,
  },
  {
    img: "./images/toys/toy17.jpg",
    number: 79,
  },
  {
    img: "./images/toys/toy18.jpg",
    number: 79,
  },
  {
    img: "./images/toys/toy19.jpg",
    number: 9,
  },
  {
    img: "./images/toys/toy20.jpg",
    number: 9,
  },
  {
    img: "./images/toys/toy21.jpg",
    number: 8,
  },
  {
    img: "./images/toys/toy22.jpg",
    number: 9,
  },
  {
    img: "./images/toys/toy23.jpg",
    number: 9,
  },
  {
    img: "./images/toys/toy24.jpg",
    number: 8,
  },
  {
    img: "./images/toys/toy25.jpg",
    number: 7,
  },
  {
    img: "./images/toys/toy26.jpg",
    number: 7,
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
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const initList = () => {
      let arr = [];
      list
        .sort((a, b) => a.number - b.number)
        .map((item) => {
          item.uid = createUUID();
          arr.push(item);
        });

      setLists(arr);
    };

    initList();
  }, []);
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
        {lists.map((infos) => {
          return <CardItem key={infos.uid} infos={infos} />;
        })}
      </div>
    </>
  );
};

export default Toys;
