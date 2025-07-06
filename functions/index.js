const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const {google} = require("googleapis");

// --- Configuration for Google Sheets ---
// Replace with your actual Sheet ID
const SHEET_ID = "1uD4D_78zMFYA9c1GUa73L7t1RWYbLB1cFBD2_XgB2aw";

// The scopes needed for interacting with Google Sheets
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Initialize Google Auth using Application Default Credentials (ADC)
const auth = new google.auth.GoogleAuth({
  scopes: SCOPES,
});

// Create the Express app
const app = express();

// Enable CORS for your frontend application
// Replace 'http://localhost:3000' with your Firebase Hosting domain
// (e.g., 'https://revalops-34baf.web.app')
// when you deploy your frontend. For now, localhost is fine.
app.use(cors({origin: "http://localhost:3000"}));
// IMPORTANT: Once your React app is deployed to Firebase Hosting,
// change the origin to your Firebase Hosting URL:
// app.use(cors({ origin:'https://revalops-34baf.web.app'}));
// Or for development, you can allow all origins temporarily
// (less secure for production):
// app.use(cors({ origin: true })); // Allows all origins

app.use(bodyParser.json());

// --- Your API Endpoint ---
app.post("/api/storeRequest", async (req, res) => {
  const {email, message} = req.body;

  try {
    const sheetsAPI = google.sheets({version: "v4", auth});
    // Get sheets API instance with auth
    const timestamp = new Date().toISOString();
    await sheetsAPI.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, message, timestamp]],
      },
    });

    res.status(200).json({message: "Request stored successfully."});
  } catch (error) {
    console.error("Error storing request:", error);
    // You might want to send more specific error details in development,
    // but generalize for production.
    res.status(500).json({error: "Failed", details: error.message});
  }
});

// --- Export the Express app as an HTTP Cloud Function ---
// The path for this function will be /storeRequest.
// For example, if your Cloud Function's base URL is
// https://us-central1-revalops-34baf.cloudfunctions.net,
// your endpoint will be https://us-central1-revalops-34baf.cloudfunctions.net/storeRequest/api/storeRequest
// (Note: The first '/storeRequest' comes from the function name,
// the second '/api/storeRequest' from your Express router)
// To make it cleaner, we can remove the '/api' prefix from your Express route.
exports.storeRequest = functions.https.onRequest(app);

// If you want a cleaner path like /api/storeRequest
// directly on the Cloud Function URL,
// you would need to adjust the express app to
// handle the base path of the function.
// A common pattern for this is to use a functions.runWith() context or directly
// export the endpoint if you're not using a full Express app.
// For now, let's keep it simple with 'exports.storeRequest
// = functions.https.onRequest(app);'
// and adjust your frontend call to match.

