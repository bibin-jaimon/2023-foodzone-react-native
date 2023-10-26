export interface Cuisine {
  id: number
  name: string;
  price: number;
  currency: string;
  imageURL: string;
  items: string[];
}
export interface Restaurent {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisines: Cuisine[];
}
