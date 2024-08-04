// מייבא את ספריית React ואת ה-Hooks הדרושים
import React, { useEffect, useRef } from "react";

// מייבא את ספריית gsap לאנימציות
import { gsap } from "gsap";

// מגדיר את הפונקציה הראשית של האפליקציה
export default function App() {
  // יוצר רפרנס לאלמנט ה-DOM שישמש לאנימציה
  const elementRef = useRef(null);

  // הוק משתמש ב-useEffect להרצת קוד לאחר טעינת הרכיב
  useEffect(() => {
    // מגדיר אנימציה עם gsap מהמצב ההתחלתי למצב הסופי
    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: -50 }, // מצב התחלתי: אטימות 0 ו-50 פיקסלים למעלה
      { opacity: 1, y: 0, duration: 1.5 } // מצב סופי: אטימות 1 וחזרה למיקום המקורי במשך 1.5 שניות
    );
  }, []); // מערך תלות ריק כך שהאנימציה תפעל רק פעם אחת לאחר הטעינה

  // מחזיר את מבנה ה-JSX של הרכיב
  return (
    // מגדיר את קונטיינר היישום עם מחלקות Tailwind
    <div className="App p-2 content-start items-center height-screen">
      {/* מגדיר את האלמנט עם רפרנס לאנימציה ומחלקות Tailwind */}
      <div
        ref={elementRef}
        className="w-[20%] p-4 bg-blue-700 border border-gray-300 rounded-md"
      >
        {/* טקסט שיוצג בתוך האלמנט */}
        Animate me on page load!
      </div>
    </div>
  );
}
