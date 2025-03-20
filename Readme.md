# EasiPharma || A new way to track pharmaceutical products

##  Overview  
<!-- EasiPharma is a pharmaceutical inventory management system that tracks stock levels, manages suppliers, and facilitates restocking. With AI predicting stock shortages and expiration. -->
EasiPharma is a stock and inventory management system tailored for pharmaceutical businesses. The platform enables efficient tracking of stock levels, supplier management, and order placements when inventory runs low. Additionally, AI-powered restocking recommendations ensure optimal stock availability, helping businesses prevent shortages and overstocking.  

With EasiPharma, pharmacy owners and managers can:  
- Monitor stock levels in real-time  
- Manage suppliers and track deliveries  
-  Carry out restocking processes
- Receive AI-based recommendations for stock replenishment  
- Securely log in and manage operations via Firebase Authentication 


## 🔥 Features  

### **MultiLevel Admin roles**
- EasiPharma has two roles: Admin and Staff Member.  
- Admins manage inventory, suppliers, stock orders, and track distributions.  
- Staff members track and distribute or sell stock.
###  **Inventory Management**  
- Track existing stock levels and availability  
- Add new stock items with relevant details  
- Monitor real-time inventory changes  

###  **Supplier Tracking**  
- Add, update, and manage suppliers  
- Track supplier performance and order history  

### **Stock Ordering**  
- Generate and track stock orders  
- Automatically update inventory when stock is delivered  

### 🧠 **AI-Driven Restocking Recommendations and Warning**  
- Uses Gemini AI to analyze stock levels  
- Predicts the reordering of items based on usage trends  
- Predicts and warn against the expiry dates of stocks based on Inventory details

###  **User Authentication**  
- Secure login and logout functionality  
- Uses Firebase Authentication for account management  
### **Distribution of Stocks**
- Stocks can be distributed from the staff's Dashboard 
- Distributed stocks are marked as completed when the stock is delivered

##  Technologies Used  

| Technology | Purpose |  
|------------|---------|  
| **React.js** | Frontend development |  
| **Gemini AI** | AI-powered stock recommendations |  
| **Firebase Firestore** | Database for storing stocks, suppliers, and orders |  
| **Firebase Authentication** | Secure user authentication |  

## ⚙️ Prerequisites  
Before running EasiPharma, ensure you have the following:  
- Node.js installed on your system  
- A Firebase account with Firestore and Authentication enabled  
- A Gemini AI API key for AI-driven recommendations  

## 🛠 Installation Guide  

Follow these steps to set up and run EasiPharma on your local machine:  

### 1️⃣ Clone the Repository  

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/olamilekan5162/EasiPharma.git
   ```
2. Navigate to the project directory:
   ```sh
   cd EasiPharma
   ```
3. **Set up Firebase:** Enable Firestore Database and Authentication.
4. **Set up GeminiAI:** Get an API key from [Gemini](https://gemini.google.com/).
5. **Create an `.env.local` file** with environment variables:
   ```ini
   VITE_GEMINI_KEY=your-gemini-api-key
   VITE_FIREBASE_API_KEY=your-firebase-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-firebase-app-id
   ```
6. Install dependencies:
   ```sh
   npm install
   ```
7. Start the development server:
   ```sh
   npm run dev
   ```

## API Usage
- **Upload Stocks & Suppliers** - Adds data to Firestore.
- **Fetch Stocks & Suppliers** - Retrieves data from Firestore.

## 🎯  How to Use

- **Log in to the Dashboard** – Authenticate using Firebase Authentication.

- **Manage Inventory** – Add new stocks, update details, and monitor availability.

-**Manage Suppliers** – Add and track supplier information.

-**Get AI-Based Stock Warnings** – Receive alerts when stock is running low.

-**Stock Orders** – Generate orders automatically when required.

## Directory Structure
```
└── EasiPharma/
    ├── Readme.md
    ├── LICENSE.txt
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── vercel.json
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
To deploy:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

## Future Improvements
- Multi-level user access for managers.
- AI-driven automated stock ordering.
- Data Analytics Dashboard – Provide insights into stock trends and supplier efficiency.
- Mobile App Integration – Create a mobile version for pharmacy managers on the go.

## 📌 Collaborators
- [Opeyemi Olalekan](https://github.com/olamilekan5162) (Oracle5163)
- [Ayobami Akande](https://github.com/adeyemimichael)  
- [Oluwasanmi Oluwafemi](https://github.com/Oluwasanmij2r4)  

## Live Demo
[EasiPharma Live](https://easi-pharma.vercel.app)

## License
This project is licensed under MIT. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.




