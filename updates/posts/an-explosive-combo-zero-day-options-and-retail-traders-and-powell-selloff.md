---
title: "An Explosive Combo: Zero-Day Options and Retail Traders and “Powell” Selloff"
date: 2023-11-20
summary: "The options market has been witnessing a surge of activity from retail traders who are looking for ways to profit from short-term price movements and volatility."
image: /images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders-and-powell-selloff/11.10-Blog-Pic-768x398.png
image_alt: "An Explosive Combo: Zero-Day Options and Retail Traders and “Powell” Selloff"
categories:
  - "Data & Analytics"
---

The options market has been witnessing a surge of activity from retail traders who are looking for ways to profit from short-term price movements and volatility. One of the most popular strategies among these traders is to trade options that expire within a day, also known as zero-day-to-expiry (0DTE) options.

## **What are 0DTE options and why are they attractive?**

[Options](/data/resources/glossary/) are contracts that give the buyer the right, but not the obligation, to buy or sell an underlying asset at a specified price and time. The seller of the option, also known as the writer, receives a premium from the buyer in exchange for taking on the risk of fulfilling the contract if the buyer exercises it.

Options have different expiration dates, ranging from weekly to monthly to quarterly. 0DTE options are a special type of options that expire on the same day they are traded. They are available daily for indices, such as the S&P 500 or the Nasdaq 100, or highly liquid stocks, such as Apple or Tesla.

Among the reasons that 0DTE options are attractive to retail traders, we note:

- They offer a high leverage effect, meaning that a small amount of money can control a large amount of exposure to the underlying asset.
- They have a low cost of entry, as the premiums are typically cheap due to the short time value.
- They allow traders to capitalize on intraday price movements and volatility spikes, which can be driven by news events, earnings reports, or market sentiment.
- They provide flexibility and variety, as traders can choose from different strike prices and strategies, such as buying calls or puts, selling covered or naked options, or creating spreads or combinations.

The traded activity in these options has increased significantly in the last two years. We illustrate below the top 10 names traded (sorted by the total 0DTE option volume) in one of the recent days when Fed Chairman Powell’s comments related to pursuing a tighter monetary policy for a long period induced a market selloff (10/20/23). We plot the data grouped by the option type and overlaid with a relatively conservative proxy of the retail option volume component (the Green line-symbol trace) based on the internalized and small option trades executed electronically.

![11.09 Blog Pic 1](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders-and-powell-selloff/11.09-Blog-Pic-1.png)

Even if data reflect only one day, some of the trends recognized are typical in the current environment. We note the bullish sentiment among traders for some of the names that belong to the “meme” subset (TSLA, NVDA, AMZN, AMD) that are correlated with a higher contribution of the retail traders ranging between twenty and twenty-five percent of the total option volume. Overall, the 0DTE option trading volume is dominated by the index options (SPY, QQQ, SPXW) and TSLA and although the institutional traders and market makers are responsible for most of the trading volume, the retail traders have a strong contribution of up to 25% of the volume in the “behavioral” names (TSLA, NVDA, AMZN, AMD, META) that are frequently mentioned (post-COVID era) in the Reddit groups. Other notables are the bearish sentiment in TSLA (illustrated by the higher put volume) driven by missed estimates reported on the earnings call on Wed 10/18 yet the very bullish, speculative call volume in AMD, with a large retail contribution of approximately 25% of the option volume traded.

### **What are the risks and challenges of trading 0DTE options?**

While 0DTE options can offer potentially high returns in a brief period, they also come with significant risks and challenges that traders need to be aware of:

- The extremely low probability of success, as the underlying asset needs to move in the desired direction by a large enough magnitude within a narrow time. Otherwise, the option will expire worthless, and the buyer will lose the entire premium paid.
- 0DTE options expose traders to unlimited losses if they sell options without owning the underlying asset or another offsetting option, as the seller must deliver or buy the underlying asset at the strike price if the buyer exercises the option.
- They require constant monitoring and quick, real-time decision-making, as the price and value of 0DTE options can change rapidly and unpredictably throughout the day.
- They can be affected by several factors beyond the price movement of the underlying asset, such as implied volatility, bid-ask spreads, liquidity, and market depth. These factors can influence the pricing and availability of 0DTE options and make them more difficult to trade profitably.

To illustrate these observations we plot the average Delta per strike moneyness profile (approximately the probability that the option will expire profitable) together with traded option volume grouped by calls and puts at the start and end of the trading session:

![11.09 Blog Pic 2](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders-and-powell-selloff/11.09-Blog-Pic-2.png)

Note the binary shape of the Delta Greek clustered either around zero or one indicating that options lost most of their time value. Still, there are regions with lower and higher strikes than the ATM value of one hundred where certain names ( mostly those belonging to the “meme” stocks set like GME, AMC, RIOT, SEDG, RIVN, MARA, AFRM, CVNA ) have options with unexpected time value left. In the opening hour, there is also a significant volume of speculative calls (with the percent strike greater than 105%) and protective or “fear” expressing puts (percent strike less than 95%) trading.

## **How are 0DTE options changing the market dynamics?**

The growing popularity of 0DTE options among retail traders has been impacting the overall market dynamics and behavior. Some of the effects include:

- Increasing volatility and volume in both the options and stock markets, especially during the last hour of trading when 0DTE options expire. This can create feedback loops and self-fulfilling prophecies, as traders react to price movements and try to close their positions before expiration.
- Creating arbitrage opportunities and hedging pressures for institutional investors and market makers, who can exploit price discrepancies and imbalances between different markets and instruments. For example, some hedge funds have been using 0DTE options to bet on large moves in individual stocks or sectors ahead of earnings announcements or other catalysts.
- Challenging traditional valuation models and assumptions, as 0DTE options introduce new sources of uncertainty and noise into the market. For example, some analysts have argued that 0DTE options have distorted the implied volatility surface and skew of certain indices or stocks, making them appear more expensive or cheap than they are.

