export default function Home() {
  const faqs = [
    {
      q: "How does BotPulse connect to my Discord bot?",
      a: "You add a simple webhook endpoint to your bot. Every command invocation sends a lightweight event to BotPulse, which aggregates usage data in real time — no SDK required."
    },
    {
      q: "Which commands count as 'unused'?",
      a: "Any command with zero invocations in the past 30 days is flagged as unused. You can adjust the threshold in your dashboard settings."
    },
    {
      q: "Can I track multiple bots?",
      a: "Yes. The $15/mo plan supports unlimited bots and servers under one account."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16 gap-20">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full">
          Discord Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Find out which bot commands{" "}
          <span className="text-[#58a6ff]">nobody uses</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl">
          BotPulse tracks every command invocation across your Discord servers and surfaces dead features — so you can ship a leaner, faster bot.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="mt-2 inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $15/mo
        </a>
        <p className="text-xs text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Stats strip */}
      <section className="max-w-2xl w-full grid grid-cols-3 gap-4 text-center">
        {[
          ["10k+", "Commands tracked"],
          ["500+", "Bots connected"],
          ["30%", "Avg commands pruned"]
        ].map(([stat, label]) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
            <div className="text-xs text-[#8b949e] mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full flex flex-col items-center gap-6" id="pricing">
        <h2 className="text-2xl font-bold text-white">Simple pricing</h2>
        <div className="w-full bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Unlimited bots & servers",
              "Real-time command analytics",
              "Unused command alerts",
              "30-day usage history",
              "Webhook integration (5 min setup)",
              "Email digest reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="mt-2 block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full flex flex-col gap-6" id="faq">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-[#8b949e] text-center">
        © {new Date().getFullYear()} BotPulse. All rights reserved.
      </footer>
    </main>
  );
}
