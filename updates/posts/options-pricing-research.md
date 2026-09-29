---
title: "The Benefits of Transacted Options Prices in Quantitative Research"
date: 2021-11-29
summary: "As equity derivatives markets have grown in terms of volumes, products offered, number of exchanges, and technological sophistication, so too has the literature surrounding options pricing models and the challenges posed by quantifying that all-important variable: volatility."
image: /images/uploads/updates/options-pricing-research/spider-rock-web-graphic-formatted-768x505.jpg
image_alt: "Options Pricing Models Research"
categories:
  - "Data & Analytics"
  - "White Papers"
---

As equity derivatives markets have grown in terms of volumes, products offered, number of exchanges, and technological sophistication, so too has the literature surrounding options pricing models and the challenges posed by quantifying that all-important variable: volatility.

In the working paper, [Option Pricing via Breakeven Volatility](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3938897) by Blair Hull, Anlong Li, and Xiao Qiao, the authors, through linking options characteristics (like moneyness) to breakeven volatility, develop “a nonparametric approach to pricing options without the need to specify the underlying price process” through analysis of 400,000 options traded on the S&P 500 (SPX). When applied to a simulated trading strategy the approach showed economic value.

The results are worthy of an in-depth look for practitioners, but the focus of this piece regards the authors’ approach to conducting their research, which is a notable departure from prior work on options pricing models. As early as the mid-90s, researchers acknowledged the potential shortcomings of existing pricing studies conducted absent real time options data.

Entropy-obsessed Professor of Finance Michael Stutzer wrote in 1996 “there is need for a more detailed comparison of…nonparametric model values to actual transaction prices.”

It took market watchers 25 years, but that need has now begun to be addressed with the help of new sources of options data from SpiderRock.

SpiderRock offers [historical options prices](/data/historical-data-analytics/options-greeks/) and [options analytics](/data/options-analytics/) (the Greeks, volatility surfaces, et al.) that, importantly, are derived from live data pulled from its trading systems. The goal is immensely practical: use real-time options data that traders already rely on to create trading signals, rather than data that isn’t based on the full reality of historical activity in the options market.

As the paper notes, the researchers used SpiderRock’s options data for a few particular reasons.

For one, SpiderRock is able to synchronize options prices and stock prices to [real-time feeds](/data/stocks-options-futures/) whereas other options database providers are more challenged to do so if they lack the robust trading technology infrastructure. A lack of precisely synched options and their underlying prices, frequently happening with data pertaining to closing prints, adds an unnecessary layer of complexity and potential error to those making data-driven trading decisions.

Secondly, SpiderRock independently fits call and put prices and the pricing data is then transformed into a single [volatility curve](/data/historical-data-analytics/volatility-surfaces/). This differs from the convention in academic options data where calls and puts are interpolated with a weighted scheme — a suboptimal arrangement when option types are different. SpiderRock’s options datasets cater to those who want to use forward prices derived from put-call parity in implied volatility calculations, which is particularly appropriate for index options where put-call parity is more negligible than observed in individual equities that are hard-to-borrow.

SpiderRock’s historical option prices capture and reflect these nuances in options trading to the benefit of funds, prop groups, and individual traders looking for actionable insight into the cutting edge of volatility trading.

[Click here to download the full paper, Option Pricing via Breakeven Volatility.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3938897)
