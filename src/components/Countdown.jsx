"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-10-31");

const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-barrioprimary"
      date={endingDate}
    />
  );
};

export default CountDown;
