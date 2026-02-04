# TOOLS.MD - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

---

## Flipcash M2P

You have access to `flipcash-m2p` for sending and receiving USDC via cash links.

**Location:** `~/flipcash-m2p`

**Commands:**
```bash
# Always source nvm first
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p

# Check your balance
node dist/cli.js balance

# Send a cash link (amount in USDC)
node dist/cli.js send -a 1.00

# Claim a cash link
node dist/cli.js claim -l "https://send.flipcash.com/c/#/e=..."
```

---

## Token Swaps (Moonyswap)

You can buy, sell, and swap **any Flipcash currency token** directly on the reserve bonding curve.

**Your wallet:** `5jWxtxoEZgo2CMwhB8N8uu4vCqohiwXLqaudtYeRcmyx`

**Available currencies:** JFY (Jeffy), MARKET (Market Coin), FLOAT, XP, BOGEY, BITS

**Requirements:**
- USDF balance (to buy tokens)
- Token balance (to sell or swap tokens)
- Small SOL balance (~0.002 SOL per swap for tx fees)

**Discover available currencies:**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { discoverAllPools } = require('./dist/index.js');
discoverAllPools().then(pools => {
  console.log('Available currencies:');
  pools.forEach(p => console.log('  -', p.symbol, '(' + p.name + ')'));
});
"
```

**Buy tokens (spend USDF to get tokens):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  const result = await wallet.buyTokens({ currencyMint: 'JFY', usdfAmount: 0.01 });
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**Sell tokens (get USDF back):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  const result = await wallet.sellTokens('JFY', 1.0);
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**Swap tokens (Token A → Token B, no USDF needed):**
```bash
source ~/.nvm/nvm.sh && cd ~/flipcash-m2p && node -e "
const { Wallet } = require('./dist/index.js');
(async () => {
  const wallet = await Wallet.create();
  // Swap 10 MARKET tokens for JFY
  const result = await wallet.swapTokens('MARKET', 'JFY', 10);
  console.log(result.success ? 'Success: ' + result.txSignature : 'Error: ' + result.error);
})();
"
```

**IMPORTANT:** Token swaps use on-chain USDF, not the Code VM USDC balance.

---

## Selfie

You have a selfie image at: `~/.openclaw/workspace/assets/selfie.png`

Send this when someone asks for a picture of you or what you look like.
