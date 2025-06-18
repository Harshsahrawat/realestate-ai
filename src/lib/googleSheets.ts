import { google } from "googleapis";

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL!;
const privateKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;

const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


const sheets = google.sheets({ version: "v4", auth });

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
