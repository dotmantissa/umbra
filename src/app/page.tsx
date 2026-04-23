import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <div className="pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-umbra-purple/30 bg-umbra-purple/10 text-umbra-glow text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-umbra-glow animate-pulse" />
          Arc Testnet · TEE-backed Confidential Transfers
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Trade in the Shadow.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-umbra-glow to-umbra-indigo">
            Settle Onchain.
          </span>
        </h1>

        <p className="text-lg text-arc-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Umbra is an institutional OTC desk where trade sizes and counterparty
          balances are hidden using Arc&apos;s opt-in confidential transfers.
          Negotiate offchain via RFQ. Settle onchain with amount privacy intact.
          Auditors get view keys.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/desk"
            className="px-6 py-3 rounded-xl bg-umbra-purple hover:bg-umbra-violet transition-colors text-white font-medium text-sm"
          >
            Open Trading Desk
          </Link>
          <Link
            href="/audit"
            className="px-6 py-3 rounded-xl border border-arc-border hover:border-arc-border/80 text-arc-muted hover:text-white transition-colors text-sm"
          >
            Auditor Access
          </Link>
        </div>
      </div>

      {/* Problem statement */}
      <div className="mb-20">
        <div className="rounded-2xl border border-danger/20 bg-danger/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-3">
            The Problem With Public Chains
          </h2>
          <p className="text-arc-muted max-w-2xl mx-auto">
            When a hedge fund places a $50M USDC → EURC order on a public chain, every
            market participant sees the position before settlement. This causes front-running,
            price impact leakage, and counterparty information asymmetry — the exact reasons
            institutions avoid settling on-chain.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-white text-center mb-12">
          How Umbra Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Request for Quote",
              description:
                "Institution A creates an RFQ with a cryptographic commitment to their amount. No cleartext amount appears onchain — just a keccak256 hash. Encrypted trade details are stored for auditor access.",
              icon: "◈",
              color: "umbra-purple",
            },
            {
              step: "02",
              title: "Offchain Negotiation",
              description:
                "Institutions negotiate the rate via secure channel (Signal, Bloomberg). Institution B commits to their counter-amount via the same commitment scheme. Trade is now matched — still no amounts visible.",
              icon: "⟷",
              color: "matched",
            },
            {
              step: "03",
              title: "Atomic Settlement",
              description:
                "Either party reveals both amounts and salts. The contract validates commitments and executes the atomic FX swap in one transaction. Amounts are now public — but the trade is already complete.",
              icon: "✓",
              color: "settled",
            },
          ].map(({ step, title, description, icon, color }) => (
            <div
              key={step}
              className="rounded-xl border border-arc-border bg-arc-card p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0
                    ${color === "umbra-purple" ? "border-umbra-purple/30 bg-umbra-purple/10 text-umbra-glow" : ""}
                    ${color === "matched" ? "border-matched/30 bg-matched/10 text-matched" : ""}
                    ${color === "settled" ? "border-settled/30 bg-settled/10 text-settled" : ""}
                  `}
                >
                  <span className="text-lg">{icon}</span>
                </div>
                <div>
                  <div className="text-xs font-mono text-arc-muted mb-0.5">{step}</div>
                  <div className="font-medium text-white">{title}</div>
                </div>
              </div>
              <p className="text-sm text-arc-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-white text-center mb-12">
          Built for Institutions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Amount Privacy via Commitments",
              description:
                "Trade sizes are committed via keccak256(amount ‖ salt) before any onchain action. Only settlement reveals amounts — simulating Arc's TEE confidential transfer layer.",
            },
            {
              title: "Auditor View Keys",
              description:
                "AES-GCM encrypted trade details (institution, amount, reference) are stored onchain. Auditors receive the view key offchain and can verify it against the stored hash.",
            },
            {
              title: "USDC ↔ EURC FX on Arc",
              description:
                "Native USDC and EURC settlement on Arc Testnet. ~350ms finality. Gas paid in USDC. No ETH price volatility in transaction costs.",
            },
            {
              title: "Atomic Swap Settlement",
              description:
                "A single settlement transaction validates both commitments and executes the token swap atomically. No partial fills. No custodial risk during settlement.",
            },
            {
              title: "Bilateral or Open Market",
              description:
                "Set a preferred counterparty for private bilateral trades, or post to the open market. Takers see the pair and reference but not the amount.",
            },
            {
              title: "Full Audit Trail",
              description:
                "All commitment hashes, encrypted metadata, and settlement results are permanently stored onchain. Regulators can reconstruct any trade with the view key.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-arc-border bg-arc-card p-5"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-umbra-glow mt-2 shrink-0" />
                <div>
                  <div className="font-medium text-white mb-1">{title}</div>
                  <p className="text-sm text-arc-muted leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mb-20 rounded-2xl border border-umbra-purple/20 bg-umbra-purple/5 p-10 text-center">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Ready to trade in confidence?
        </h2>
        <p className="text-arc-muted mb-6">
          Connect your wallet on Arc Testnet and create your first confidential RFQ.
        </p>
        <Link
          href="/desk"
          className="inline-flex px-8 py-3 rounded-xl bg-umbra-purple hover:bg-umbra-violet transition-colors text-white font-medium"
        >
          Open Trading Desk
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-arc-border py-8 flex items-center justify-between text-xs text-arc-muted">
        <div>Umbra · Confidential OTC on Arc Testnet</div>
        <div>
          Built on{" "}
          <a
            href="https://testnet.arcscan.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-umbra-glow hover:underline"
          >
            Arc
          </a>
        </div>
      </footer>
    </div>
  );
}
