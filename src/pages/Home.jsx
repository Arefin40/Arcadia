import BookCover from "@assets/book_cover.png";
import Button from "@components/Button";

export default () => {
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
      </>
   );
};
