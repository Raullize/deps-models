"use client";
import React from "react";
import FlowingMenu from "./ui/FlowingMenu";
import { FaPalette, FaRocket, FaChartLine, FaLightbulb } from "react-icons/fa";

const DepsModels = () => {
  const menuItems = [
    {
      link: "#design",
      text: "Design",
      icon: FaPalette
    },
    {
      link: "#eficiencia",
      text: "Eficiência",
      icon: FaRocket
    },
    {
      link: "#performance",
      text: "Performance",
      icon: FaChartLine
    },
    {
      link: "#solucao",
      text: "Solução",
      icon: FaLightbulb
    }
  ];

  return (
    <section className="h-[60vh] bg-gray-900">
      <div className="h-full">
        <FlowingMenu items={menuItems} />
      </div>
    </section>
  );
};

export default DepsModels;