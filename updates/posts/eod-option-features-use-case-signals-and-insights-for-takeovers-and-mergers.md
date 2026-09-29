---
title: "EOD Option Features Use Case: Signals and Insights for Takeovers and Mergers"
date: 2025-08-12
summary: "SpiderRock’s Option Features Dataset is a curated suite of analytics designed to leverage option market sentiment and dynamics for deeper insights into market behavior."
image: /images/uploads/updates/eod-option-features-use-case-signals-and-insights-for-takeovers-and-mergers/EOD-Option-Features-Blog-768x398.jpg
image_alt: "EOD Option Features Use Case: Signals and Insights for Takeovers and Mergers"
categories:
  - "Data & Analytics"
---

[SpiderRock’s Option Features Dataset](/data/option-features-dataset/) is a curated suite of analytics designed to leverage option market sentiment and dynamics for deeper insights into market behavior. 

This dataset integrates underlying equity information and options data points from SpiderRock, such as volatility surfaces, implied volatility, liquidity measures, order flow, imbalances, implied metrics, and other baseline measures, making it a powerful resource for machine learning applications that drive understanding and data-informed decision-making. 

## **Relevant Metrics**

Several features in the [dataset](/data/option-features-dataset/) are relevant for analyzing merger events and augmenting stock alpha signals models. 

The main assumption behind the impact of option data on the underlying equities’ dynamics is the possible existence of valuable “private” data in the options markets (not insider information but more expert-based knowledge with lesser dissemination on the high-traffic standard channels). 

The actors with this information are usually known as “informed” traders, and the “informed trading” activity generally implies that trading direction foreshadows subsequent price jumps. 

The relevant time scales are approximately one month before the merger event and one week after, with increased focus on the days immediately preceding the event. 

Other factors present in informed option trading that “leak” in the stock market are: 

- large informed positions are easier to “hide” in the variety of strike prices available.
- option trading helps informed traders avoid the constraints (e.g., short-sale) in the stock price immediately before and after the takeover event.

In our EOD Option Features Dataset, we provide relevant features that can be used to add some insights to models that evaluate takeover candidates, in particular the speculative OTM five Delta call and the ten Delta put option volumes. 

These features illustrate the “tipping hypothesis” that suggests there is abnormal activity before the news arrives on the event date; activity that can be detected and augmented in downstream Delta-one models. 

In the examples below, we show the outliers used  based on the “normal behavior” quantile range of 15-85 (these bounds ideally are obtained by training the model) of the call and put volumes against the aggregated values for each day within “days-before-event” across a “training” period of one year and several months before the event date. 

We also construct another signal using the ratio of the speculative OTM call volume over the average daily Call volume based on the last month of data before each “days-before-event” date. The current month before the event data is plotted with red markers. 

Note that the outliers in trading activity occur within five business days of the event, and also earlier, from two to three weeks before the event. 

We observe outliers shown by these features (call and put OTM volumes and the call to average daily call volume ratio) surging as the announcement day approaches, peaking within one week from Day 0 (event date). There is also statistically significant activity from two to three weeks before the event. 

## **Examples**

We demonstrate events in the financial space (ICE, the acquirer) and energy (COP acquirer), showing the abnormal identification examples for both the takeover and the acquirer names. 

#### **ICE-BKI**

![Features Dataset Example 1](/images/uploads/updates/eod-option-features-use-case-signals-and-insights-for-takeovers-and-mergers/Features-Dataset-Example-1.jpg)![Features Dataset Example 2](/images/uploads/updates/eod-option-features-use-case-signals-and-insights-for-takeovers-and-mergers/Features-Dataset-Example-2.jpg)

#### **COP-MRO**

![Features Dataset Example 3](/images/uploads/updates/eod-option-features-use-case-signals-and-insights-for-takeovers-and-mergers/Features-Dataset-Example-3.jpg)![Features Dataset Example 4](/images/uploads/updates/eod-option-features-use-case-signals-and-insights-for-takeovers-and-mergers/Features-Dataset-Example-4-1.jpg)

### **References**

1. [Directional Options Trading Volume around Analysts’ Announcements, Lykourgos Alexiou, Mattia Bevilacqua, and Zacharias Petrou](https://www.bayes.citystgeorges.ac.uk/__data/assets/pdf_file/0009/729693/Alexiou-Directional-Options-Trading-Volume-around-Analysts-Announcements.pdf).
2. [Analyst Tipping: New Evidence from Directional Options Trading Volume and FINRA Rule 2241, L Alexiou, M Bevilacqua and Z Petrou, 2025.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4465293)
3. [Informational Content of Option Volume Prior to Takeovers, Charles Cao, Zhiwu Chen and John M. Griffin, The Journal of Business , Vol. 78, No. 3 (May 2005)](https://www.jstor.org/stable/10.1086/429654?seq=1#metadata_info_tab_contents).
4. [Options trading prior to takeover rumors, Hamed Khadivar, Frederick Davis, International Journal of Managerial Finance · March 2022](https://ideas.repec.org/a/eme/ijmfpp/ijmf-04-2021-0209.html).
5. [Informed Options Trading prior to M&A Announcements: Insider Trading?, Patrick Augustin† Menachem Brenner‡ Marti G. Subrahmanyam, May 2019](https://pubsonline.informs.org/doi/epdf/10.1287/mnsc.2018.3122).
6. [Mergers-Acquisitions – events (Excel)](https://spiderrockdechelly-my.sharepoint.com/:x:/g/personal/radu_mondescu_spiderrock_net/EShi6ac0ShVKmRch4QaRLd4BHDtDpxo7JBCptlM1KakvNQ?e=eLgq4R).

### **About SpiderRock Data and Analytics**

SpiderRock Data & Analytics is a division of  SpiderRock Technology Solutions, a provider of industry-leading options trading solutions. SpiderRock Data and Analytics is an exchange-licensed redistributor of market data, providing US stocks and options market data in a raw and normalized format.   

SpiderRock’s proprietary live analytics offer low-cost delivery of market data and options analytics without requiring clients to make a significant investment in infrastructure. In addition, SpiderRock’s robust historical datasets updated daily from live markets are ideal for research, back testing, and making data-driven decisions. 

For more information, visit [https://www.spiderrock.net/data/](/data/), follow us on X at [@SpiderRockChi](https://twitter.com/SpiderRockChi), and visit our [LinkedIn page.](https://www.linkedin.com/company/spiderrock)
