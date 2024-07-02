export default () => {
   return (
      <>
         <section className="bg-white border rounded-lg grid lg:grid-cols-2">
            <div className="p-4 lg:p-8 lg:pt-32 w-full">
               <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900 text-center lg:text-left">
                  Contact Us
               </h2>
               <p className="mb-8 lg:mb-16 text-gray-500 sm:text-lg font-light text-center lg:text-left">
                  Connect with Us for Inquiries, Feedback, and Collaboration
                  Opportunities. Reach out to our team at your convenience.
               </p>
               <form action="#" className="space-y-8">
                  <div>
                     <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                     >
                        Your email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3"
                        placeholder="name@gmail.com"
                        required
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                     >
                        Subject
                     </label>
                     <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                        placeholder="Let us know how we can help you"
                        required
                     />
                  </div>
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                     >
                        Your message
                     </label>
                     <textarea
                        id="message"
                        rows="6"
                        className="block p-3 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500"
                        placeholder="Leave a comment..."
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="py-3 px-5 text-sm font-semibold text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
                  >
                     Send message
                  </button>
               </form>
            </div>

            <img
               src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
               className="w-full max-w-full lg:h-full sm:h-80 object-cover rounded-lg lg:rounded-l-none"
            />
         </section>

         <section className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8">
               <div>
                  <h2 className="text-3xl font-bold text-gray-800 text-center lg:text-left">
                     Get in touch
                  </h2>
                  <p className="mt-4 leading-7 text-center lg:text-left">
                     Connect with Us for Inquiries. Reach out to our team at
                     your convenience.
                  </p>
               </div>
               <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                     <h3 className="text-base font-semibold leading-7 text-gray-800">
                        Collaborate
                     </h3>
                     <dl className="mt-3 text-sm leading-6">
                        <div>
                           <dt className="hidden">Email</dt>
                           <dd>
                              <a
                                 className="font-semibold text-green-500"
                                 href="mailto:collaborate@example.com"
                              >
                                 collaborate@example.com
                              </a>
                           </dd>
                        </div>
                        <div className="mt-1">
                           <dt className="hidden">Phone number</dt>
                           <dd>+1 (555) 905-2345</dd>
                        </div>
                     </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                     <h3 className="text-base font-semibold leading-7 text-gray-800">
                        Press
                     </h3>
                     <dl className="mt-3 text-sm leading-6">
                        <div>
                           <dt className="hidden">Email</dt>
                           <dd>
                              <a
                                 className="font-semibold text-green-500"
                                 href="mailto:press@example.com"
                              >
                                 press@example.com
                              </a>
                           </dd>
                        </div>
                        <div className="mt-1">
                           <dt className="hidden">Phone number</dt>
                           <dd>+1 (555) 905-3456</dd>
                        </div>
                     </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                     <h3 className="text-base font-semibold leading-7 text-gray-800">
                        Join our team
                     </h3>
                     <dl className="mt-3 text-sm leading-6">
                        <div>
                           <dt className="hidden">Email</dt>
                           <dd>
                              <a
                                 className="font-semibold text-green-500"
                                 href="mailto:careers@example.com"
                              >
                                 careers@example.com
                              </a>
                           </dd>
                        </div>
                        <div className="mt-1">
                           <dt className="hidden">Phone number</dt>
                           <dd>+1 (555) 905-4567</dd>
                        </div>
                     </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                     <h3 className="text-base font-semibold leading-7 text-gray-800">
                        Say hello
                     </h3>
                     <dl className="mt-3 text-sm leading-6">
                        <div>
                           <dt className="hidden">Email</dt>
                           <dd>
                              <a
                                 className="font-semibold text-green-500"
                                 href="mailto:hello@example.com"
                              >
                                 hello@example.com
                              </a>
                           </dd>
                        </div>
                        <div className="mt-1">
                           <dt className="hidden">Phone number</dt>
                           <dd>+1 (555) 905-5678</dd>
                        </div>
                     </dl>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
