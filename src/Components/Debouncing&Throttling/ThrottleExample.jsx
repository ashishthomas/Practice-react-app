import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import "./style/Throttle-example.css"

const ThrottleExample = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPos(window.scrollY);
      console.log("Scroll Position:", window.scrollY);
    }, 200); // Runs at most every 200ms

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="throttle-example">
      <div className="throttle-example">
      <h2>Throttle Example</h2>
      <p className="scroll-pos">Scroll Position: {scrollPos} px</p>
      <div className="scroll-area">
        <div style={{ height: "1200px" }}></div>
      </div>
    </div>
    </div>
  );
};

export default ThrottleExample;