[SpiderRock Gateway option](/data/historical-data-analytics/options-greeks/) printset offers valuable information about the market dynamics and the flow of money in 0DTE option trading. To analyze profit and loss data, one can look at the expected profit and loss of market makers’ hedged positions as illustrated below using the data on the same date 10/20/2023. The market maker label is implied by considering the option trade side being buy or sell if executed at bid and offer, respectively. These positions are assumed to close at the theoretical SpiderRock surface price one minute (SpiderRock dataset has also available the ten minutes post trade surface and market data) after the trade begins:

![11.09 Blog Pic 3](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders-and-powell-selloff/11.09-Blog-Pic-3.png)

The time scale of one minute is relevant as it shows also the market impact of larger orders, the market makers adjusting the bid and ask implied volatilities to balance the order flow.

The average profit and loss of these hedged trades are shown as a percentage of the underlying price. The results are displayed based on the total call option volume and categorized by market sentiment (Green for bullish sentiment when the call volume is double the put volume, and Red for bearish sentiment when the put volume is twice the call volume). The data is also sorted by the estimated retail volume, determined by the marker size. Note that in the above plot for clarity, we show only the top 100 names in terms of the total call option volume.

Across the whole data set (including the negative PnL region not illustrated in the figure), we note some both expected and compelling findings:

- Market makers generally have positive profits, with some significant gains in both “meme” stocks and ETFs like MARA, USO, SPXS, KO, NEM, and GOLD which have a large retail volume.
- Market makers have larger profits in names with lower total call volume (under 50,000 contracts) and larger retail volume components.
- There is bullish sentiment and relatively large retail size in inflation names such as KO, USO, and GOLD, and in leveraged ultra-short ETFs like SPXS and SQQQ which are favored by retail traders.
- There is bearish sentiment and institutional trading in the regional banking sector, driven by KRE, and in the electrical vehicle startup RIVN, the negative sentiment-surprising-maybe more of an effect of the TSLA drop on that day.
- Market makers show losses or low profits in highly liquid ETFs (SPY, TLT, SLV, GLD, XLF, XLE) and highly liquid names (META, BA, AA) even if the retail volume component is large.

These observations can be further analyzed to potentially create consistent metrics for use in the investment industry. More details will be provided in a follow-up, more comprehensive work.

0DTE options are a fascinating phenomenon that reflects the changing landscape and preferences of retail traders in today’s markets. While they offer a unique way to speculate on short-term price movements and volatility, they also entail significant risks and challenges that require careful consideration and preparation. As more traders embrace this strategy, it will be interesting to estimate in more detail the impact of 0DTE option trading on option market dynamics and to understand the information spillover into the behavior of the underlying instruments.

## References

(1) Zero Days to Expiration (0DTE) Options and How They Work.
[https://www.investopedia.com/zero-days-to-expiration-0dte-options-and-how-do-they-work-6753832](https://www.investopedia.com/zero-days-to-expiration-0dte-options-and-how-do-they-work-6753832)

(2) 0DTE Options: Retail Traders Explain Why They Risk It With Zero-Day …. [https://www.bloomberg.com/news/articles/2023-03-29/0dte-options-retail-traders-explain-why-they-risk-it-with-zero-day-options](https://www.bloomberg.com/news/articles/2023-03-29/0dte-options-retail-traders-explain-why-they-risk-it-with-zero-day-options)

(3) Here are 5 ways that trading in 0DTE stock options is changing how the market works. [https://www.msn.com/en-us/money/mutualfunds/here-are-5-ways-that-trading-in-0dte-stock-options-is-changing-how-the-market-works/ar-AA18WQTZ](https://www.msn.com/en-us/money/mutualfunds/here-are-5-ways-that-trading-in-0dte-stock-options-is-changing-how-the-market-works/ar-AA18WQTZ)

(4) Zero-Day Options Boom Is Turning Wall Street Trading on Its Head. [https://www.wealthmanagement.com/alternative-investments/zero-day-options-boom-turning-wall-street-trading-its-head](https://www.wealthmanagement.com/alternative-investments/zero-day-options-boom-turning-wall-street-trading-its-head)

(5) ‘Degenerate Gambling’ in Zero-Day Options Thrills Retail Traders. [https://news.bloomberglaw.com/securities-law/degenerate-gambling-in-zero-day-options-thrills-retail-traders](https://news.bloomberglaw.com/securities-law/degenerate-gambling-in-zero-day-options-thrills-retail-traders)

(6) New ETF looks to tap hot market for zero-day options, Sep 2023.

[New ETF looks to tap hot market for zero-day options | Reuters](https://www.reuters.com/business/finance/new-etf-looks-tap-hot-market-zero-day-options-2023-09-14/)

Options involve risk and are not suitable for all investors. Below is a link to the OCC option disclosure document that explains the characteristics and risks of exchange traded options: 

[https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)  

## **About SpiderRock Gateway Technologies**

[SpiderRock Gateway Technologies](/data/) (“SpiderRock”) is the data and analytics division of SpiderRock Technology Solutions, a provider of industry-leading options trading solutions. SpiderRock is an exchange-licensed redistributor of market data, providing US stocks, options, and futures market data in a raw and normalized format. SpiderRock’s proprietary live analytics offer low-cost delivery of market data and options analytics without requiring clients to make a significant investment in infrastructure.  

For more information, please visit [www.spiderrock.net](/), follow us on Twitter at [@SpiderRockChi](https://twitter.com/SpiderRockChi), and visit our [LinkedIn Page](https://www.linkedin.com/company/spiderrock).
