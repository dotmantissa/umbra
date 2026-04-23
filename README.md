# Umbra

Private OTC trading for USDC and EURC on Arc Testnet.

Umbra lets institutions trade in size without showing their position to the market. Amounts stay hidden until both sides are locked in and the trade executes. Once settled, your auditor can read the full record using a view key you share with them.

---

## How it works

### 1. Post a quote

Connect your wallet and go to the Trading Desk. Click **New Quote** to set your direction (USDC → EURC or EURC → USDC), the amount you want to trade, your firm name, and an optional reference code.

When you submit, two things happen:
- A fingerprint of your amount is written onchain. The actual number never appears.
- Your firm name, reference, and amount are encrypted and stored onchain. Only someone with your view key can read them.

You get a **settlement kit** — save it. It contains your view key (for your auditor), your settlement code (for settlement), and your amount.

### 2. A counterparty takes your quote

Anyone browsing the Open Market tab can take your quote. They enter the amount they are sending and their firm name, lock in their side, and get their own settlement kit.

At this point, both amounts are committed but invisible to anyone watching the chain.

### 3. Exchange settlement details

Once matched, you and your counterparty share your settlement codes and amounts with each other privately (over Signal, email, wherever you agree).

### 4. Settle

Either party can open the trade and click **Settle Trade**. You enter your settlement code and amount, and the counterparty's. The contract checks both sides match what was committed, then executes the swap in a single transaction.

If the numbers don't add up, the transaction reverts. Nothing moves until everything is correct.

---

## Auditor access

Every trade stores encrypted details onchain — firm names, amounts, timestamps — that only a view key can unlock.

To give your auditor access:
1. Share the **view key** from your settlement kit with them.
2. They go to the [Audit panel](/audit), enter the trade ID and the view key.
3. Everything decrypts locally in their browser. Nothing is sent to a server.

The view key is verified against the trade record onchain before anything decrypts.

---

## Getting started

**Requirements:** A wallet connected to Arc Testnet (chain ID 5042002), with some USDC or EURC. Get test tokens at [faucet.circle.com](https://faucet.circle.com/).

**Add Arc Testnet to your wallet:**
- Network name: Arc Testnet
- RPC URL: `https://rpc.testnet.arc.network`
- Chain ID: `5042002`
- Currency: USDC (gas is paid in USDC, no ETH needed)

---

## Running locally

```bash
git clone https://github.com/dotmantissa/umbra.git
cd umbra
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_UMBRA_ADDRESS
npm run dev
```

The app runs at `http://localhost:3000`.

---

## Contracts

The trading contract is deployed on Arc Testnet. Trade lifecycle: OPEN → MATCHED → SETTLED (or CANCELLED / EXPIRED).

Key addresses on Arc Testnet:
- USDC: `0x3600000000000000000000000000000000000000`
- EURC: `0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a`
- UmbraOTC: set in `.env.local` as `NEXT_PUBLIC_UMBRA_ADDRESS`

To deploy the contract yourself:

```bash
cd contracts
forge build
forge script script/Deploy.s.sol --rpc-url $ARC_RPC_URL --private-key $PRIVATE_KEY --broadcast
```

---

## Live app

[umbra-ecru.vercel.app](https://umbra-ecru.vercel.app)
