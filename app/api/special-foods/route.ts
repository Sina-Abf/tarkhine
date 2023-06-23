import data from '@/public/db.json';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const branch = request.headers.get('referer')?.split('branch/')[1].toString();
  // @ts-ignore
  const specialFoods = data.special_foods[branch];
  return new Response(JSON.stringify(specialFoods));
}
