import { products } from "./Vars.js";

//console.log(products);

for(var keyName in products ){
     // All the key names
     // console.log(keyName);

      // Dot notation will give Undefined {keyname will be considered as key in products}
     // console.log(products.keyName);

     //To Dynamically print all values Sqaure Notation will be used
     console.log(products[keyName]);
}


