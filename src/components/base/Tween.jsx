import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import star from "../img/star.png";

// 2. השתמש ב-'useRef' כדי ליצור הפניה לרכיב ה-DOM שברצונך להנפשה.

function Tween() {
  const starRef = useRef(null);

  //   3. השתמש ב-'useEffect' כדי להפעיל את האנימציה לאחר שהרכיב נטען.
  useEffect(() => {
    gsap.to(starRef.current, { x: 400, y: 400 });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <img ref={starRef} src={star} alt="Star" className="w-32 h-32" />
    </div>
  );
}

export default Tween;