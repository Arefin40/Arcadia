import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "@utils";
import Arrow from "@icons/Arrow";
import Tabs from "@components/Tabs";
import BookListItem from "@components/BookListItem";

export default () => {
   const [activeTab, setActiveTab] = useState("Read Books");
   const [sortBy, setSortBy] = useState("");
   const books = useLoaderData();

   const readlistIDs = getLocalStorageData("readlist");
   const wishlistIDs = getLocalStorageData("wishlist");
   const readlist = books.filter(({ bookId }) => readlistIDs.includes(bookId));
   const wishlist = books.filter(({ bookId }) => wishlistIDs.includes(bookId));
   let booklist = activeTab === "Wishlist Books" ? wishlist : readlist;

   const sortlist = [
      { name: "Rating", key: "rating" },
      { name: "Number of pages", key: "totalPages" },
      { name: "Published Year", key: "yearOfPublishing" },
   ];

   const comparator = (key) => {
      if (key === "") return () => 0;
      return (a, b) => {
         if (a[key] > b[key]) return -1;
         else if (a[key] < b[key]) return 1;
         else return 0;
      };
   };
   booklist = booklist.sort(comparator(sortBy));

   return (
      <section className="lg:mt-12">
         <header>
            <div className="px-8 py-14 bg-green-50 text-3xl lg:text-5xl font-bold text-green-600 text-center uppercase rounded-lg">
               Listed Books
            </div>

            <div className="mt-8 lg:mt-12 grid lg:flex gap-y-4 justify-items-center">
               <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tabs={["Read Books", "Wishlist Books"]}
                  className="justify-center lg:justify-start order-2 sm:order-1"
               />

               <div className="w-full flex lg:border-b-2 items-center justify-center lg:justify-end order-1 sm:order-2">
                  <div className="inline-block relative group">
                     <button className="px-3 py-2 rounded-md border flex items-center gap-x-2 group-hover:bg-green-50 group-hover:border-green-300">
                        <span>Sory by</span>
                        <Arrow />
                     </button>

                     <ul className="hidden group-hover:block absolute lg:right-0 left-1/2 lg:left-auto py-1 bg-white border whitespace-nowrap rounded z-10 -translate-x-1/2 lg:translate-x-0">
                        {sortlist.map(({ name, key }) => (
                           <li
                              key={key}
                              onClick={() => setSortBy(key)}
                              className="px-4 py-1 hover:bg-green-500 hover:text-white cursor-default"
                           >
                              {name}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </header>

         <main className="py-12 grid gap-y-4 lg:gap-y-6">
            {booklist.map((book) => (
               <BookListItem key={book.bookId} book={book} />
            ))}
         </main>
      </section>
   );
};
