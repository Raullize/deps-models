import React from "react";
import { gsap } from "gsap";

import { IconType } from "react-icons";

interface MenuItemProps {
  link: string;
  text: string;
  icon: IconType;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, icon: Icon }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  // Cores específicas para cada item DEPS (apenas no hover)
  const getItemColors = (text: string) => {
    switch (text) {
      case 'Design':
        return { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100', hover: 'hover:from-yellow-400 hover:to-yellow-500 hover:text-yellow-900' };
      case 'Eficiência':
        return { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100', hover: 'hover:from-red-400 hover:to-red-500 hover:text-red-900' };
      case 'Performance':
        return { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100', hover: 'hover:from-blue-400 hover:to-blue-500 hover:text-blue-900' };
      case 'Solução':
        return { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100', hover: 'hover:from-blue-600 hover:to-blue-700 hover:text-blue-100' };
      default:
        return { bg: 'from-gray-800 to-gray-900', text: 'text-gray-100', hover: 'hover:from-gray-500 hover:to-gray-600 hover:text-gray-900' };
    }
  };

  const colors = getItemColors(text);

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" }
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-gray-800 uppercase font-bold text-[3.5vh] leading-[1.2] px-[2vw] py-[1vh] tracking-wider drop-shadow-sm whitespace-nowrap">
          {text}
        </span>
        <div className="flex items-center justify-center w-[120px] h-[120px] my-[1em] mx-[3vw] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg transform hover:scale-110 transition-transform duration-300 flex-shrink-0">
          <Icon className="text-6xl text-gray-700" />
        </div>
        <div className="w-px h-[60px] bg-gradient-to-b from-transparent via-gray-400 to-transparent mx-[2vw] flex-shrink-0" />
      </React.Fragment>
    ));
  }, [text, Icon]);

  return (
    <div
      className={`flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_rgba(255,255,255,0.1)] bg-gradient-to-br ${colors.bg} ${colors.hover} transition-all duration-500 ease-out`}
      ref={itemRef}
    >
      <a
        className={`flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-bold ${colors.text} text-[4vh] tracking-wider transition-all duration-300 hover:scale-105 hover:tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50`}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10 drop-shadow-lg">{text}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none backdrop-blur-sm translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
