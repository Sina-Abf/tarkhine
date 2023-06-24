import { useQuery } from 'react-query';

export interface TMenuFoods {
  image: string;
  food_name: string;
  food_items: [string];
  price: string;
  discount_percent: string;
  stars: string;
  all_scores: string;
  id?: number;
}

const fetchMenuFoods = async (param: string) => {
  const res = await fetch(`/api/menu/${param}`, { next: { revalidate: 5000 } });
  const data = (await res.json()) as TMenuFoods[];
  return data;
};

const getMenuFoods = (param: string) => {
  const { data, isLoading } = useQuery<TMenuFoods[]>(`get-${param}`, () =>
    fetchMenuFoods(param)
  );
  return { data, isLoading };
};
export default getMenuFoods;
