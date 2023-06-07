import { useQuery } from 'react-query';

export interface TFoods {
  image: string;
  name: string;
  price: string;
  discount_percent: string;
  score: string;
  all_scores: string;
  id?: number;
  foodItemClassName?: string;
}

const fetchFoods = async (param: string) => {
  const res = await fetch(`/api/${param}`, { next: { revalidate: 5000 } });
  const data = (await res.json()) as TFoods[];
  return data;
};

const getFoods = (param: string) => {
  const { data, isLoading } = useQuery<TFoods[]>(`get-${param}`, () =>
    fetchFoods(param)
  );
  return { data, isLoading };
};
export default getFoods;
