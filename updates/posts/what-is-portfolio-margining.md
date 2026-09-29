---
title: "What is Portfolio Margining?"
date: 2021-08-17
summary: "Portfolio margining is a margining strategy used to determine how much risk a broker can take on when lending to an investor."
image: /images/uploads/updates/what-is-portfolio-margining/0921-009-SpiderRock-Blog-Graphics-Cleanup-Portfolio-Margining-768x505.jpg
image_alt: "What is Portfolio Margining?"
categories:
  - "Data & Analytics"
---

Portfolio margining is a margining strategy used to determine how much risk a broker can take on when lending to an investor. The margin is the collateral an investor must deposit to cover the risk of buying or borrowing financial instruments with cash borrowed from the broker. Like other margining strategies, portfolio margining is a form of risk management intended to prevent situations in which excessive lending damages brokers and destabilizes the market.

Before we get to the specifics, it’s worth clarifying the differences between trading stocks “on margin” and margins in the options market. A trader with a margin account must provide at least 50% of the cash for stocks, which means they can borrow 50% or less. In the options market, margin includes the cash or securities that a trader uses as collateral to demonstrate their ability to fulfill the obligations of their options contract.

Portfolio margining is a risk-based margining methodology that uses a more sophisticated model to determine margins than Federal Reserve’s Regulation T margin, the source of the 50% margin we mentioned above. Regulation T limits the amount of credit a broker can extend to a margin account to 50% of the security’s purchase price. The trader must deposit the remainder. Margin accounts must therefore fund at least 50% of their position. However, percentage-based margins rely on a fairly crude measure. That 50% doesn’t reflect real-world risk. A trader who invests in high-risk securities has the same borrowing constraints as a trader with a hedged low-risk portfolio.

Portfolio margin accounts are intended to overcome this shortcoming by basing margin requirements on the total calculated risk posed by the portfolio. A lower risk allows a broker to extend more credit than a higher risk, and a hedged position will have a lower margin requirement than a more risky position.

## **Portfolio Margin vs. Strategy Margin**

Historically, portfolio margin accounts were available to market-makers, whereas customer accounts used a different margining methodology: the strategy-based margin. Strategy-based margins are based on a set of rules intended to protect the broker against worst-case outcomes. For example, a strategy-margin account may not be able to borrow for option long calls and puts. Strategy-based margins help brokers to manage risk. However, brokers have in recent years made portfolio accounts more widely available to investors who fulfill the minimum requirements, which include account equity of at least $100,000 (although some brokers ask for more).

## **How Is the Portfolio Margin Calculated in the Options Market?**

Risk-based margins for options are calculated according to the Theoretical Intermarket Margin System (TIMS), developed by the Options Clearing Corporation. The methodology uses an options pricing model that includes inputs such as underlying price, strike price, time to expiration, volatility, and others.

These prices are then stress tested against a series of theoretical market conditions— -10% to +12% in the case of options for assets in broad-based indices. Potential profit and loss calculations are made based on those theoretical values. The largest potential theoretical loss is used as the portfolio margin requirement. Depending on the portfolio, portfolio margins can be significantly lower than Reg T margins.

## **Portfolio Margins, Scenario Analysis, and Risk Management**

The TIMS portfolio margin calculations are an example of scenario analysis, a technique investors use to estimate their portfolio’s value and level of risk. Scenario analysis aims to calculate the changes in a portfolio’s value in response to different situations. Analysts often stress test portfolios by examining worst-case scenarios, providing data they can then use to ascertain and manage risk.

SpiderRock offers a variety of [GUI tools](/platform/gui-tools/) to help our clients to carry out scenario analysis. These include the Risk Manager, which aggregates live risk and P&L attributions across assets, allowing users to easily compose and analyze custom risk scenarios for their portfolio. Risk Manager is part of a comprehensive suite of [risk management tools](/platform/risk-management/) to aid analysis and risk management, including Risk Viewer, Hedge Tool, and a variety of trending and historical data tools.
