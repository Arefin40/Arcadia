import { Publisher, Pages, Calendar } from "@icons";
import { NavLink } from "react-router-dom";

export default ({ book }) => {
   return (
      <article className="p-4 grid gap-y-4 lg:flex gap-6 rounded-2xl border">
         <div className="lg:w-60 py-4 lg:px-12 lg:py-8 rounded-2xl bg-gray-50 flex justify-center">
            <img src={book.image} className="max-h-[11rem] max-w-full" />
         </div>

         <div className="w-full grid gap-y-3 lg:gap-y-5 content-start">
            <div className="grid gap-y-1.5 lg:gap-y-3">
               <h1 className="font-bold text-gray-800 text-xl lg:text-2xl">
                  {book.bookName}
               </h1>
               <h2>
                  By :
                  <span className="ml-2 text-gray-800 font-semibold">
                     {book.author}
                  </span>
               </h2>
            </div>

            <div className="grid lg:flex items-center gap-y-4 gap-x-4">
               <div className="flex items-center gap-x-4">
                  <h4>Tags</h4>

                  <div className="flex items-center gap-x-3 gap-y-1 text-sm sm:text-base flex-wrap">
                     {book.tags.map((tag, index) => (
                        <div
                           key={index}
                           className="px-3 py-1.5 rounded-full bg-green-50 text-green-600"
                        >
                           #{tag}
                        </div>
                     ))}
                  </div>
               </div>

               <div className="flex gap-x-2 items-center flex-wrap gap-y-1">
                  <Calendar />
                  <p>
                     <span>Year of Publishing:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.yearOfPublishing}
                     </span>
                  </p>
               </div>
            </div>

            <div className="grid gap-y-4 lg:flex items-center gap-x-5">
               <div className="flex gap-x-2 items-center flex-wrap gap-y-1">
                  <Publisher />
                  <p>
                     <span>Publisher:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.publisher}
                     </span>
                  </p>
               </div>

               <div className="flex gap-x-2 items-center flex-wrap gap-y-1">
                  <Pages />
                  <p>
                     <span>Pages:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.totalPages}
                     </span>
                  </p>
               </div>
            </div>

            <div className="pt-4 border-t flex gap-x-3 flex-wrap gap-y-3 justify-center sm:justify-start text-sm sm:text-base">
               <div className="px-4 py-2 rounded-full bg-sky-100 text-sky-500">
                  Category: Classic
               </div>
               <div className="px-4 py-2 rounded-full bg-orange-100 text-orange-500">
                  Rating: {book.rating}
               </div>
               <NavLink
                  to={`/book/${book.bookId}`}
                  className="px-4 py-2 rounded-full bg-green-500 text-white transform transition-all active:scale-95"
               >
                  View Details
               </NavLink>
            </div>
         </div>
      </article>
   );
};
