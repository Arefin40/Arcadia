import { useLoaderData } from "react-router-dom";

export default function Example() {
   const posts = useLoaderData();

   return (
      <div className="bg-white pt-6 sm:pt-16">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
               <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Book Reviews
               </h2>
               <p className="mt-2 sm:text-lg sm:leading-8 text-gray-600">
                  Explore all of our latest book review blogs
               </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
               {posts.map((post) => (
                  <article
                     key={post.id}
                     className="flex max-w-xl flex-col items-start justify-between"
                  >
                     <div className="relative w-full">
                        <img
                           src={post.thumbnail}
                           className="w-full aspect-video sm:aspect-[1.5/1] object-cover rounded-2xl"
                        />
                     </div>

                     <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time
                           dateTime={post.datetime}
                           className="text-gray-500"
                        >
                           {post.date}
                        </time>
                        <div className="flex gap-x-2">
                           {post.category.map((category) => (
                              <h4
                                 key={category}
                                 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                 {category}
                              </h4>
                           ))}
                        </div>
                     </div>
                     <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                           <span>
                              <span className="absolute inset-0" />
                              {post.title}
                           </span>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                           {post.description}
                        </p>
                     </div>
                     <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                           src={post.author.imageUrl}
                           alt=""
                           className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                           <p className="font-semibold text-gray-900">
                              <span>
                                 <span className="absolute inset-0" />
                                 {post.author.name}
                              </span>
                           </p>
                           <p className="text-gray-600">Editor</p>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </div>
   );
}
