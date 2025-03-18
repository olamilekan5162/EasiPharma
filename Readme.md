# EasiPharma || A new way to tracking pharmaceutical product 

## Overview
EasiPharma is a stock and inventory management system designed for pharmaceutical businesses. It helps track stock levels, manage suppliers, and automate order placements when stock runs low. The system integrates AI to provide recommendations for restocking.

## Features
- **Inventory management:** Admin Can track the orders received, Order stocks, Add stocks to the available stocks and know when a stock is not available.
- **Supplier tracking:** Admin can add to the suppliers providing the stocks and also select from the existing suppliers to order stocks
- **Automated stock ordering:**** Stock can be ordered and if stock is delivered within the specified date it will automatically add up to available stock
- **AI-driven restocking recommendations:** Ai recommends the stock that might be needing by making suggestions from the stocks that are not available
- ****User authentication:** Users can, log in, and log out using Firebase Authentication.

## **Technologies Used**  
- **React.js** Frontend framework  
- **OpenAI GPT-4o-mini** AI-powered restocking suggestion and warning.
- **Firebase Firestore** Database for storing orders, stocks, and suppliers   
- **Firebase Authentication** User login & Logout  authentication

## **Prerequisites**  
- Node.js must be installed on your machine  
- Firebase account with a configured Firestore database  
- OpenAI API key  

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/olamilekan5162/EasiPharma.git
   ```
2. Navigate to the project directory:
   ```sh
   cd EasiPharma
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
   ## **API Usage**  
- **Uploading of Stocks and Suppliers** Adds stocks and suppliers to Firebase Firestore. 
- **Fetching of Stock and Suppliers** Retrieves stocks and suppliers from Firebase Firestore.  
  
## Usage
1. Log in to the dashboard.
2. Manage inventory and supplier details.
3. Receive AI-based warnings on stock.
4. Place automated orders when stock is low.

## Directory Structure
```
└── EasiPharma/
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



## Deployment
To deploy the project, we use  **Vercel** but  **Netlify** can be used too.

### Deploying on Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```
## **Future Improvements**  

- The settings section can be improved on for multilevel User Access by Manager
-  Ai automation for stocks ordering based on suggestions made 
- 
## 📌 Collaborators  

- [Opeyemi Olalekan](https://github.com/olamilekan5162)  
- [Ayobami AKANDE](https://github.com/adeyemimichael)  
- [Oluwasanmi Oluwafemi](https://github.com/Oluwasanmij2r4)  

## **Live Demo**  
[EasiPharma Live](https://dummy-theta.vercel.app)  
## License
This project is licensed under the Apache License 2.0. See the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0.txt) file for details.
