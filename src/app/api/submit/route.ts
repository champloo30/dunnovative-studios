import { NextResponse } from "next/server";
import {google} from "googleapis";

type SheetForm = {
  firstName: string,
  lastName: string,
  email: string,
  response: string,
  phone: string,
  service: string[],
  other?: string,
  message: string,
}

export async function POST(
  req: Request
) {
  if (req.method !== 'POST') {
    return new NextResponse('Not a POST request', { status: 405 })
  }

  const body = await req.json() as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    })

    const sheets = google.sheets({
      auth,
      version: 'v4'
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:H1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [body.firstName, body.lastName, body.email, body.response, body.phone, body.service, body.other, body.message]
        ]
      }
    });

    return NextResponse.json(response)
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    console.error(error)
    console.error(message)
    return new NextResponse(message, { status: 500 })
  }
}