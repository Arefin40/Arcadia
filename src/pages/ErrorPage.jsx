import BG404 from "@assets/404.svg";
import { NavLink } from "react-router-dom";

export default () => {
   return (
      <section className="container mx-auto px-5 lg:px-0 grid justify-items-center content-center text-center h-screen">
         <img
            src={BG404}
            alt="404 background image"
            className="max-w-screen-sm max-h-full"
         />

         <div className="grid justify-items-center gap-y-5">
            <h1 className="font-extrabold text-5xl lg:text-6xl text-[#253239]">
               Opps!
            </h1>
            <p className="px-3">
               Looks like we took a wrong turn! Home is just a click away. Let's
               go back.
            </p>

            <NavLink
               to="/"
               className="mt-5 px-6 py-3 rounded-full bg-green-500 text-white text-lg"
            >
               Go to Home
            </NavLink>
         </div>
      </section>
   );
};
