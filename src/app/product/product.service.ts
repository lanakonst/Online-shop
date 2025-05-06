import { Product, ProductTypes } from "./product.model";

export class ProductService {
    private products : Product[] = [{id: '1',
        name: 'golden',
        description: 'smth',
        price: 120,
        quantity: 2,
        raiting: 5,
        image: '/cauldrons/golden_cauldron.jpeg',
        type: ProductTypes.Cauldron },
        {id: '2',
          name: 'silver',
          description: 'smth',
          price: 120,
          quantity: 2,
          raiting: 5,
          image: '/cauldrons/silver_cauldron.jpeg',
          type: ProductTypes.Cauldron },
          {id: '3',
            name: 'bronze',
            description: 'smth',
            price: 120,
            quantity: 2,
            raiting: 5,
            image: 'path',
            type: ProductTypes.Cauldron },
            {id: '4',
              name: 'wow',
              description: 'smth',
              price: 120,
              quantity: 2,
              raiting: 5,
              image: 'path',
              type: ProductTypes.Cauldron },
      ];

    errorText:string ='';

    getProducts() : Product[] { return this.products;};
    getProductById(id:string):Product { return  this.products.find((product)=> product.id==id)!;};
}