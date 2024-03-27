import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BookCover from "@assets/book_cover.png";
import BookCoverLandscape from "@assets/book_cover_l.png";
import BookCard from "@components/BookCard";
import Button from "@components/Button";

export default () => {
   const books = useLoaderData();

   return (
      <>
         {/* Hero Section */}
         <section className="relative w-full p-12 lg:px-28 lg:py-20 grid lg:flex items-center gap-y-8 rounded-3xl bg-green-100 overflow-hidden">
            <div className="lg:mr-auto grid justify-items-center lg:justify-items-start gap-y-6 lg:gap-y-12">
               <h1 className="lg:max-w-2xl font-extrabold text-4xl lg:text-6xl text-gray-800 text-center lg:text-left leading-snug lg:leading-snug">
                  Books to freshen up your bookshelf
               </h1>
               <Button to="/listed-books">View The List</Button>
            </div>

            <img
               src={BookCover}
               alt="hero book cover"
               className="hidden lg:block max-h-[25rem]"
            />
            <img
               src={BookCoverLandscape}
               alt="hero book cover landscape"
               className="max-w-sm mx-auto w-full lg:hidden"
            />
         </section>

         {/* Books Section */}
         <section>
            <div className="hidden  gap-y-6 mb-12 text-center">
               <h1 className="font-extrabold text-4xl text-gray-800">Books</h1>

               <span className="text-lg max-w-screen-sm mx-auto text-gray-500">
                  Explore captivating reviews, comprehensive summaries, and
                  handpicked recommendations curated just for you.
               </span>
            </div>

            <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(23.5rem,_1fr))] gap-6">
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
