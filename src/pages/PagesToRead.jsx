import { getLocalStorageData } from "@utils/localStorageData";
import { useLoaderData } from "react-router-dom";
import {
   BarChart,
   Bar,
   Cell,
   XAxis,
   YAxis,
   CartesianGrid,
   ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

export default () => {
   const books = useLoaderData();
   const readlistIDs = getLocalStorageData("readlist");
   const readlist = books.filter(({ bookId }) => readlistIDs.includes(bookId));

   return (
      <section className="mt-12 flex justify-center w-full h-full max-h-[32rem]">
         <ResponsiveContainer width="90%">
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
               <XAxis dataKey="bookName" />
               <YAxis />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
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
