import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "@utils";
import Tabs from "@components/Tabs";
import BookListItem from "@components/BookListItem";

export default () => {
   const [activeTab, setActiveTab] = useState("Read Books");
   const books = useLoaderData();

   const readlistIDs = getLocalStorageData("readlist");
   const wishlistIDs = getLocalStorageData("wishlist");
   const readlist = books.filter(({ bookId }) => readlistIDs.includes(bookId));
   const wishlist = books.filter(({ bookId }) => wishlistIDs.includes(bookId));
   let booklist = activeTab === "Wishlist Books" ? wishlist : readlist;

   return (
      <section className="mt-12">
         <header>
            <div className="px-8 py-14 bg-green-50 text-4xl lg:text-5xl font-bold text-green-600 text-center uppercase rounded-lg">
               Listed Books
            </div>

            <div className="mt-12 flex">
               <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tabs={["Read Books", "Wishlist Books"]}
               />

               <div className="w-full flex border-b-2 items-center justify-end">
                  sort
               </div>
            </div>
         </header>

         <main className="py-12">
            {booklist.map((book) => (
               <BookListItem key={book.bookId} book={book} />
            ))}
         </main>
      </section>
   );
};
