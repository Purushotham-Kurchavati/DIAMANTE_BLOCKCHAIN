# DIAMANTE_BLOCKCHAIN

# CryptoPioneers - Crowdfunding on Diamante Blockchain

## Overview

**CryptoPioneers** is a blockchain-based crowdfunding platform developed for the **Student AI Hackathon**. It is built on the **Diamante Blockchain** and enables secure, decentralized crowdfunding. Users can create campaigns, fund them with DIAM (Diamante's native asset), and issue campaign-specific tokens to backers, representing their stake in the campaign.

## Features

- **Campaign Creation**: Create new crowdfunding campaigns with unique tokens.
- **Trustlines**: Set up trustlines to hold campaign tokens.
- **Funding**: Fund campaigns using DIAM (Diamante's native asset).
- **Token Issuance**: Issue campaign-specific tokens (`CAMPAIGN`) to backers based on their contributions.

## Tech Stack

- **Blockchain**: Diamante (Testnet)
- **SDK**: Diamnet-SDK (JavaScript)
- **Languages**: JavaScript, Node.js
- **Network**: Diamante Testnet

## Prerequisites

To run this project locally, you need to have:

1. **Node.js** installed on your machine.
2. A basic understanding of blockchain technology and Diamante.
3. Internet access to interact with the Diamante testnet.

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/CryptoPioneers.git
cd CryptoPioneers
```

### 2. Install Dependencies

```bash
npm install diamnet-sdk
```

### 3. Run the Crowdfunding Script

To run the project, execute the following command:

```bash
node path/to/crowdfunding.js
```

### 4. Expected Output

- The console will display successful transactions such as:
  - Funded campaign
  - Trustlines created
  - Tokens issued to backers
  - Transaction details and logs for each action

## Project Structure

```
CryptoPioneers/
│
├── crowdfunding.js         # Main script handling campaign creation, funding, and token issuance
├── package.json            # Project metadata and dependencies
├── README.md               # Documentation of the project
```

## How It Works

1. **Create a Campaign**: 
   - A campaign account is created, funded, and trustlines are set up for holding the campaign token.

2. **Backers Join the Campaign**:
   - Backer accounts are created, and their accounts are funded. Each backer establishes trustlines to hold the campaign tokens.

3. **Fund the Campaign**:
   - Backers send DIAM (Diamante's native asset) to the campaign in exchange for campaign tokens.

4. **Token Distribution**:
   - Campaign tokens are issued proportionally to the backers based on their contributions.

### Example of Transactions

Here’s a sample transaction output showing the backer funding the campaign and receiving `CAMPAIGN` tokens:

```bash
Funded campaign: <campaign public key>
Trustlines created
Funded backer: <backer public key>
Backer <backer public key> funding campaign with 5 DIAM
Issued 5.0000000 CAMPAIGN to <backer public key>
```

## Resources

- [Diamante Blockchain Documentation](https://developers.diamante.org/)
- [Diamante Testnet Friendbot](https://friendbot.diamcircle.io/)

## Contributing

Feel free to submit issues and pull requests. We welcome contributions to enhance and improve the functionality of **CryptoPioneers**!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
