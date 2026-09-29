---
title: "Meet with SpiderRock at Quant Strats to Discuss how our Methodologies Differ"
date: 2025-10-02
summary: "SpiderRock, widely known by institutional options traders, employs a family of proprietary pricing models used to compute prices, implied volatilities, Greeks, surfaces etc., for use in our trading technology as well as multicast feeds and live APIs."
image: /images/uploads/updates/meet-with-spiderrock-at-quant-strats-to-discuss-how-our-methodologies-differ/Quant-Strats-2-2-768x398.jpg
image_alt: "Meet with SpiderRock at Quant Strats to Discuss how our Methodologies Differ"
categories:
  - "Data & Analytics"
  - "Events"
---

SpiderRock, widely known by institutional options traders, employs a family of proprietary pricing models used to compute prices, implied volatilities, Greeks, surfaces etc., for use in our trading technology as well as multicast feeds and live APIs. Live data used by practitioners to support valuations in live trading activities – thus ensuring high accuracy and consistency – is used to produce intraday and end-of-day tables for our historical data and analytics offerings.   

By using archived real-time trading data to compute dynamic implied volatility surfaces for all option expirations, SpiderRock’s [historical data](/data/historical-data-analytics/) reflects a best fit of live market conditions. By maintaining alignment between our trading production surfaces and our historical data, clients have found better consistency between model and trading strategies and view using our historical data as a competitive advantage. 

Our Option Close Mark file is unique as it provides users with SpiderRock close marks calculation based on market conditions 5 minutes prior to the regular session close computed directly from surface curves with implied volatility synchronized with the underlying market.  Based on client feedback, calculating 5 minutes prior to the exchange close provides a better representation of fair price and eliminates the “noise” that can skew valuations if calculated at or closer to the exchange close. Call and put bid and ask markets are fitted directly as a component of the volatility surface shape fitting process with the surface price determined by aligning the surface shape with the underling mid-price and ATM volatility in real-time.  The price fits have an adaptive number of spline points resulting in a multi-point spline describing a single volatility curve for both calls and puts for each expiry.  Call and put prices are fit independently and the price data is transformed into a single volatility curve for both calls and puts.   

We also use a hybrid time convention taking both trading day and continuous calendar time into account. Instead of using a business day count convention with intraday time decay, our time decay calculations account for volatility that occurs both during and after the trading session. For US equity markets, roughly 70% of the price variance occurs during market trading hours and additionally during the hour immediately after market close. To better account for this relationship in a business-day count convention, we distinguish between higher volatility and lower volatility intervals of time throughout an entire trading year.  

Stop by Booth B6 to discuss our methodologies and product offerings. Samples of our Option Close Mark, as well as our [Option Features Dataset](/data/option-features-dataset/), are available to view on [Code Willing’s](https://www.codewilling.com/) CWIQ application at Booth B10. 

### **About SpiderRock Data and Analytics**

SpiderRock Data & Analytics is a division of  SpiderRock Technology Solutions, a provider of industry-leading options trading solutions. SpiderRock Data and Analytics is an exchange-licensed redistributor of market data, providing US stocks and options market data in a raw and normalized format.   

SpiderRock’s proprietary live analytics offer low-cost delivery of market data and options analytics without requiring clients to make a significant investment in infrastructure. In addition, SpiderRock’s robust historical datasets updated daily from live markets are ideal for research, back testing, and making data-driven decisions. 

For more information, visit [https://www.spiderrock.net/data/](/data/), follow us on X at [@SpiderRockChi](https://twitter.com/SpiderRockChi), and visit our [LinkedIn page.](https://www.linkedin.com/company/spiderrock)
