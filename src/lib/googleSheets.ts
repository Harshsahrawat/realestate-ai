import { google } from "googleapis";

// Load environment variables
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

if (!clientEmail || !privateKeyRaw || !spreadsheetId) {
  throw new Error("Missing one or more required environment variables: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SPREADSHEET_ID");
}

// Decode private key
const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

// Create authenticated JWT client
const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Initialize Sheets API
const sheets = google.sheets({ version: "v4", auth });

// Append a row of data to the spreadsheet
export async function appendRow(data: (string | number)[]) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [data],
    },
  });
}
