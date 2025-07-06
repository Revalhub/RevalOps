import { google } from 'googleapis';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1uD4D_78zMFYA9c1GUa73L7t1RWYbLB1cFBD2_XgB2aw'; // Replace with your Google Sheet ID
const SERVICE_ACCOUNT_KEY_PATH = path.resolve(__dirname, 'lexical-emblem-463106-c1-c8d454c7ff40.json'); // Path to your JSON key file

const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_KEY_PATH,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;
    console.log('Received data:', { email, message }); // Debug statement

    try {
      const timestamp = new Date().toISOString();
      console.log('Appending data to Google Sheets:', { email, message, timestamp }); // Debug statement

      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, message, timestamp]],
        },
      });

      console.log('Data successfully appended to Google Sheets'); // Debug statement
      res.status(200).json({ message: 'Request stored successfully.' });
    } catch (error) {
      console.error('Error storing request:', error); // Debug statement
      res.status(500).json({ error: 'Failed to store request.' });
    }
  } else {
    console.log('Invalid request method:', req.method); // Debug statement
    res.status(405).json({ error: 'Method not allowed.' });
  }
}