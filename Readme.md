# EasiPharma || A new way to tracking pharmaceutical product 

## Overview
EasiPharma is a stock and inventory management system designed for pharmaceutical businesses. It helps track stock levels, manage suppliers, and automate order placements when stock runs low. The system integrates AI to provide recommendations for restocking.

## Features
- Inventory management: Admin Can track the orders received, Order stocks, Add stocks to the available stocks and know when a stock is not available.
- Supplier tracking: Admin can add to the suppliers providing the stocks and also select from the existing suppliers to order stocks
- Automated stock ordering: Stock can be ordered and if stock is delivered within the specified date it will automatically add up to available stock>
- AI-driven restocking recommendations: Ai recommends the stock that might be needing by making suggestions from the stocks that are not available
- User authentication: Users can, log in, and log out using Firebase Authentication.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/olamilekan5162/EasiPharma.git
   ```
2. Navigate to the project directory:
   ```sh
   cd easipharma
   ```
3. **Set up Firebase:**  
   - Create a Firebase project.  
   - Enable Firestore Database.  
   - Enable Firebase Authentication.  

4. **Set up OpenAI:**  
   - Get an OpenAI API key from [OpenAI](https://openai.com/).  

5. **Create an `.env.local` file** in the root directory and add the following environment variables:  

   ```ini
   VITE_OPENAI_API_KEY=your-openai-api-key

   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   ```  

   Replace `your-...` values with your actual Firebase and OpenAI credentials.  
6. Install dependencies:
   ```sh
   npm install
   ```
7. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Log in to the dashboard.
2. Manage inventory and supplier details.
3. Receive AI-based restocking alerts.
4. Place automated orders when stock is low.

## API Documentation
EasiPharma provides a RESTful API to interact with inventory, suppliers, and order management.

### Authentication
- **POST** `/api/auth/login` - Logs in a user
- **POST** `/api/auth/register` - Registers a new user

### Inventory Management
- **GET** `/api/inventory` - Fetch all inventory items
- **POST** `/api/inventory` - Add a new inventory item
- **PUT** `/api/inventory/:id` - Update inventory details
- **DELETE** `/api/inventory/:id` - Delete an inventory item

### Suppliers
- **GET** `/api/suppliers` - Fetch all suppliers
- **POST** `/api/suppliers` - Add a new supplier
- **PUT** `/api/suppliers/:id` - Update supplier details
- **DELETE** `/api/suppliers/:id` - Remove a supplier

### Orders
- **POST** `/api/orders` - Create a new stock order
- **GET** `/api/orders` - View all stock orders
- **PUT** `/api/orders/:id` - Update an order status

## Directory Structure
```
└── olamilekan5162-easipharma/
    ├── Readme.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   └── assets/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── components/
        │   ├── spinner/
        │   │   └── Spinner.jsx
        │   └── ui/
        │       ├── AddStock/
        │       │   ├── AddStockModal.jsx
        │       │   └── ManageStockModal.css
        │       ├── Modal/
        │       │   ├── Modal.css
        │       │   └── StockModal.jsx
        │       ├── SuppliersModal/
        │       │   ├── SupplierModal.css
        │       │   └── SupplierModal.jsx
        │       ├── button/
        │       │   ├── Button.css
        │       │   └── Button.jsx
        │       ├── dashboard/
        │       │   ├── Dashboard.jsx
        │       │   └── dashboard.css
        │       ├── distribution/
        │       │   ├── Distribution.jsx
        │       │   └── distribution.css
        │       ├── distributionModal/
        │       │   └── DistributionModal.jsx
        │       ├── inventory/
        │       │   ├── Inventory.jsx
        │       │   └── inventory.css
        │       ├── orderStock/
        │       │   ├── OrderStock.jsx
        │       │   └── orderStock.css
        │       ├── stocks/
        │       │   ├── Stocks.jsx
        │       │   └── stocks.css
        │       └── suppliers/
        │           ├── Suppliers.jsx
        │           └── supplier.css
        ├── routes/
        │   ├── homeLogin/
        │   │   ├── HomeLogin.jsx
        │   │   └── homeLogin.css
        │   └── homepage/
        │       ├── Homepage.jsx
        │       └── homepage.css
        └── utils/
            ├── UserAuthContext.jsx
            └── firebaseConfig.js
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push the changes: `git push origin feature-branch`
5. Create a pull request.

## Deployment
To deploy the project, you can use platforms like **Vercel** or **Netlify**.

### Deploying on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
