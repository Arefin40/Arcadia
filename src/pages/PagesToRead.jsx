import { getLocalStorageData } from "@utils/localStorageData";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts"; //prettier-ignore

const colors = ["#0088FE","#00C49F","#FFBB28","red","#2dd4bf","#FF8042","#f9a8d4","#22d3ee","#6366f1"]; //prettier-ignore

const getPath = (x, y, width, height) => {
   return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
   },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
   }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
   const { fill, x, y, width, height } = props;
   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomTooltip = ({ payload, label, active }) => {
   if (active) {
      return (
         <div className="min-w-60 bg-white p-4 rounded-md shadow-lg shadow-gray-300">
            <p className="font-bold text-gray-800">{`${label}`}</p>
            <p>
               <span>Pages: </span>
               <span className="ml-1 font-bold text-gray-600">{`${payload[0].value}`}</span>
            </p>
         </div>
      );
   }
   return null;
};

export default () => {
   const books = useLoaderData();
   const readlistIDs = getLocalStorageData("readlist");
   const readlist = books.filter(({ bookId }) => readlistIDs.includes(bookId));

   return (
      <section className="mt-1 lg:mt-12 flex justify-center w-full h-full max-h-[32rem] border">
         <ResponsiveContainer width="100%">
            <BarChart
               data={readlist}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="bookName" className="hidden" />
               <YAxis />
               <Tooltip content={<CustomTooltip />} />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                  isAnimationActive={false}
               >
                  {readlist.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
               </Bar>
            </BarChart>
         </ResponsiveContainer>
      </section>
   );
};
