import { Menu } from "@icons";
import { NavLink } from "react-router-dom";
import Button from "@components/Button";

export default () => {
   return (
      <header className="w-full fixed inset-x-0 top-0 lg:static z-10">
         <section className="px-5 lg:px-0 h-16 lg:h-auto lg:py-8 mx-auto container flex items-center justify-between bg-white">
            <NavLink className="w-full lg:mr-auto flex items-center text-2xl lg:text-3xl font-extrabold text-gray-800">
               Arcadia
            </NavLink>

            <div className="flex items-center lg:justify-center flex-shrink-0">
               <button className="lg:hidden">
                  <Menu />
               </button>

               <nav className="hidden lg:block w-full bg-white">
                  <ul className="w-full p-6 lg:p-0 grid lg:flex items-center gap-x-12 gap-y-6 font-semibold text-gray-600 flex-shrink-0">
                     <li>
                        <NavLink to="/" className="hover:text-green-600">
                           Home
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/listed-books"
                           className="hover:text-green-600"
                        >
                           Listed Books
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/pages-to-read"
                           className="hover:text-green-600"
                        >
                           Pages to Read
                        </NavLink>
                     </li>
                  </ul>
               </nav>
            </div>

            <div className="w-full lg:ml-auto hidden lg:flex items-center justify-end gap-x-3">
               <Button>Sign in</Button>
               <Button className="bg-teal-500 text-white">Sign up</Button>
            </div>
         </section>
      </header>
   );
};
