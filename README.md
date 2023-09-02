# MERNAPP_Hosting TrendBazaar_MERN Stack E-Commerce Website
TrendBazaar is a full-fledged e-commerce website built using the MERN (MongoDB, Express.js, React, Node.js) stack.
This platform allows users to browse through various product categories, view products from different brands, and add items to their cart for purchase.
The project is an eCommerce Website designed to facilitate online shopping experiences by providing essential functionalities related to products, categories, users, and brands.

#Features
###User Authentication: Users can sign up, log in, and manage their accounts. This provides personalized shopping experiences and secure access.

###Product Categories: Products are organized into different categories for easy navigation and browsing.


###Product Brands: Users can explore products from different brands and filter products based on their preferred brands.


###Product Catalog: An extensive catalog showcases various products with detailed descriptions, prices, and images.


###Shopping Cart: Users can add products to their cart, view the cart, update quantities, and remove items.


###Responsive Design: The website is designed to work smoothly across various devices and screen sizes.

Products: The API manages product information, including details such as name, description, price, availability, and images. 

Categories: The API organizes products into different categories or departments, making it easier for users to navigate and filter products based on their interests. 

Users: The API handles user-related operations, such as user registration, login, and authentication. 

Brands: The API manages brand information associated with products. Users can filter products by brand, allowing them to explore offerings from specific manufacturers or designers.

## API Reference
## Category Operations
#### 1)Get all Category

```http
  GET /api/get-all-category
```

|Description|  
Retrieve a list of all available categories in the system. 
#### 2)Get Category by Name

```http
  GET  /api/get-category-by-name
```

|Description|  
Retrieve a category by its name.

#### 3)Get Category by ID

```http
  GET  /api/get-category-by-id
```

|Description|  
Retrieve a category by its ID.

#### 4)Create Category

```http
  POST  /api/create-category
```

|Description|  
Create a new category.

#### 5)Update Category

```http
  PUT  /api/update-category
```

|Description|  
Update an existing category.

#### 6)Delete Category

```http
  DELETE /api/delete-category
```

|Description|  
 Delete a category.

 ## Brand Operations
#### 1)Add Brands

```http
  POST Add Brands
```

|Description|  Add new brands to the system. 
#### 2)Get All Brands

```http
  GET   /api/get-all-brands
```

|Description|  
 Retrieve a list of all available brands

#### 3)Get Brand by ID

```http
  GET  /api/get-brand-by-id
```

|Description|  
 Retrieve a brand by its ID.

#### 4)Delete Brand

```http
  DELETE  /api/delete-brand
```

|Description|  
Delete a brand.

#### 5)Update Brand by ID

```http
  PUT  /api/update-brand-id
```

|Description|  
Update an existing brands.


 ## Product Operations
#### 1)Create Products

```http
  POST /api/create-products
```

|Description| Create a new product.
#### 2)Get All Products

```http
  GET   /api/get-all-products
```

|Description|  
  Retrieve a list of all available products

#### 3)Get Products by Category

```http
  GET  /api/get-products-by-category
```

|Description|  
 Retrieve a list of products by a specified category.

#### 4)Get Products by Brand

```http
  GET  /api/get-products-by-brand
```

|Description|  
Retrieve a list of products by a specified brand.

#### 5)Get Product by Name

```http
  GET  /api/get-product-by-name
```

|Description|  
Retrieve a product by its name.

#### 6)Get Product by ID

```http
  GET  /api/get-product-by-id
```

|Description|  
Retrieve a product by its ID.
#### 7)Update Product by ID

```http
  PUT  /api/update-product-by-id
```

|Description|  
Update an existing product by its ID.

#### 7)Delete Product by ID

```http
  DELETE  /api/delete-product-by-id
```

|Description|  
 Delete a product by its ID.

  ## User Operations
#### 1)Sign Up

```http
  POST /api/signup
```

|Description| Register a new user.
#### 2)Login

```http
  POST   /api/login
```

|Description|  
   Authenticate and log in a user

#### 3)Get All Users

```http
  GET  /api/get-all-users
```

|Description|  
 Retrieve a list of all registered users.

#### 4)Get User by Email

```http
  GET   /api/get-user-by-email
```

|Description|  
Retrieve a user by their email address.

#### 5)Update User by ID

```http
  PUT  /api/update-user-id
```

|Description|  
Update an existing user by their ID.

#### 6)Delete User

```http
  DELETE  /api/delete-user
```

|Description|  
Delete a user by their ID.









