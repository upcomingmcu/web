import { NextProductionType, ProductionType } from './models';

export type { NextProductionType, ProductionType };

export async function get<T>(path: string = ''): Promise<T> {
  const url = `https://api.umcu.app/productions${path}`;
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`Error: ${response.status} - ${response.statusText}`);

    const body: T = await response.json();
    return body;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export async function getAllProductions() {
  return get<ProductionType[]>();
}

export async function getProduction(slug: string) {
  return get<ProductionType>(`/${slug}`);
}

export async function getNextProduction(date: string | undefined = undefined) {
  if (!date) return get<NextProductionType>(`/next`);
  return get<NextProductionType>(`/next?date=${date}`);
}
