import { Product, ProductTypes } from "./product.model";

export class ProductService {
    private products : Product[] = [{id: '1',
        name: 'golden',
        description: 'smth',
        price: 120,
        quantity: 2,
        rating: 5,
        image: '/cauldrons/golden_cauldron.jpeg',
        type: ProductTypes.Cauldron,
        delivery: 3 },
        {id: '2',
          name: 'silver',
          description: 'smth',
          price: 120,
          quantity: 2,
          rating: 3,
          image: '/cauldrons/silver_cauldron.jpeg',
          type: ProductTypes.Cauldron,
          delivery: 2,
         },
          {id: '3',
            name: 'bronze',
            description: 'smth',
            price: 300,
            quantity: 2,
            rating: 4.8,
            image: 'path',
            type: ProductTypes.Cauldron,
            delivery: 22,
          },
            {id: '4',
              name: 'wow',
              description: 'smth',
              price: 10,
              quantity: 2,
              rating: 2.5,
              image: 'path',
              type: ProductTypes.Cauldron,
            delivery: 10,
          },
      ];

    errorText:string ='';

    getProducts() : Product[] { return this.products;};
    getProductById(id:string):Product { return  this.products.find((product)=> product.id==id)!;};
}