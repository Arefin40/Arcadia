import { useState } from "react";
import { Menu } from "@icons";
import { NavLink } from "react-router-dom";
import Button from "@components/Button";

export default () => {
   const [active, setActive] = useState(false);
   const toggle = () => setActive(!active);
   const close = () => setActive(false);

   const routes = [
      {
         name: "Home",
         to: "/",
      },
      {
         name: "Listed Books",
         to: "/listed-books",
      },
      {
         name: "Pages to Read",
         to: "/pages-to-read",
      },
      {
         name: "Blogs",
         to: "/blogs",
      },
      {
         name: "Contact",
         to: "/contact",
      },
   ];

   return (
      <>
         <header className="w-full fixed inset-x-0 top-0 lg:static z-20 border-b lg:border-0">
            <section className="px-5 lg:px-0 h-16 lg:h-auto lg:py-8 mx-auto container flex items-center justify-between bg-white">
               <NavLink className="w-full lg:mr-auto flex items-center text-2xl lg:text-3xl font-extrabold text-gray-800">
                  Arcadia
               </NavLink>

               <div className="flex items-center lg:justify-center flex-shrink-0">
                  <button
                     onClick={toggle}
                     className="w-6 h-6 lg:hidden flex items-center justify-center"
                  >
                     <Menu />
                  </button>

                  <nav
                     className={`mt-px lg:mt-0 fixed left-0 right-16 top-16 bottom-0 lg:static lg:block lg:w-full bg-white transform transition-all lg:translate-x-0 z-20 ${
                        active ? "translate-x-0" : "-translate-x-full"
                     }`}
                  >
                     <ul className="w-full pt-12 lg:pt-0 grid justify-items-center text-xl lg:text-base lg:flex items-center gap-x-12 gap-y-6 font-semibold text-gray-600 flex-shrink-0">
                        {routes.map(({ name, to }) => (
                           <li key={to}>
                              <NavLink
                                 to={to}
                                 onClick={close}
                                 className="hover:text-green-600"
                              >
                                 {name}
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </div>

               <div
                  className={`fixed bottom-0 lg:w-full left-0 right-16 lg:static pb-12 lg:pb-0 lg:ml-auto flex flex-col lg:flex-row gap-3 items-center justify-center lg:justify-end bg-white z-20 transform transition-all lg:translate-x-0 ${
                     active ? "translate-x-0" : "-translate-x-full"
                  }`}
               >
                  <Button>Sign in</Button>
                  <Button className="bg-teal-500 text-white">Sign up</Button>
               </div>
            </section>
         </header>

         <div
            onClick={close}
            className={`fixed inset-x-0 top-16 bottom-0 bg-black/50 z-10 ${
               active ? "visible opacity-100" : "invisible opacity-0"
            } transition-all duration-200 lg:pointer-events-none`}
         />
      </>
   );
};
