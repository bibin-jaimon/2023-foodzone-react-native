import { Cuisine, Restaurent } from '../../../model';

const mockCusines: Cuisine[] = [
  {
    id: 0,
    name: 'BBQ chicken Wings',
    price: 234,
    currency: '$',
    imageURL:'https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 1,
    name: 'BBQ chicken',
    price: 234,
    currency: '$',
    imageURL:'https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 2,
    name: 'BBQ Wings',
    price: 234,
    currency: '$',
    imageURL:'https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg?auto=compress&cs=tinysrgb&w=800',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
];

const mockData: Restaurent[] = [
  {
    id: '0',
    name: 'Empire',
    rating: 4.5,
    cuisines: mockCusines,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '1',
    name: 'Imperio',
    rating: 4.3,
    cuisines: mockCusines,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
  },
];

const fetchProducts = async (): Promise<Restaurent[]> => {
  //implement fake api data
  return Promise.resolve(mockData);
};

export { fetchProducts };
