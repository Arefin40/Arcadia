import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BookCover from "@assets/book_cover.png";
import BookCard from "@components/BookCard";
import Button from "@components/Button";

export default () => {
   const books = useLoaderData();

   return (
      <>
         {/* Hero Section */}
         <section className="px-28 py-20 flex items-center rounded-3xl bg-green-100">
            <div className="lg:mr-auto space-y-12">
               <h1 className="max-w-2xl font-extrabold text-6xl text-gray-800 leading-snug">
                  Books to freshen up your bookshelf
               </h1>
               <Button to="/listed-books">View The List</Button>
            </div>

            <img
               src={BookCover}
               alt="hero book cover"
               className="max-h-[25rem] max-w-full"
            />
         </section>

         {/* Books Section */}
         <section>
            <div className="grid gap-y-6 mb-12 text-center">
               <h1 className="font-extrabold text-4xl text-gray-800">Books</h1>

               <span className="text-lg max-w-screen-sm mx-auto text-gray-500">
                  Explore captivating reviews, comprehensive summaries, and
                  handpicked recommendations curated just for you.
               </span>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(23.5rem,_1fr))] gap-6">
               {books.map((book) => (
                  <NavLink to={`/book/${book.bookId}`} key={book.bookId}>
                     <BookCard book={book} />
                  </NavLink>
               ))}
            </div>
         </section>
      </>
   );
};
