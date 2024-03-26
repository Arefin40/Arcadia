import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default () => {
   return (
      <>
         <Header />

         <main className="px-5 lg:px-0 mx-auto container grid gap-y-16 lg:gap-y-24 text-center min-h-80 items-center justify-center">
            <Outlet />
         </main>

         <Footer />
      </>
   );
};
