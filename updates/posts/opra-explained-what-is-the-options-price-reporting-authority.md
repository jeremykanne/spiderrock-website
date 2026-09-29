---
title: "OPRA Explained: What is the Options Price Reporting Authority?"
date: 2021-06-29
summary: "Accurate real-time data is essential to the proper functioning of the options market, but it would be enormously challenging for individual organizations to collect and process options market data."
image: /images/uploads/updates/opra-explained-what-is-the-options-price-reporting-authority/0621-018-OPRA-Explained-Blog-Graphic-BLOG-768x505.jpg
image_alt: "OPRA Explained: What is the Options Price Reporting Authority?"
categories:
  - "Data & Analytics"
---

Accurate real-time data is essential to the proper functioning of the options market, but it would be enormously challenging for individual organizations to collect and process options market data. Exchanges involved in options trading generate orders of magnitude data more than other asset classes, including equities. While it might be possible for traders to gather data from every exchange, it’s not practical, and it would limit the market’s liquidity and efficiency.

For an efficient market to exist, options data must be consolidated. In the U.S., that is the [Options Price Reporting Authority’s](https://www.opraplan.com) (OPRA) role. It collects, consolidates, and disseminates options data to various data consumers.

OPRA is a national market system plan that acts as a securities information processor. Its members, known as participants, are options exchanges from across the country, including the American Stock Exchange, the Chicago Board Options Exchange, NYSE Arca, and many more. OPRA collects quotes and other data from participant exchanges and combines them into the OPRA feeds.

The OPRA feed comprises a massive amount of data, including last sales reports and options quotes, which are re-quoted when the underlying assets change. To handle the entire feed, recipient organizations require a network capacity of at least 40 Gbps and the computational infrastructure to store and analyze such large data volumes.

## **Where Does OPRA Data Come From?**

Before we discuss how options traders access options market data from OPRA, it’s helpful to understand how OPRA and its users are organized. We have already looked at participants, the exchanges that supply OPRA with its data. Once data is gathered from the exchanges, it is disseminated via the OPRA options feed, which is consumed by organizations authorized to use it in different ways. Some feed consumers are end-user organizations with extensive compute infrastructure, but many organizations access the feed via an OPRA vendor.

OPRA vendors such as SpiderRock are organizations with the right to retransmit OPRA data to external entities, including other businesses and individuals. Investors and options traders may choose to access options data via a vendor like SpiderRock rather than from OPRA directly, for reasons we’ll discuss in the next section.

## **How do Traders Get OPRA Data?**

As you can see from the above, institutional investors and other businesses have two ways to access options feeds. They can contract with OPRA directly, or they can access the feed via a vendor. Companies that choose the direct route must have the networking and compute resources to ingest and analyze many gigabits of data each second. They are responsible for filtering and processing the data and computing greeks and volatiles in real-time.

Organizations may instead choose to access options feeds via a third-party OPRA vendor. The vendor does the work of ingesting the “firehose, ” normalizing the data, and creating a new feed that contains the information options traders need in a more usable format.

For example, the SpiderRock normalized OPRA feed reduces the feed’s size and computational requirements: our proprietary binary feed can be processed in a single thread on one core of a modern machine. It obviates the need for collocated or cloud infrastructure capable of ingesting and processing multi-gigabyte feeds in real-time.

Furthermore, OPRA vendors can add value to the data feed by carrying out the analytical work that would otherwise fall to subscribers. In SpiderRock’s case, in addition to a normalized OPRA feed, we also provide a normalized OPRA with analytics feed that includes greeks, bid/ask implied volatility, and implied volatility surfaces. SpiderRock’s feeds empower subscribers to access real-time options data without the infrastructure investment that would typically demand.

Finally, OPRA vendors provide more diverse ways to access OPRA feeds. Our APIs allow subscribers to build bespoke feed handlers or leverage our C++/C# APIs to integrate feed data into their applications and services. We also provide a hosting service so that subscribers can host their applications on our hardware, accessing them via remote end-points.

## **OPRA Migration to Pillar: How Are Traders Affected?**

On July 26, 2021, [OPRA will migrate](/updates/opra-migration-to-new-pillar-sip-platform/) to a new data feed platform called Pillar SIP. Pillar makes [numerous changes](https://www.ctaplan.com/publicdocs/ctaplan/CTA_Pillar_SIP_Migration_Presentation.pdf) to the feed’s infrastructure and format, which means organizations that ingest the raw options feed will have to modify their systems and test that they work correctly with the new platform.

SpiderRock customers who use our smart options feed are insulated from these changes. We have already adapted our system to Pillar. Migrating from the OPRA feed to the SpiderRock options feed will help your organization adapt to OPRA changes while taking advantage of a normalized feed that reduces hardware requirements.

[Contact SpiderRock today](/contact-us/) to learn more about our smart options feed and our full range of historical and real-time market data and analytics services.
