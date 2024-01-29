// import dotenv from 'dotenv';
// dotenv.config();

import { removeExtra } from "./Utilities";

// Access environment variable
const APIKey = "c78b6304demsh6dd440870b986e3p1ca001jsnd2d1c5c0d507";

export async function articleSummary(data) {
  data = removeExtra(data);

  
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6",
      {
        headers: { Authorization: `Bearer ${APIKey}` },
        method: "POST",
        body: JSON.stringify({ inputs: data }), // Adjusted data structure
      }
    );
    const result = await response.json();
    return result;
  }

  if (data.length > 1) {
    try {
      const response = await query(data);
      // console.log(JSON.stringify(response));
      // console.log(response[0].summary_text);
      return response[0].summary_text;
      // return JSON.stringify(response)
    } catch (error) {
      console.error("Error during API request:", error);
      return "Error during API request";
    }
  } else {
    return "Empty Text!";
  }
}

// Example usage:
// const summary = await articleSummary("Your text goes here.");
// console.log(summary);
