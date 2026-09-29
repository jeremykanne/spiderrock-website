---
title: "Consider the Approach: Quant Modeling and Retail Flows in Equity Options Markets"
date: 2022-04-21
summary: "It’s well-documented that equity and options markets underwent drastic participatory change over the past few years, though retail traders’ presence has declined since its peak GME frenzy — see that oft-cited anecdotal proxy, a chart of…"
image: /images/uploads/updates/quant-modeling-and-retail-flows-in-equity-options-markets/spiderrock-blog-web-4.21-768x505.jpg
image_alt: "Consider the Approach: Quant Modeling and Retail Flows in Equity Options Markets"
categories:
  - "Data & Analytics"
---

It’s well-documented that equity and options markets underwent drastic participatory change over the past few years, though retail traders’ presence has declined since its peak GME frenzy — see that oft-cited anecdotal proxy, a chart of Robinhood’s stock performance.![Fixed Term Volatility](/images/uploads/updates/quant-modeling-and-retail-flows-in-equity-options-markets/Quant-Modeling-and-Retail-Flows-1.png)

*Source: SpiderRock data — Post-IPO doldrums have continued for retail’s posterchild broker.*

However, the ebb and (trading) flows of retail are still notable and subject to ‘headline’ moments — see the recent one-week resurgence of those stalwart meme stocks GME and AMC.

This is worth watching, as retail’s presence increases the impact of options trading on stock prices. It’s estimated that because of the crowd’s meme-induced fervor, retail has grown to represent [25%-plus of options trading](https://www.cnbc.com/2021/12/22/options-trading-activity-hits-record-powered-by-retail-investors.html) activity. Additionally, retail has a preference for shorter-dated (“lotto ticket”) options whose gamma profiles can lead to sizable hedging impacts on the underlying and some big-ticket equities ($TSLA, $GOOGL, $AAPL, and, surprise!, $GME) have recently announced or gone through stock splits which makes options contracts more affordable for smaller accounts.

This makes for a combustible mix.

![Volatility Skew Slope](/images/uploads/updates/quant-modeling-and-retail-flows-in-equity-options-markets/Quant-Modeling-and-Retail-Flows-2.png)

*Source: SpiderRock data — A decade of AAPL options volume growth, punctuated by the pandemic and record options trading.*

![Quant Modeling and Retail Flows 3](/images/uploads/updates/quant-modeling-and-retail-flows-in-equity-options-markets/Quant-Modeling-and-Retail-Flows-3.png)

*Source: SpiderRock data — A decade of AAPL options volume growth, punctuated by the pandemic and record options trading.*

Institutional holders of single-names alongside options-centric and volatility traders need to be aware of those areas of the market that are subject, or prone to be subject, to these flows — both to better identify opportunities and calibrate risk profiles. SpiderRock offers robust historical and real-time options data and analytics that traders and portfolio managers can integrate with their equity factor analysis and risk management systems, or for their own bespoke alpha-generating purposes. Based on SpiderRock data sets — offered in [an](/data/options-analytics/) [array](/data/stocks-options-futures/) [of](/data/historical-data-analytics/) intraday, real-time, and EOD data packages— one can identify market actors, such as retail, institutional, or algorithmic flows.

Our quants have been playing in these sandboxes for years — they will tell you that there is no single, optimal way to apply machine learning and/or artificial intelligence to best crunch the data. Instead, it requires having a common framework for your approach, self-awareness of one’s assumptions, and a hearty dose of pragmatism. SpiderRock’s [data offerings](/data/historical-data-analytics/) cater both to equity and sophisticated volatility traders (though the latter group also has to harness extensive domain expertise of subjects like implied volatility and auction structures to best utilize the data.)

Here are further considerations to ponder:

- Parsing flow data is more appropriate for regime identification or range identification and less relevant for absolute forecasts of price, although alongside order book data can provide informational context for forecasts.
- Anyone telling you they can use this data for precision forecasts is likely a talking head and not being transparent
- A machine-learning (ML) blackbox approach to pattern recognition can get you signals, but will likely take longer than an approach that tilts more towards artificial intelligence (AI) approaches. But as you stray further and further from a blackbox, you become more prey to your own personal assumptions about the functioning of markets, so be wary of too many shortcuts based on ‘market truisms.’ It can be dependent on the degree to which the data-wrangler-in-chief applies a light touch or a heavy hand.
- As meme frenzies have shown, trade activity doesn’t have to be “sensible,” “logical,” or “underpinned by good fundamentals” to make tremendous impacts, so be ready to be uncomfortable with the data.
- It could be beneficial for an organization to embed some of its data-crunching tools into its execution engine or data provision service.

For more on SpiderRock’s offerings, please explore [our site](/data/historical-data-analytics/options-greeks/) or reach out to [gwtsales@spiderrock.net](mailto:gwtsales@spiderrock.net).
