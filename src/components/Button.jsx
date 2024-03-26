import { NavLink } from "react-router-dom";

export default ({
   size = "px-6 py-3",
   to,
   children,
   onClick,
   className = "bg-green-500 text-white",
}) => {
   if (to) {
      return (
         <NavLink
            to={to}
            className={`${size} inline-flex items-center rounded-xl font-semibold transform transition-all active:scale-95 ${className}`}
         >
            {children}
         </NavLink>
      );
   } else {
      return (
         <button
            onClick={onClick}
            className={`${size} inline-flex items-center rounded-xl font-semibold transform transition-all active:scale-95 ${className}`}
         >
            {children}
         </button>
      );
   }
};
