import { Facebook, Twitter, Instagram, Github } from "@icons";
import { NavLink } from "react-router-dom";

export default () => {
   return (
      <section className="px-5 lg:px-0 py-12 lg:py-24 mt-16 lg:mt-24 mb-2 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700 bg-gray-50 rounded-3xl">
         <ul className="grid grid-cols-2 lg:flex items-center gap-6 lg:gap-x-12 text-sm justify-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-to-read">Pages to Read</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/contact" className="col-span-2">
               Contact
            </NavLink>
         </ul>

         <div className="flex items-center gap-x-10 text-gray-400">
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
         </div>

         <small className="text-gray-500">
            ©2024 Arcadia.com. All rights reserved.
         </small>
      </section>
   );
};
