import Star from "@icons/Star";

export default ({ book }) => {
   return (
      <div className="p-6 space-y-6 border rounded-2xl">
         <div className="px-8 py-4 rounded-2xl bg-gray-50 h-60 flex justify-center items-center">
            <img src={book.image} className="max-h-full max-w-full shadow-xl" />
         </div>

         <div className="grid gap-y-2 lg:gap-y-4">
            <div className="flex items-center gap-x-3 gap-y-1 text-sm flex-wrap">
               {book.tags.map((tag, index) => (
                  <div
                     key={index}
                     className="px-3 py-1.5 rounded-full bg-green-50 text-green-600"
                  >
                     {tag}
                  </div>
               ))}
            </div>
            <h1 className="font-bold text-lg lg:text-2xl text-gray-800">
               {book.bookName}
            </h1>
            <p className="pb-5 border-b border-dashed">By : {book.author}</p>
            <div className="flex items-center justify-between">
               <p>{book.category}</p>
               <div className="flex items-center gap-x-2">
                  <span>{book.rating}</span>
                  <Star />
               </div>
            </div>
         </div>
      </div>
   );
};
