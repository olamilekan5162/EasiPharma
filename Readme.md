# EasiPharma || A new way to track pharmaceutical products

## Overview
EasiPharma is a stock and inventory management system for pharmaceutical businesses. It tracks stock levels, manages suppliers, and automates order placements when stock runs low. AI provides restocking recommendations.

## Features
- **Inventory management:** Track orders, add stocks, and monitor stock availability.
- **Supplier tracking:** Add and manage suppliers for stock orders.
- **Automated stock ordering:** Orders add to available stock upon timely delivery.
- **AI-driven restocking recommendations:** Suggests restocking needs based on availability.
- **User authentication:** Users log in and out via Firebase Authentication.

## Technologies Used
- **React.js** - Frontend framework  
- **Gemini Ai** - AI-powered restocking suggestions
- **Firebase Firestore** - Database for orders, stocks, and suppliers   
- **Firebase Authentication** - User authentication

## Prerequisites
- Node.js installed
- Firebase account with Firestore configured
- GeminiAI API key

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
