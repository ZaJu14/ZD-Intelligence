# Google Sheets Contact Form Setup

The contact form submits to a Google Apps Script web app that writes each submission
as a new row in your Google Sheet. Follow these steps to activate it.

---

## Step 1 — Open your Google Sheet

Your sheet: https://docs.google.com/spreadsheets/d/1fCGD-HZgtshD4ZBMiI0jXYz5EWKek-h0j-RtwR3ZENA/edit

Add these headers in Row 1 if they are not already there:

| A | B | C | D |
|---|---|---|---|
| Timestamp | Name | Email | Message |

---

## Step 2 — Create the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp
      .openById("1fCGD-HZgtshD4ZBMiI0jXYz5EWKek-h0j-RtwR3ZENA")
      .getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name     || "",
      data.email    || "",
      data.message  || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (Ctrl+S or ⌘S)

---

## Step 3 — Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Set:
   - **Description**: Contact Form Webhook
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts (grant access to your Google account)
6. Copy the **Web app URL** — it will look like:
   `https://script.google.com/macros/s/XXXXXX.../exec`

---

## Step 4 — Add the URL to Replit

1. In your Replit project, go to **Secrets** (the padlock icon in the sidebar)
2. Add a new secret:
   - **Key**: `NEXT_PUBLIC_GS_WEBHOOK_URL`
   - **Value**: (the Web app URL you copied above)
3. Restart your workflow

The contact form will now write every submission to your Google Sheet automatically.

---

## WhatsApp Button (optional)

To enable the WhatsApp floating button, add another secret:

- **Key**: `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **Value**: Your WhatsApp number in international format, e.g. `+971501234567`

---

## Notes

- The form uses `mode: 'no-cors'` when posting, which means the browser cannot
  read the response. Submissions will be saved to the sheet regardless — the
  success state shown to the user is triggered after the request is sent.
- If the webhook URL is not set, the form shows a clear error message and
  directs the user to email directly.
- All four fields (Timestamp, Name, Email, Message) are written as a new row
  on every submission.
