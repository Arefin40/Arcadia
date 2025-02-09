import { useState } from "react";

export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current`}
      >
         <path d="m14.199 12 9.345-9.345a1.553 1.553 0 0 0 0-2.199 1.553 1.553 0 0 0-2.198 0L12 9.801 2.655.456a1.553 1.553 0 0 0-2.199 0 1.553 1.553 0 0 0 0 2.199L9.801 12 .456 21.345a1.553 1.553 0 0 0 0 2.199 1.55 1.55 0 0 0 1.1.455 1.55 1.55 0 0 0 1.099-.455L12 14.199l9.345 9.345a1.55 1.55 0 0 0 1.1.455 1.553 1.553 0 0 0 1.1-2.654z" />
      </svg>
   );
};
