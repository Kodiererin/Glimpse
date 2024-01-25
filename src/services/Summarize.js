export async function articleSummary(data) {
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6",
      {
        headers: { Authorization: "Bearer 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" },
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
