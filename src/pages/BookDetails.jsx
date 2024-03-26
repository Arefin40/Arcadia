import { useParams, useLoaderData } from "react-router-dom";
import Button from "@components/Button";

export default () => {
   const books = useLoaderData();
   const { id } = useParams();
   const book = books.find(({ bookId }) => bookId === id);

   return (
      <section className="mt-12 grid lg:grid-cols-2 gap-x-12 gap-y-6 content-start">
         <div className="rounded-2xl lg:px-32 lg:py-20 bg-gray-100">
            <img
               src={book.image}
               alt="book-image"
               className="max-w-full max-h-full"
            />
         </div>

         <div className="grid gap-y-6 content-start">
            <div>
               <h1 className="font-bold text-4xl text-gray-800">
                  {book.bookName}
               </h1>
               <h4 className="mt-4 text-lg font-medium">
                  By :{" "}
                  <span className="text-gray-800 font-semibold">
                     {book.author}
                  </span>
               </h4>
            </div>
            <p className="text-lg py-2.5 border-y">{book.category}</p>

            <p className="leading-loose">
               <span className="mr-3 font-bold text-gray-800">Review:</span>
               {book.review}
            </p>

            <div className="flex items-center gap-x-3">
               <h1 className="font-bold text-gray-800">Tag: </h1>

               {book.tags.map((tag, index) => (
                  <div
                     key={index}
                     className="px-3 py-1.5 rounded-full bg-green-50 text-green-600"
                  >
                     {tag}
                  </div>
               ))}
            </div>

            <div className="pt-6 space-y-3 border-t">
               <div className="grid grid-cols-[9rem_1fr] gap-x-16">
                  <span>Number of Pages:</span>
                  <span className="font-bold w-full">{book.totalPages}</span>
               </div>
               <div className="grid grid-cols-[9rem_1fr] gap-x-16">
                  <span>Publisher:</span>
                  <span className="font-bold w-full">{book.publisher}</span>
               </div>
               <div className="grid grid-cols-[9rem_1fr] gap-x-16">
                  <span>Year of Publishing:</span>
                  <span className="font-bold w-full">
                     {book.yearOfPublishing}
                  </span>
               </div>
               <div className="grid grid-cols-[9rem_1fr] gap-x-16">
                  <span>Rating:</span>
                  <span className="font-bold w-full">{book.rating}</span>
               </div>
            </div>

            <div className="mt-2 flex gap-x-4">
               <Button className="border-2 text-gray-800 hover:bg-gray-100">
                  Read
               </Button>
               <Button>Wishlist</Button>
            </div>
         </div>
      </section>
   );
};
