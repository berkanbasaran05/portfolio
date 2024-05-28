import {
  ArrowUpIcon,
  ChevronDoubleUpIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const cardItems = [
  {
    id: 1,
    player_name: "Lebron James",
    vs: "LAK vs BOS",
    date: "Sun 9:30pm",
    point: 21.5,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 2,
    player_name: "Stephen Curry",
    vs: "GSW vs LAL",
    date: "Mon 10:00pm",
    point: 30.1,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 3,
    player_name: "Kevin Durant",
    vs: "BKN vs MIA",
    date: "Tue 8:00pm",
    point: 29.7,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 4,
    player_name: "Giannis Antetokounmpo",
    vs: "MIL vs CHI",
    date: "Wed 7:30pm",
    point: 28.4,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 5,
    player_name: "James Harden",
    vs: "PHI vs TOR",
    date: "Thu 8:00pm",
    point: 26.1,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 6,
    player_name: "Luka Doncic",
    vs: "DAL vs HOU",
    date: "Fri 9:00pm",
    point: 27.4,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 7,
    player_name: "Kawhi Leonard",
    vs: "LAC vs DEN",
    date: "Sat 10:30pm",
    point: 24.8,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
  {
    id: 8,
    player_name: "Joel Embiid",
    vs: "PHI vs BKN",
    date: "Sun 6:00pm",
    point: 30.6,
    team_image: "/assets/nba.png",
    player_image:
      "https://s3-alpha-sig.figma.com/img/5e93/a039/fe2371aa4fc463f67776037ab8eb3039?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfZp22o5BBQB7jHPzLGXWGOAJdxDpaYtvLUmC2yDsXUhwL7SmHZRdm3-1OyB7v7w7BLa20sL2XVnG4ZPup0nqOvX4K-xm4xJYhlNUsK3ShrMIxuMkArjIUmSgPdVRrcqB61~8HMKnrahcFyKJmdgHW4TQ3DrDDjbrXajgZm~tbAbrOZ06pPyCx5TUTMo9f0hMnAvZHpV~Ucm1HXhaT7n1i8sMNgIdM7wJ6Q82ozl7lOEN2TY3cOku2zrDFYpuUoyKSP0oydZC~JG9bBoFV09zcFOedkvpBT-wmyYDdZdksjM9CxqpYOjTvvKEyX82J5KBudxgNER7Tii1iNw55fgqw__",
  },
];

const Demo = (props: Props) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [openCard, setOpenCard] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState<{
    [key: number]: "under" | "over" | null;
  }>({});

  const toggleCardSelection = (id: number) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(id)
        ? prevSelectedCards.filter((cardId) => cardId !== id)
        : [...prevSelectedCards, id]
    );
  };

  const handleButtonClick = (id: number, choice: "under" | "over") => {
    setSelectedButtons((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [id]: prevSelectedButtons[id] === choice ? null : choice,
    }));
  };

  return (
    <section className="bg-black flex w-full h-full py-12 justify-center px-4 items-center">
      <div
        className={`bg-[#1a1a2a] max-w-6xl flex flex-col space-y-8  w-full p-8 rounded-lg ${
          openCard ? "h-full" : "h-24"
        }`}
      >
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center justify-center space-x-2">
            <Image
              width={20}
              height={20}
              src={"/assets/flash.svg"}
              alt="lockz"
            ></Image>
            <h2 className="font-bebas mt-1 text-[24px]">TODAYS SPECIALS</h2>
          </div>
          <button
            onClick={() => {
              setOpenCard(!openCard);
            }}
          >
            {openCard ? (
              <Image
                width={11}
                height={6}
                src={"/assets/upp.svg"}
                alt="lockz"
              ></Image>
            ) : (
              <Image
                width={11}
                height={6}
                src={"/assets/down.svg"}
                alt="lockz"
              ></Image>
            )}
          </button>
        </div>
        {openCard && (
          <div
            className={`grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-4 h-full`}
          >
            {cardItems.map((e) => (
              <div
                key={e.id}
                className={`shadow-xl border border-[#161621] relative mx-auto bg-[#151521] px-4 w-[200px] h-[285px] flex flex-col items-center rounded-3xl`}
                onClick={() => toggleCardSelection(e.id)}
              >
                <div className="flex items-center justify-center w-full h-1/2">
                  <Image
                    width={25}
                    height={25}
                    className="rounded-3xl absolute z-50 left-4 top-6"
                    src={`${e.team_image}`}
                    alt="lockz"
                  ></Image>
                  <Image
                    width={200}
                    height={50}
                    className="rounded-3xl absolute top-0"
                    src={"/assets/bg.svg"}
                    alt="lockz"
                  ></Image>
                  <Image
                    width={159}
                    height={110}
                    className="absolute flex top-0"
                    src={e.player_image}
                    alt="lockz"
                  ></Image>
                  <Image
                    width={25}
                    height={25}
                    className="rounded-3xl absolute z-50 right-4 top-4"
                    src={"/assets/watch.svg"}
                    alt="lockz"
                  ></Image>
                </div>
                <div className="flex flex-col font-inter space-y-2 items-center">
                  <h1 className="font-inter text-[16px] font-semibold">
                    {e.player_name}
                  </h1>

                  <span className="text-[13px] text-[#bbbbbf]">
                    {e.vs} - {e.date}
                  </span>
                  <img src="/assets/line.svg" className="w-full" />
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[18px] font-bold">{e.point}</h1>
                    <span className="text-[13px] text-white">
                      Points+Rebounds
                    </span>
                  </div>
                </div>
                <div className="flex flex-row space-x-1 mb-2 text-[#bebec2] font-semibold mt-1">
                  <button
                    className={`rounded-l-xl w-[87px] font-inter h-[37px] ${
                      selectedButtons[e.id] === "under"
                        ? "bg-blue-500 text-black"
                        : "bg-[#262634]"
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleButtonClick(e.id, "under");
                    }}
                  >
                    Under
                  </button>
                  <button
                    className={`rounded-r-xl w-[87px] font-inter h-[37px] ${
                      selectedButtons[e.id] === "over"
                        ? "bg-blue-500 text-black"
                        : "bg-[#262634]"
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleButtonClick(e.id, "over");
                    }}
                  >
                    Over
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
