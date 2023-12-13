import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const SaleChart = () => {
   const data = [
      {
         "name": "Day 1",
         "Total_Sale": 4000,
         "Total_Profit": 2400,
         "amt": 2400
      },
      {
         "name": "Day 2",
         "Total_Sale": 3000,
         "Total_Profit": 1398,
         "amt": 2210
      },
      {
         "name": "Day 3",
         "Total_Sale": 2000,
         "Total_Profit": 9800,
         "amt": 2290
      },
      {
         "name": "Day 4",
         "Total_Sale": 2780,
         "Total_Profit": 3908,
         "amt": 2000
      },
      {
         "name": "Day 5",
         "Total_Sale": 1890,
         "Total_Profit": 4800,
         "amt": 2181
      },
      {
         "name": "Day 6",
         "Total_Sale": 2390,
         "Total_Profit": 3800,
         "amt": 2500
      },
      {
         "name": "Day 7",
         "Total_Sale": 3490,
         "Total_Profit": 4300,
         "amt": 2100
      }
   ]
   return (
      <>
         <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={data}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
               <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                     <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
               </defs>
               <XAxis dataKey="name" />
               <YAxis />
               <CartesianGrid strokeDasharray="3 3" />
               <Tooltip />
               <Area type="monotone" dataKey="Total_Sale" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
               <Area type="monotone" dataKey="Total_Profit" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
         </ResponsiveContainer>

      </>
   );
};

export default SaleChart;