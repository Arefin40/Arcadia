export default ({
   activeTab,
   setActiveTab,
   tabs,
   className = "justify-center",
}) => {
   return (
      <div className={`relative w-full flex ${className}`}>
         <div className="relative flex lg:text-lg font-medium flex-shrink-0 z-10">
            {tabs.map((tab) => (
               <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 rounded-t-md border-2 ${
                     activeTab === tab
                        ? "border-b-white text-green-500"
                        : "border-transparent"
                  }`}
               >
                  {tab}
               </button>
            ))}
         </div>
         <div className="absolute border-b-2 inset-x-0 bottom-0 z-0" />
      </div>
   );
};
