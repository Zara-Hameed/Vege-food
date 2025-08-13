import bg_1 from "./bg_1.jpg.webp";
import bg_2 from "./bg_2.jpg.webp";
import bg_3 from "./bg_3.jpg";
import category1 from './category-1.jpg';
import category2 from './category-2.jpg';
import category3 from './category-3.jpg';
import category4 from './category-4.jpg';
import category from './category.jpg';
import partner1 from './partner-1.png';
import partner2 from './partner-2.png';
import partner3 from './partner-3.png';
import partner4 from './partner-4.png';
import partner5 from './partner-5.png';
import person1 from './person_1.jpg';
import person2 from './person_2.jpg';
import person3 from './person_3.jpg';
import product1 from './product-1.jpg';
import product2 from './product-2.jpg';
import product3 from './product-3.jpg';
import product4 from './product-4.jpg';
import product5 from './product-5.jpg';
import product6 from './product-6.jpg';
import product7 from './product-7.jpg';
import product8 from './product-8.jpg';






export const assets = {
    bg_1,
    bg_2,
    bg_3,
    category1,
    category2,
    category3,
    category4,
    category,
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    person1,
    person2,
    person3,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,

  
       
}

export const productCategories =['All','Vegetables','Fruits',"Juice","Dried"]

export const products =[
  {
    "id": 1,
   " title": "Bell Pepper",
    "img": assets.product1,
    "oldPrice": "$120.00",
    "price": "$80.00",
    "discount": "30%",
    "category": "vegetables"
  },
  {
    "id": 2,
    "title": "Strawberry",
    "img": assets.product2,
    "price": "$120.00",
    "category":"fruits"
  },
  {
    "id": 3,
    "title": "Green Beans",
    "img": assets.product3,
    "price": "$120.00",
    "catogory":"vegetables"
  },
  {
    "id": 4,
    "title": "Purple Cabbage",
    "img": assets.product4,
    "price": "$120.00",
     "catogory":"vegetables"
  },
  {
    "id": 5,
    "title": "Tomatoe",
    "img": assets.product5,
    "oldPrice": "$120.00",
    "price": "$80.00",
   " discount": "30%",
    "catogory":"vegetables"
  },
  {
    "id": 6,
    "title": "Brocolli",
    "img": assets.product6,
    "price": "$120.00",
     "catogory":"vegetables"
  },
  {
    "id": 7,
    "title": "Carrots",
    "img": assets.product7,
    "price": "$120.00",
     "catogory":"vegetables"
  },
  {
    "id": 8,
    "title": "Fruit Juice",
    "img": assets.product8,
    "price": "$120.00",
     "catogory":"juice",
  },
   {
    "id": 9,
    "title": "Fruit Juice",
    "img": assets.product1,
    "price": "$120.00",
     "catogory":"juice",
  },
   {
    "id": 10,
    "title": "Fruit Juice",
    "img": assets.product4,
    "price": "$120.00",
     "catogory":"juice",
  },
   {
    "id": 11,
    "title": "Fruit Juice",
    "img": assets.product8,
    "price": "$120.00",
     "catogory":"dried",
  },
];
