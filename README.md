# Dummy Data Generator

A simple Express app that fetches employee data from a MongoDB database and displays it on a webpage using a "Fetch Data" button.

## 🚀 Features

- Click a button to generate and display 10 random employee records
- Displays name, salary, language, city, and manager status
- If the collection already exists:
  - The collection will be **dropped**
- If the collection does not exist:
  - It will be **created** and filled with **10 random employee records**
- Supports both JSON and plain text responses from the backend
- Clean separation of frontend and backend


## 📖 Usage

1. Start the backend server (`node server.js`)
2. Open `frontend/index.html` in a browser
3. Click the "Fetch Data" button:
    - The backend will check for the existing collection
    - If it exists, it will **drop** the collection 
    - If it doesn't exist, it will **create** the collection and insert the data of **10 random employee records**
4. The data will then be displayed on the webpage in a clean format


## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (local)

## 📁 Project Structure
```bash
your-project/
├── backend/                 # Backend folder with server-side code 
|   |-- model/
|   |   |-- dataGenerator.js #js file to create a Mongoose Schema
│   ├── server.js              # Main backend server file
├── frontend/                # Frontend folder with client-side code
│   ├── index.html           # Main HTML page
│   ├── script.js            # Frontend JavaScript code (handles button click, fetch data)
│   ├── style.css            # CSS file for styling the page
├── .env                     # Environment variables (e.g., MongoDB URI)
├── .gitignore               # Files/folders to exclude from Git (e.g., .env)
├── package.json             # Main project dependencies and scripts (if you have global ones)
├── README.md                # Project documentation
```

## 📋 Requirements

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)
- MongoDB installed locally and running on `mongodb://localhost:27017`

## 📦 Dependencies

Backend dependencies (installed using `npm install`):
- express
- mongoose
- dotenv
- cors

Frontend:
- Plain HTML, CSS, and JavaScript (no external libraries required)


## 📦 Installation

1. Clone the repo:
```bash
git clone https://github.com/Charan1197/Dummy_Data_Generator.git
cd DummyDataGenerator
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file:
```bash
MONGO_URI=mongodb://localhost:27017/testDB
```

4. Start the backend server:
```bash
node .\Backend\server.js
```

## 🤝 Contributing

If you'd like to contribute, feel free to open a pull request with any improvements or features you'd like to add.