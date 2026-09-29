---
title: "The Quagmire of Historical Options Closing Price"
date: 2021-12-08
summary: "At SpiderRock, we often get questions about historical stock options closing prices. Knowing the methodology used to capture your closing prices is fundamentally part of the data analysis being performed."
image: /images/uploads/updates/the-quagmire-of-historical-options-closing-price/1221-002-Quagmire-of-Historical-Option-Closing-Prices-Graphic-BLOG-768x505.jpg
image_alt: "Historical Options Price"
categories:
  - "Data & Analytics"
---

At SpiderRock, we often get questions about historical stock options closing prices. Knowing the methodology used to capture your closing prices is fundamentally part of the data analysis being performed. Unlike the underlying stocks, there is no official close for the NBBO (or settlement) distributed by the options exchanges, OPRA (Options Price Reporting Authority), or the OCC (Options Clearing Corporation).

In practice, the options closing prices a firm uses should vary based on the intended use case. Getting consistent, high-quality options closing price feeds, and [historical options closing prices](/data/historical-data-analytics/options-greeks/) is challenging because options markets can often close relatively wide and asymmetrically relative to the theoretical option value. To help explain different options closing marks methodologies, we need to divide the end-users into two groups.

The first group typically includes retail custodians, financial advisors, and retail customers subject to reg-T margin. These firms tend to be interested in a closing price calculated more mechanically, like stock closing prices, directly from the data feed. This group tends not to care as much about how correct the closing mark is in a valuation or risk sense. Some firms may even skew this mechanical approach to be conservative in the valuation or risk sense for option holders. This approach can introduce a high standard deviation of a portfolio’s return (artificially low Sharpe ratio) because it inconsistently values the options over time.

The second group of users includes traders at proprietary or hedge funds, researchers who model option value over time, and those who calculate portfolio or risk-based margins. This group focuses on the best estimate of an option value and minimizing day-to-day marking errors that can inflate the standard deviation of returns or margin requirements. The best closing prices for these firms are based on theoretical price surfaces, usually done by fitting prices across all the options (calls and puts) in each expiration.

How are closing prices estimated for each group?

For firms in the first group, the approaches typically involve one of the following methods:

- Using the average of the last bid or ask price directly from the feed
- Using the last print of the option directly
- Creating some hybrid of the two approaches based on some threshold of last print relative to the closing time

For the firms in the second group, the closing price is calculated by taking the option and bid and ask prices just before the close, synchronizing this with the stock price, and using this data to create options pricing surfaces to estimate the option’s value. With this approach, marks are still between the bid and ask, and the idea is to introduce consistency between call and put and neighboring strikes. This type of methodology is used in practice by the OCC and underpins margin calculations provided to members.

Given no standard, one challenge is often for a firm to match the calculations of other firms for margin or daily closing profit and loss. If you need to do this, you must understand how a firm implements closing marks and mimic them. This is only practical with the simple methodologies discussed. If you are using historical options prices in a model to manage risk or identify trade opportunities, you need to be sure you are using options data that has been archived with robust methods of estimating the theoretical price.

SpiderRock has years of experience working with clients to manage these issues. SpiderRock’s [historical data products](/data/historical-data-analytics/) provide a consistent closing mark for the trader, researcher, and risk manager by taking price snapshots for each option series 1 minute before the market close and using this in combination with our synchronized underlying data and pricing surfaces to provide high quality and consistent theoretical closing marks. SpiderRock provides this closing data as a daily feed and access to over ten years of historical options price data using this same approach. For firms more interested in matching publicly available closing data found on the internet or in retail accounts, we capture the opening prices along with the closing bid and ask and last prices for all series and provide this as a daily EOD feed for clients who prefer these mechanical methods.

For more information on historical options closing prices, or options price feeds, or other historical options datasets and analytics, you can contact SpiderRock at [gwtsales@spiderrock.net](mailto:gwtsales@spiderrock.net)
