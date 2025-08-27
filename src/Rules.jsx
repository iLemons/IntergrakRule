import React, { useEffect, useState } from "react";
import { createUUID } from "./utils";

const list = [
  {
    title: "一天有两顿饭吃青菜",
    number: 1,
    img: "/public/images/rules/vegetables.png",
  },
  {
    title: "自己穿脱衣服袜子",
    number: 1,
    img: "/public/images/rules/clothes.png",
  },
  {
    title: "出门自己走路",
    number: 1,
    img: "/public/images/rules/walk.png",
  },
  {
    title: "10点前上床睡觉",
    number: 1,
    img: "/public/images/rules/sleep.png",
  },
  {
    title: "连续3次洗澡不拖沓",
    number: 1,
    img: "/public/images/rules/bath.png",
  },
  {
    title: "一天看书20分钟",
    number: 1,
    img: "/public/images/rules/read.png",
  },
  {
    title: "一天写一页字",
    number: 1,
    img: "/public/images/rules/write.png",
  },
  {
    title: "一天只看两级动画片",
    number: 1,
    img: "/public/images/rules/tv.png",
  },
  {
    title: "打篮球15分钟",
    number: 2,
    img: "/public/images/rules/basketball.png",
  },
  {
    title: "打羽毛球15分钟",
    number: 2,
    img: "/public/images/rules/badminton.png",
  },
  {
    title: "打乒乓球15分钟",
    number: 2,
    img: "/public/images/rules/pingpang.png",
  },
  {
    title: "跳绳15分钟",
    number: 2,
    img: "/public/images/rules/skip.png",
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
        }}
      >
        <img style={{ width: "100%" }} src={infos.img} alt="" />
        <div
          style={{
            position: "absolute",
            width: "100%",
            // height: 40,
            left: 0,
            bottom: 0,
            fontSize: 20,
            padding: "8px 15px",
            backgroundColor: "rgba(0,0,0,0.65)",
            color: "#fff",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          {infos.title}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: 5,
            right: 5,
            width: 120,
            height: 120,
            backgroundImage: "url(./images/rules/integral.png)",
            backgroundSize: "100%",
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
                top: "50%",
                transform: "translateX(-50%) translateY(-80%)",
                fontSize: 26,
                fontWeight: 700,
                color: "#c80a50",
              }}
            >
              {infos.number}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Rules = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const initList = () => {
      let arr = [];
      list.map((item) => {
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

export default Rules;
