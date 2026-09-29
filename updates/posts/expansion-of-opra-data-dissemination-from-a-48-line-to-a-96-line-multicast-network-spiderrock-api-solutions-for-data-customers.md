---
title: "SpiderRock API Solutions for Data Customers – Expansion of OPRA Data Dissemination from a 48-Line to a 96-Line Multicast Network."
date: 2023-06-14
summary: "On October 9th, 2023, Securities Industry Automation Corporation (SIAC) will be upgrading their Options Price Reporting Authority (OPRA) feed from 48 to 96 multicast channels."
image: /images/uploads/updates/expansion-of-opra-data-dissemination-from-a-48-line-to-a-96-line-multicast-network-spiderrock-api-solutions-for-data-customers/MLink-Blog-Post-2-Final-768x398.png
image_alt: "SpiderRock API Solutions for Data Customers – Expansion of OPRA Data Dissemination from a 48-Line to a 96-Line Multicast Network."
categories:
  - "Data & Analytics"
---

On October 9th, 2023, Securities Industry Automation Corporation (SIAC) will be upgrading their [Options Price Reporting Authority (OPRA)](/updates/opra-explained-what-is-the-options-price-reporting-authority/) feed from 48 to 96 multicast channels. This change will result in a doubling of peak burst data rates as these channels are used simultaneously for disseminating US options market data. [SpiderRock Data & Analytics](/data/) is upgrading key aspects of current infrastructure ahead of this change to be prepared for these higher peak burst data rates, as well as for handling the future increases in options market data that will follow.

With this recent change, many larger firms with the capability to make these investments are expanding to 100G networks, switches, ports and vendor linkages to absorb the anticipated spikes in volume. However, it will be more difficult for smaller trading firms or groups that are in need of OPRA quote and trade data, but are not dependent on ultra-low latency connectivity for their trading GUIs, risk management systems or trading applications to justify these investments to keep up.

As an alternative for OPRA users, SpiderRock Data & Analytics has released a new API with access to the primary OPRA feed data including NBBO quotes, size, and trades with bandwidth requirements that can be 1/10 or less of the raw feed. The [SpiderStream over MLink API](/data/spiderstream-market-data-api/) leverages [SpiderRock’s robust platform](/platform/) infrastructure to handle the demands of OPRA and other highly used feeds for stocks, options, and futures markets.  The API optionally provides additional analytics including implied quotes, option Greeks and other relevant risk parameters for users.

We have designed our API with high-capacity throughput in mind, facilitating multi-threaded connections by symbol groups, and user defined conflation settings.

MLink can be economically licensed by a single user who needs only a few symbols or firms that require the full U.S. listed market. Depending on your use case needs, data can be accessed either by Rest queries or WebSocket and in delayed or real-time. For standard use cases we provide delivery by JSON and for additional throughput Google protocol buffers. Network access is internet based or for higher capacity cloud options or direct connects are available.

To learn more, connect to us on [spiderrock.net/data](/data/) and follow the links to our new MLink API.

[About SpiderRock Data & Analytics:](/data/) SpiderRock Data & Analytics provides financial market data to a wide range of clients. SpiderRock Data & Analytics is part of SpiderRock Technology Solutions (“STS”), LLC. STS is a trading technology provider that creates and deploys some of the most innovative algorithmic routing and risk management solutions commercially available to service large hedge funds, bank trading desks and proprietary trading firms around the world.
