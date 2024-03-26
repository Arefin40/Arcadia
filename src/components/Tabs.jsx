export default ({ activeTab, setActiveTab, tabs }) => {
   return (
      <div className="flex justify-center text-lg flex-shrink-0">
         {tabs.map((tab) => (
            <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-4 py-3 border-2 border-gray-200 rounded-t-md  ${
                  activeTab === tab
                     ? "border-b-transparent text-green-500"
                     : "border-x-transparent border-t-transparent"
               }`}
            >
               {tab}
            </button>
         ))}
      </div>
   );
};
