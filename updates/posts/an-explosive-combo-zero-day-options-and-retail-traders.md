---
title: "An Explosive Combo: Zero-Day Options and Retail Traders"
date: 2023-05-03
summary: "The options market has been witnessing a surge of activity from retail traders looking for ways to profit from short-term price movements and volatility."
image: /images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders/0DayOptions-Image-768x486.jpg
image_alt: "An Explosive Combo: Zero-Day Options and Retail Traders"
categories:
  - "Data & Analytics"
---

The options market has been witnessing a surge of activity from retail traders looking for ways to profit from short-term price movements and volatility. One of the most popular strategies among these traders is to trade options that expire within a day, also known as zero-day-to-expiry (0DTE) options.

**What are 0DTE options and why are they attractive?**

[Options](/data/resources/glossary/) are contracts that give the buyer the right, but not the obligation, to buy or sell an underlying asset at a specified price and time. The seller of the option, also known as the writer, receives a premium from the buyer in exchange for taking on the risk of fulfilling the contract if the buyer exercises it. Options have different expiration dates, ranging from weekly to monthly to quarterly. 0DTE options are unique options that expire on the same day they are traded. They are available for indices, such as the S&P 500 or the Nasdaq 100, or highly liquid stocks like Apple or Tesla.  Among the reasons that 0DTE options are attractive to retail traders, we note:

– They offer a high leverage effect, meaning that a small amount of money can control a large amount of exposure to the underlying asset.

– They have a low cost of entry, as the premiums are typically cheap due to the short time value.

– They allow traders to capitalize on intraday price movements and [volatility spikes](/data/resources/glossary/), which can be driven by news events, earnings reports, or market sentiment.

– They provide flexibility and variety, as traders can choose from different strike prices and strategies, such as buying calls or puts, selling covered or naked options, or creating spreads or combinations.

The traded activity in these options increased significantly in the last year. We illustrate below the top 10 names traded on the day of the Silicon Valley Bank crash (3/10/23), grouped by option type and overlaid with a relatively conservative proxy of the retail option volume component (the Green line-symbol trace) based on the internalized and small options trades executed electronically:

![0DTE 1](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders/0DTE-1.png)

Even if data reflects only one day, some of the trends recognized are typical in the current environment. We note the bullish sentiment among traders for some of the names that belong to the “meme” subset (TSLA, BAC, AMZN, AMD) that are correlated with a higher contribution of the retail traders. Overall, the 0DTE option trading volume is dominated by the index options (SPY, SPXW, QQQ) and TSLA. Although the institutional traders and market makers are responsible for most of the trading volume, the retail traders have a strong contribution of up to 20% of the volume in the “behavioral” names (BAC, AMZN, AMD) that are most frequently mentioned in the Reddit groups.

## **What are the risks and challenges of trading 0DTE options?**

While 0DTE options can offer potentially high returns in a brief time span, they also come with significant risks and challenges that traders need to be aware of:

– The extremely low probability of success, as the underlying asset needs to move in the desired direction by a large enough magnitude within a narrow time. Otherwise, the option will expire worthless, and the buyer will lose the entire premium paid.

– 0DTE options expose traders to unlimited losses if they sell options without owning the underlying asset or another offsetting option, as the seller has an obligation to deliver or buy the underlying asset at the strike price if the buyer exercises the option.

– They require constant monitoring and quick, real-time decision-making, as the price and value of 0DTE options can change rapidly and unpredictably throughout the day.

– They can be affected by several factors beyond the price movement of the underlying asset, such as implied volatility, bid-ask spreads, liquidity, and market depth.

These factors can influence the pricing and availability of 0DTE options, making them more difficult to trade profitably.  To illustrate these observations, we plot the average Delta per strike moneyness profile (approximately the probability that the option will expire profitably) together with traded option volume grouped by calls and puts at the start and end of the trading session using historical option data:

![0DTE 2](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders/0DTE-2.png)

