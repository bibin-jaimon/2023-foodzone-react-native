import { Restaurent } from '../../../model';
const mockData: Restaurent[] = [
  {
    id: '0',
    name: 'Empire',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '1',
    name: 'Imperio',
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
  },
];

const fetchProducts = async (): Promise<Restaurent[]> => {
  //implement fake api data
  return Promise.resolve(mockData);
};

export { fetchProducts };
