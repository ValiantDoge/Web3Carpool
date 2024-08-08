# Decentralized Carpooling Application on Ethereum Blockchain

[Project Document](https://docs.google.com/document/d/19q1ktcKgIS5jG79ItjmhuZb9QmoD9O1lXm5MGMVPN8U/edit?usp=sharing)


## Problem Statement

The current landscape of carpooling applications is dominated by centralized platforms, which come with several inherent challenges:
- **Trust Issues**: Users must trust a central authority to manage the service, leading to concerns about data privacy and security.
- **High Fees**: Centralized intermediaries often charge significant fees, increasing the cost for users.
- **Lack of Transparency**: Limited visibility into how data is managed and transactions are handled.
- **Security Vulnerabilities**: Centralized databases are targets for hackers, leading to potential data breaches and fraud.

## Solution

To address these issues, we propose developing a **Decentralized Carpooling Application** on the Ethereum blockchain. By leveraging blockchain technology, our solution aims to:
- **Create a Transparent Platform**: Provide full visibility into transactions and data handling.
- **Enhance Security**: Utilize the decentralized nature of blockchain to protect against hacking and fraud.
- **Reduce Costs**: Eliminate intermediaries to lower fees and costs for users.
- **Build Trust**: Establish a trustless environment where users can interact directly without relying on a central authority.

## Key Features

- **Decentralized User Management**: Secure registration and profile management on the blockchain.
- **Transparent Ride Creation and Booking**: Smart contracts manage the ride lifecycle, ensuring transparency.
- **Secure Payment Handling**: Payments are handled through smart contracts for secure and automated transactions.

## Tech Stack

- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Frontend**: React.js
- **Web3 Integration**: Web3.js
- **Styling**: Tailwind CSS
- **Development Tools**:
  - **Truffle**: For smart contract development and testing
  - **Ganache**: For local Ethereum blockchain setup
  - **MetaMask**: For managing Ethereum accounts and transactions
  - **IPFS**: For decentralized storage of user data and ride details

## Project Overview

This project aims to create a secure, transparent, and decentralized carpooling platform using the Ethereum blockchain. It leverages smart contracts to manage rides, payments, and user interactions without intermediaries.

## Key Features

- Decentralized user management
- Transparent ride creation and booking
- Secure payment handling
- Trustless rating system
- Automated dispute resolution

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/)

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ValiantDoge/Web3Carpool.git  
    cd decentralized-carpooling
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Compile Contracts**

    ```bash
    truffle compile
    ```

4. **Start Ganache**

    Open Ganache and start a workspace.

5. **Deploy Contracts**

    ```bash
    truffle migrate
    ```

6. **Start the Frontend**

    ```bash
    npm run dev
    ```

## Usage

Use MetaMask to connect to the local blockchain provided by Ganache. Run tests with:

```bash
truffle test
