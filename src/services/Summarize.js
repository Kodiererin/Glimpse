// import dotenv from 'dotenv';
// dotenv.config();


// Access environment variable
// const APIKey = "c78b6304demsh6dd440870b986e3p1ca001jsnd2d1c5c0d507";

export async function articleSummary(data) {
  data = data.replace(/[^a-zA-Z0-9 ]/g, "")

    async function query(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }
    
    // query({"inputs": "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."}).then((response) => {
    //   console.log(JSON.stringify(response));
    // });

  if (data.length > 1) {
    try {
      const response = await query(data);
      // console.log(response);
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
const summary = await articleSummary("Khan began his career with appearances in several television series in the late 1980s and made his Bollywood debut in 1992 with Deewana. He was initially recognised for playing villainous roles in the films Baazigar (1993) and Darr (1993). Khan established himself by starring in a series of top-grossing romantic films, including Dilwale Dulhania Le Jayenge (1995), Dil To Pagal Hai (1997), Kuch Kuch Hota Hai (1998), Mohabbatein (2000), Kabhi Khushi Kabhie Gham... (2001), Kal Ho Naa Ho (2003), Veer-Zaara (2004) and Kabhi Alvida Naa Kehna (2006). He earned critical acclaim for his portrayal of an alcoholic in Devdas (2002), a NASA scientist in Swades (2004), a hockey coach in Chak De! India (2007), and a man with Asperger syndrome in My Name Is Khan (2010). Further commercial successes came with the romances Om Shanti Om (2007) and Rab Ne Bana Di Jodi (2008), and with his expansion to comedies in Chennai Express (2013) and Happy New Year (2014). Following a brief setback and hiatus, Khan made a career comeback with the 2023 action thrillers Pathaan and Jawan, both of which rank among the highest-grossing Indian films.");
console.log(summary);
