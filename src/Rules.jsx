import React from "react";

const list = [
  {
    uid: 1,
    title: "每天有两顿饭吃青菜",
    number: 1,
    img: "/public/images/rules/vegetables.png",
  },
  {
    uid: 2,
    title: "每天自己穿脱衣服袜子",
    number: 1,
    img: "/public/images/rules/clothes.png",
  },
  {
    uid: 3,
    title: "每天出门自己走路",
    number: 1,
    img: "/public/images/rules/walk.png",
  },
  {
    uid: 4,
    title: "10点前上床睡觉",
    number: 1,
    img: "/public/images/rules/sleep.png",
  },
  {
    uid: 5,
    title: "连续3次洗澡不拖沓",
    number: 1,
    img: "/public/images/rules/bath.png",
  },
  {
    uid: 6,
    title: "每天看书20分钟",
    number: 1,
    img: "/public/images/rules/read.png",
  },
  {
    uid: 7,
    title: "每天写一页字",
    number: 1,
    img: "/public/images/rules/write.png",
  },
  {
    uid: 8,
    title: "学会打篮球",
    number: 30,
    img: "/public/images/rules/basketball.png",
  },
  {
    uid: 9,
    title: "学会打羽毛球",
    number: 30,
    img: "/public/images/rules/badminton.png",
  },
  {
    uid: 10,
    title: "学会打乒乓球",
    number: 30,
    img: "/public/images/rules/pingpang.png",
  },
  {
    uid: 11,
    title: "学会跳绳",
    number: 30,
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
                textShadow: "0px 1px 2px #fff,1px 2px 3px #fff;",
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

export default Rules;
