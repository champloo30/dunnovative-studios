import type { NextApiRequest, NextApiResponse } from 'next'
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Not a POST request' })
  }

  const body = req.body as SheetForm

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

    return res.status(201).json({
      data: response.data
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send({message: 'Something went wrong'})
  }
}