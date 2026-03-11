export default function TestPage() {
  return (
    <main className="min-h-screen bg-alchemy-dark p-12 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <section>
          <h1 className="text-5xl font-bold text-alchemy-gold mb-2">
            The Alchemist Portfolio
          </h1>
          <p className="text-alchemy-cyan font-mono italic">
          
          </p>
        </section>

        {/* Color Palette Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-alchemy-surface p-6 rounded-xl border border-alchemy-gold/20 shadow-lg">
            <h3 className="text-alchemy-gold font-bold mb-2">PM Persona</h3>
            <p className="text-sm opacity-80">
              Structured, Authoritative, Gold accents for leadership.
            </p>
            <button className="mt-4 px-4 py-2 bg-alchemy-gold text-alchemy-dark font-bold rounded">
              View Strategy
            </button>
          </div>

          <div className="bg-alchemy-surface p-6 rounded-xl border border-alchemy-cyan/20 shadow-lg">
            <h3 className="text-alchemy-cyan font-mono mb-2">Dev Persona</h3>
            <p className="text-sm opacity-80 font-mono">
              Clean, Technical, Cyan accents for code precision.
            </p>
            <button className="mt-4 px-4 py-2 border border-alchemy-cyan text-alchemy-cyan font-mono rounded hover:bg-alchemy-cyan hover:text-alchemy-dark transition-all">
              npm run build
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
