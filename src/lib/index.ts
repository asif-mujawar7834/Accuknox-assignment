import { totalCountProps } from "../types";

export const getTotalCount = ({ data }: { data: totalCountProps[] }) => {
  const totalValue = data.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);
  return totalValue;
};
