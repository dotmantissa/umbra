import { AuditDecoder } from "@/components/AuditDecoder";

export default function AuditPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-settled/30 bg-settled/10 text-settled text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-settled" />
          Regulatory Access
        </div>
        <h1 className="text-2xl font-semibold text-white mb-2">Audit Panel</h1>
        <p className="text-sm text-arc-muted leading-relaxed">
          Authorized auditors can decrypt trade details using the view key provided
          by the trading parties. The view key is verified onchain against its stored
          hash before decryption occurs locally.
        </p>
      </div>

      {/* How view keys work */}
      <div className="rounded-xl border border-arc-border bg-arc-card p-5 mb-6">
        <h2 className="text-sm font-medium text-white mb-3">How View Keys Work</h2>
        <ol className="space-y-2 text-sm text-arc-muted">
          <li className="flex gap-2">
            <span className="text-umbra-glow font-mono shrink-0">1.</span>
            <span>
              When a maker creates an RFQ, a random 32-byte view key is generated.
              Its <span className="text-white font-mono">keccak256</span> hash is stored onchain.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-umbra-glow font-mono shrink-0">2.</span>
            <span>
              Trade details (institution, amount, reference) are AES-GCM encrypted
              with the view key and stored as an opaque blob onchain.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-umbra-glow font-mono shrink-0">3.</span>
            <span>
              The view key is shared with auditors offchain. This panel verifies
              it matches the stored hash, then decrypts the blob locally.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-umbra-glow font-mono shrink-0">4.</span>
            <span>
              No private data touches any server — decryption happens entirely
              in your browser.
            </span>
          </li>
        </ol>
      </div>

      <AuditDecoder />
    </div>
  );
}
