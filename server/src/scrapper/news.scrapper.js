require('dotenv').config({ path: '../../.config.env' });
const { scrapeResponse } = require("@mendable/firecrawl-js");
const FirecrawlApp = require("@mendable/firecrawl-js").default;
const cron = require("node-cron");

const app = new FirecrawlApp({ apiKey:process.env.FIRECRAWL_API});


const scrap = async (url="https://www.bbc.com/news") => {
  try {
    const scrapeResponse = await app.scrapeUrl(url, {
      formats: ["json"],
    });

    if (!scrapeResponse.success) {
      throw new Error(`Failed to scrape: ${scrapeResponse.error}`);
    }
    
    console.log("Scraping successful:", scrapeResponse.data);
    return scrapeResponse.data;
  } catch (error) {
    console.error("Scraping error:", error.stack);
    throw error;
  }
};

scrap();
const scrapperRunAutomate= async () => {
  try {
    cron.schedule("0 0 * * *", async () => {
      console.log("Running cron job");
      await scrap("https://www.nytimes.com/section/world");
    });
  } catch (error) {
    console.error("Failed to run cron job", error);
  }
};

const fetchNewsApi = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=YOUR_NEWS_API_KEY"
    );
    const data = await response.json();
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
module.exports = { scrap,scrapperRunAutomate,fetchNewsApi };
