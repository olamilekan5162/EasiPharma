# EasiPharma || A new way to track pharmaceutical products

##  Overview  
EasiPharma is an advanced stock and inventory management system tailored for pharmaceutical businesses. The platform enables efficient tracking of stock levels, supplier management, and automated order placements when inventory runs low. Additionally, AI-powered restocking recommendations ensure optimal stock availability, helping businesses prevent shortages and overstocking.  

With EasiPharma, pharmacy owners and managers can:  
- Monitor stock levels in real-time  
- Manage suppliers and track deliveries  
- Automate restocking processes  
- Receive AI-based recommendations for stock replenishment  
- Securely log in and manage operations via Firebase Authentication 


## 🔥 Features  

###  **Inventory Management**  
- Track existing stock levels and availability  
- Add new stock items with relevant details  
- Monitor real-time inventory changes  

###  **Supplier Tracking**  
- Add, update, and manage suppliers  
- Track supplier performance and order history  

###  **Automated Stock Ordering**  
- Generate and track stock orders  
- Automatically update inventory when stock is delivered  

### 🧠 **AI-Driven Restocking Recommendations**  
- Uses Gemini AI to analyze stock levels  
- Predicts when to reorder items based on usage trends  

###  **User Authentication**  
- Secure login and logout functionality  
- Uses Firebase Authentication for account management  
## Technologies Used
- **React.js** - Frontend framework  
- **Gemini Ai** - AI-powered restocking suggestions
- **Firebase Firestore** - Database for orders, stocks, and suppliers   
- **Firebase Authentication** - User authentication

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
   VITE_GEMINI_API_KEY=your-gemini-api-key
   VITE_FIREBASE_API_KEY=your-firebase-api-key
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

## Usage
1. Log in to the dashboard.
2. Manage inventory and supplier details.
3. Get AI-based stock warnings.
4. Automate stock orders when needed.

## Directory Structure
```
└── EasiPharma/
    ├── src/
    │   ├── components/
    │   ├── routes/
    │   ├── utils/
    │   └── App.jsx
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

## 📌 Collaborators
- [Opeyemi Olalekan](https://github.com/olamilekan5162)  
- [Ayobami Akande](https://github.com/adeyemimichael)  
- [Oluwasanmi Oluwafemi](https://github.com/Oluwasanmij2r4)  

## Live Demo
[EasiPharma Live](https://easi-pharma.vercel.app)

## License
This project is licensed under MIT. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.




