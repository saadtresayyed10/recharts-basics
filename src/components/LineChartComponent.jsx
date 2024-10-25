import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { productSales } from "./BarChartComponent";

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={400} data={productSales}>
        <XAxis />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line dataKey="product1" fill="red" stroke="black" />
        <Line dataKey="product2" fill="blue" stroke="black" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
