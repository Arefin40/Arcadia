import { Publisher, Pages, Calendar } from "@icons";
import { NavLink } from "react-router-dom";

export default ({ book }) => {
   return (
      <article className="p-4 flex gap-6 rounded-2xl border">
         <div className="w-60 px-12 py-8 rounded-2xl bg-gray-50">
            <img src={book.image} className="max-h-[11rem] max-w-full" />
         </div>

         <div className="w-full grid gap-y-5 content-start">
            <div className="grid gap-y-3">
               <h1 className="font-bold text-gray-800 text-2xl">
                  {book.bookName}
               </h1>
               <h2>
                  By :
                  <span className="text-gray-800 font-semibold">
                     {book.author}
                  </span>
               </h2>
            </div>

            <div className="flex items-center gap-x-4">
               <h4>Tags</h4>

               <div className="flex items-center gap-x-3 text-xs">
                  {book.tags.map((tag, index) => (
                     <div
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-green-50 text-green-600"
                     >
                        #{tag}
                     </div>
                  ))}
               </div>

               <div className="flex gap-x-2 items-center">
                  <Calendar />
                  <p>
                     <span>Year of Publishing:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.yearOfPublishing}
                     </span>
                  </p>
               </div>
            </div>

            <div className="flex items-center gap-x-5">
               <div className="flex gap-x-2 items-center">
                  <Publisher />
                  <p>
                     <span>Publisher:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.publisher}
                     </span>
                  </p>
               </div>

               <div className="flex gap-x-2 items-center">
                  <Pages />
                  <p>
                     <span>Pages:</span>
                     <span className="ml-2 text-gray-800 font-semibold">
                        {book.totalPages}
                     </span>
                  </p>
               </div>
            </div>

            <div className="pt-4 border-t flex gap-x-3">
               <div className="px-4 py-2 rounded-full bg-gray-100">
                  Category: Classic
               </div>
               <div className="px-4 py-2 rounded-full bg-gray-100">
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
