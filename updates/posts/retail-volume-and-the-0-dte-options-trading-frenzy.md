---
title: "Retail Volume and the 0-DTE Options Trading Frenzy"
date: 2023-03-15
summary: "The recent increased interest in retail option flow since the meme stock spikes during COVID has now extended to the trading of option contracts set to expire at the end of the current trading day (known as 0-DTE options)."
image: /images/uploads/updates/retail-volume-and-the-0-dte-options-trading-frenzy/Retail-Frenzy-Pic-768x488.jpg
image_alt: "Retail Volume and the 0-DTE Options Trading Frenzy"
categories:
  - "Data & Analytics"
---

The recent increased interest in retail option flow since the meme stock spikes during COVID has now extended to the trading of option contracts set to expire at the end of the current trading day (known as 0-DTE options). These 0-DTE options could have a subsequent market impact on the target names and indirectly influence the investment and trading decisions of market participants.

Retail option flow cannot easily be measured from market data feeds because the order originator is not identified on publicly disseminated exchange data. However, a proxy measure for the retail option volume can be constructed using specific OPRA (Options Price Reporting Authority) trade type indicators found in OPRA’s option print data.

After some standard filtering (removing crossing markets and restricting to regular trading hours), we were able to aggregate option volumes for all names, including weeklies and EOM SPX options traded during the month of January of each of the last five years (from 2019 to 2023).

We then constructed three estimators of the retail order flow: (i) a single leg auction non-intermarket-sweep (retail_vol_noniso) using the trade type SLAN/SLCN, (ii) a small value trades (retail_vol_smallvalue) identified as electronic (AUTO) trades under five thousand dollars executed at best bid or ask, and (iii) a union of small lots (under 10 contracts) and small value trades (retail_vol_allint_smallszvalue). It should be noted that the retail_vol_noniso metric is an approximate lower bound of the retail flow as it characterizes only a subset of the routed retail volume. While no indicator predicts the absolute value of retail flow directly, the YOY (Year Over Year) changes reflect relative shifts.

Applying these estimators to the global macro environment and the overall market dynamics between 2019 and 2023 (illustrated in the chart below), we found that a regime change (due to the Covid-19 and inflationary onset factors) occurred after January of 2020 that led to a near doubling of retail and total option trading volumes.

Moreover, since this regime change, the percentage of the retail volume (excluding pure non-ISOs) remained constant which is contrary to commonly discussed trends.

![frenzy 1](/images/uploads/updates/retail-volume-and-the-0-dte-options-trading-frenzy/frenzy-1.png)

In light of the above, we wanted to analyze what was happening with 0-DTE trades. This analysis is illustrated in the following retail flow chart, which for practical purposes, includes only the non-ISO and small value flow indicators:

![frenzy 2](/images/uploads/updates/retail-volume-and-the-0-dte-options-trading-frenzy/frenzy-2.png)

The percentage values above the bars indicate the fraction of retail flow made up by 0-DTE option volume is constant across the 2020-2023 range. However, the absolute values (both retail flow and total 0-DTE options volume) increased significantly.

Finally, the chart below shows that, surprisingly, the SPXW volume increased significantly in 2023 but overall is much lower than the estimated retail 0-DTE trading.

![frenzy 3](/images/uploads/updates/retail-volume-and-the-0-dte-options-trading-frenzy/frenzy-3.png)

SpiderRock Data & Analytics daily option print datasets were used in producing the above analysis. If you have interest in obtaining this or any other datasets offered by SpiderRock Data & Analytics, please contact us at [datasales@spiderrock.net](mailto:datasales@spiderrock.net).

Options involve risk and are not suitable for all investors. Below is a link to the OCC option disclosure document that explains the characteristics and risks of exchange traded options: [https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)
