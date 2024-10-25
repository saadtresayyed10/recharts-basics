import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart width={500} height={400} data={productSales}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid />

        <Legend />
        <Tooltip />

        <Area
          dataKey="product1"
          type="monotone"
          stroke="#000000"
          fill="#ffffff"
        />
        <Area
          dataKey="product2"
          type="monotone"
          stroke="#ffffff"
          fillOpacity={"40%"}
          fill="red"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