Note the binary shape of the [Delta Greek](/data/resources/glossary/) clustered either around zero or one, indicating that options lost most of their time value except some lower strike regions (OTM puts and ITM calls) where certain names (some ETFs including KRE containing the regional banks and other names) where the options have unexpected time value left. In the opening hour, there is also a significant volume of speculative calls (with a percent strike greater than 120%) and protective or “fear” expressing puts (percent strike between 80% and 90%) trading.

## **How are 0DTE options changing the market dynamics?**

The growing popularity of 0DTE options among retail traders has been impacting the overall market dynamics and behavior. Some of the effects include:

– Increasing volatility and volume in both the options and stock markets, especially during the last hour of trading when most 0DTE options expire. This can create feedback loops and self-fulfilling prophecies as traders react to price movements and try to close their positions before expiration.

– Creating arbitrage opportunities and hedging pressures for institutional investors and market makers, who can exploit price discrepancies and imbalances between different markets and instruments. For example, some hedge funds have been using 0DTE options to bet on large moves in individual stocks or sectors ahead of earnings announcements or other catalysts.

– Challenging traditional valuation models and assumptions, as 0DTE options introduce new sources of uncertainty and noise into the market. For example, some analysts have argued that 0DTE options have distorted the implied [volatility surface](/data/resources/glossary/) and skew of certain indices or stocks, making them appear more expensive or cheap than they really are.

SpiderRock Gateway option printset offers valuable information about the market dynamics and the flow of money in 0DTE option trading with [historical options data](/data/historical-data-analytics/options-greeks/). To analyze profit and loss data, one can look at the expected profit and loss of market makers’ hedged positions as illustrated below using the data on the same event date 3/10/2023 (SVB crash). The market maker label is implied by considering the option trade side being buy or sell if executed at bid and offer, respectively. These positions are assumed to close at the theoretical SpiderRock surface price ten minutes (Spiderrock dataset has also available the one minute post trade surface and market data) after the trade begins:

![0DTE 3](/images/uploads/updates/an-explosive-combo-zero-day-options-and-retail-traders/0DTE-3.png)

The average profit and loss of these hedged trades are shown as a percentage of the underlying price. The results are displayed based on the total call option volume and categorized by market sentiment (Green for bullish sentiment when call volume is double the put volume, and Red for bearish sentiment when the put volume is twice the call volume). The [options data](/data/historical-data-analytics/options-greeks/) is also sorted by the estimated retail volume, determined by the marker size. We note some both expected and compelling findings:

- Market makers generally have positive profits, with some significant gains in well-known “meme” stocks like DKNG, SHOP, ULTA, and GME, which have a large retail volume.
- Market makers have larger profits in names with lower total call volume (under 50000 contracts) and larger retail volume components.
- There is bullish sentiment and relatively large retail size in inflation names such as KO, GLD, GDX, and SLV.
- There is bearish sentiment and institutional trading in the financial sector, driven by XLF, AFRM, SI, and COIN, with the latter two being impacted by the FTX crash.
- Market makers show much smaller profits in highly liquid ETFs (QQQ) and highly liquid names (META, AMD) even if the retail volume component is large.

These observations can be further analyzed to potentially create consistent metrics for use in the investment industry. More details will be provided in a follow-up, more comprehensive work. [0DTE options](/data/resources/glossary/) are a fascinating phenomenon that reflects the changing landscape and preferences of retail traders in today’s markets. While they offer a unique way to speculate on short-term price movements and volatility, they also entail significant risks and challenges that require careful consideration and preparation. As more traders embrace this strategy, it will be interesting to estimate in more detail the impact of 0DTE option trading on option market dynamics and to understand the information spillover into the behavior of the underlying instruments with [option price data](/data/historical-data-analytics/options-greeks/).

Options involve risk and are not suitable for all investors. Below is a link to the OCC option disclosure document that explains the characteristics and risks of exchange traded options: [https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)
