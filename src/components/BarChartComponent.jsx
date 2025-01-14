import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const productSales = [
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

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart width={500} height={500} data={productSales}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Bar dataKey="product1" fill="blue" stroke="black" />
        <Bar dataKey="product2" fill="red" stroke="black" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
