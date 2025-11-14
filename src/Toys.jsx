import React, { useEffect, useState } from "react";
import { createUUID } from "./utils";

const list = [
  {
    img: "./images/toys/toy1.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 30,
  },
  {
    img: "./images/toys/toy2.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy3.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy4.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy5.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy6.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy7.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy8.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy9.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy10.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy11.jpg",
    code: "./images/toys/toy1_11_code.png",
    number: 45,
  },
  {
    img: "./images/toys/toy12.jpg",
    code: "./images/toys/toy12_16_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy13.jpg",
    code: "./images/toys/toy12_16_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy14.jpg",
    code: "./images/toys/toy12_16_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy15.jpg",
    code: "./images/toys/toy12_16_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy16.jpg",
    code: "./images/toys/toy12_16_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy17.jpg",
    code: "./images/toys/toy17_19_code.png",
    number: 69,
  },
  {
    img: "./images/toys/toy18.jpg",
    code: "./images/toys/toy17_19_code.png",
    number: 69,
  },
  {
    img: "./images/toys/toy19.jpg",
    code: "./images/toys/toy17_19_code.png",
    number: 69,
  },
  {
    img: "./images/toys/toy20.jpg",
    code: "./images/toys/toy20_23_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy21.jpg",
    code: "./images/toys/toy20_23_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy22.jpg",
    code: "./images/toys/toy20_23_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy23.jpg",
    code: "./images/toys/toy20_23_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy24.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy25.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy26.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy27.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy28.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy29.jpg",
    code: "./images/toys/toy24_29_code.png",
    number: 11,
  },
  {
    img: "./images/toys/toy30.jpg",
    code: "./images/toys/toy30_33_code.png",
    number: 68,
  },
  {
    img: "./images/toys/toy31.jpg",
    code: "./images/toys/toy30_33_code.png",
    number: 19,
  },
  {
    img: "./images/toys/toy32.jpg",
    code: "./images/toys/toy30_33_code.png",
    number: 52,
  },
  {
    img: "./images/toys/toy33.jpg",
    code: "./images/toys/toy30_33_code.png",
    number: 52,
  },
  {
    img: "./images/toys/toy34.jpg",
    code: "./images/toys/toy34_38_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy35.jpg",
    code: "./images/toys/toy34_38_code.png",
    number: 13,
  },
  {
    img: "./images/toys/toy36.jpg",
    code: "./images/toys/toy34_38_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy37.jpg",
    code: "./images/toys/toy34_38_code.png",
    number: 15,
  },
  {
    img: "./images/toys/toy38.jpg",
    code: "./images/toys/toy34_38_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy39.jpg",
    code: "./images/toys/toy39_40_code.png",
    number: 27,
  },
  {
    img: "./images/toys/toy40.jpg",
    code: "./images/toys/toy39_40_code.png",
    number: 27,
  },
  {
    img: "./images/toys/toy41.jpg",
    code: "./images/toys/toy41_45_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy42.jpg",
    code: "./images/toys/toy41_45_code.png",
    number: 24,
  },
  {
    img: "./images/toys/toy43.jpg",
    code: "./images/toys/toy41_45_code.png",
    number: 10,
  },
  {
    img: "./images/toys/toy44.jpg",
    code: "./images/toys/toy41_45_code.png",
    number: 13,
  },
  {
    img: "./images/toys/toy45.jpg",
    code: "./images/toys/toy41_45_code.png",
    number: 12,
  },
  {
    img: "./images/toys/toy46.jpg",
    code: "./images/toys/toy46_code.png",
    number: 34,
  },
  {
    img: "./images/toys/toy47.jpg",
    code: "./images/toys/toy47_50_code.png",
    number: 7,
  },
  {
    img: "./images/toys/toy48.jpg",
    code: "./images/toys/toy47_50_code.png",
    number: 7,
  },
  {
    img: "./images/toys/toy49.jpg",
    code: "./images/toys/toy47_50_code.png",
    number: 7,
  },
  {
    img: "./images/toys/toy50.jpg",
    code: "./images/toys/toy47_50_code.png",
    number: 7,
  },
  {
    img: "./images/toys/toy51.jpg",
    code: "./images/toys/toy51_54_code.png",
    number: 20,
  },
  {
    img: "./images/toys/toy52.jpg",
    code: "./images/toys/toy51_54_code.png",
    number: 19,
  },
  {
    img: "./images/toys/toy53.jpg",
    code: "./images/toys/toy51_54_code.png",
    number: 25,
  },
  {
    img: "./images/toys/toy54.jpg",
    code: "./images/toys/toy51_54_code.png",
    number: 21,
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
          borderRadius: 5,
          overflow: "hidden",
          boxShadow:
            "0 1px 2px -2px rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.12), 0 5px 12px 4px rgba(0,0,0,0.09)",
        }}
      >
        <div
          style={{
            padding: 8,
          }}
        >
          <img
            style={{
              width: "100%",
              border: "1px solid #ddd",
            }}
            src={infos.img}
            alt=""
          />
        </div>
        <div
          style={{
            padding: 15,
            display: "flex",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: 80,
              }}
              src={infos.code}
              alt=""
            />
          </div>

          <div
            style={{
              flex: 1,
              position: "relative",
              height: 100,
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 0,
                width: "40%",
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
        </div>
        {/* <div
          style={{
            width: "100%",
            height: 0,
            paddingTop: "137.3148%",
          }}
        ></div> */}
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
          padding: 15,
          display: "grid",
          columnGap: 20,
          rowGap: 20,
          gridTemplateColumns: "1fr",
          overflow: "overlay",
        }}
      >
        {lists.map((infos) => {
          return <CardItem key={infos.uid} infos={infos} />;
        })}
        <div
          style={{
            fontSize: 14,
            color: "#666",
            textAlign: "center",
          }}
        >
          没有更多了
        </div>
      </div>
    </>
  );
};

export default Toys;
