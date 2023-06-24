import data from '@/public/db.json';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // @ts-ignore
  const foods = data.menu_foods[params.slug];
  return new Response(JSON.stringify(foods));
}
