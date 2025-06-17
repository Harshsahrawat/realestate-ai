import { google } from "googleapis";
import { JWT } from "google-auth-library";
import credentials from "./google-credentials.json";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const spreadsheetId = "your-sheet-id-here";  // replace with your actual ID
const sheetName = "Sheet1";

const auth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

export async function appendRow(data: (string | number)[]) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [data],
    },
  });
}

