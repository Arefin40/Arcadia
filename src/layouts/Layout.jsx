import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

export default () => {
   return (
      <>
         <Toaster />
         <Header />

         <main className="px-5 lg:px-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <Outlet />
         </main>

         <Footer />
      </>
   );
};
