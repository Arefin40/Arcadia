export default ({ className = "w-5 h-5" }) => {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className={`${className} fill-current text-gray-500`}
         >
            <path d="M12 16.56c-.287 0-.573-.11-.792-.328l-6.88-6.88a1.12 1.12 0 1 1 1.585-1.584L12 13.855l6.087-6.087a1.12 1.12 0 0 1 1.585 1.585l-6.88 6.88a1.117 1.117 0 0 1-.792.327z" />
         </svg>
      </>
   );
};
