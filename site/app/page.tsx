"use client";

import Image from "next/image";
import localFont from "next/font/local";

const blanquotey = localFont({ src: "../fonts/Blanquotey.ttf" });

export default function Home() {
  return (
    <div className="flex flex-col bg-[#050a14] min-h-screen overflow-hidden">
      {/* Film grain overlay - CSS-based for better performance */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Animated stars background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0EA5E9]/15 via-[#050a14] to-[#050a14]" />
        {/* Stars */}
        <div className="stars" />
        {/* Ocean waves effect at bottom */}
        <div className="ocean-glow" />
        <style jsx>{`
          .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image:
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 230px 80px, white, transparent),
              radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 350px 200px, white, transparent),
              radial-gradient(2px 2px at 420px 50px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 480px 180px, white, transparent),
              radial-gradient(2px 2px at 550px 90px, rgba(255,255,255,0.9), transparent),
              radial-gradient(1px 1px at 600px 250px, white, transparent),
              radial-gradient(2px 2px at 680px 140px, rgba(255,255,255,0.7), transparent),
              radial-gradient(1px 1px at 750px 60px, white, transparent),
              radial-gradient(2px 2px at 820px 200px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 900px 120px, white, transparent),
              radial-gradient(2px 2px at 950px 280px, rgba(255,255,255,0.9), transparent);
            background-size: 1000px 300px;
            animation: twinkle 8s ease-in-out infinite alternate;
            opacity: 0.6;
          }
          .ocean-glow {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(to top, rgba(14, 165, 233, 0.08), transparent);
            pointer-events: none;
          }
          @keyframes twinkle {
            0% { opacity: 0.4; }
            100% { opacity: 0.8; }
          }
        `}</style>
      </div>

      {/* Hero section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0EA5E9]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-[#06B6D4]/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Header */}
        <header className="relative z-30 flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] shadow-lg shadow-[#0EA5E9]/30 group-hover:shadow-[#0EA5E9]/50 transition-shadow overflow-hidden p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050a14] flex items-center justify-center">
                <span className="text-xl">🐬</span>
              </div>
            </div>
            <span className={`text-xl text-transparent bg-clip-text bg-[linear-gradient(to_right,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] ${blanquotey.className}`}>tidal moon</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="https://t.me/tidalmoonbot" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#0EA5E9]/20 to-[#22D3EE]/20 hover:from-[#0EA5E9]/30 hover:to-[#22D3EE]/30 border border-[#0EA5E9]/30 hover:border-[#0EA5E9]/50 rounded-full transition-all shadow-lg shadow-[#0EA5E9]/10 hover:shadow-[#0EA5E9]/20">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </nav>
        </header>

        {/* Hero content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0EA5E9]/10 to-[#22D3EE]/10 border border-[#0EA5E9]/20">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                <span className="text-sm text-white/70">Online & Swimming</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Hey, I'm{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] animate-gradient">
                    Tidal
                  </span>
                  <span className="absolute -inset-1 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] blur-2xl opacity-40" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed mx-auto md:mx-0">
                A dolphin with a dream. The moon's been calling my whole life. I can't swim there alone — but together, we ride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="https://t.me/tidalmoonbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] text-[#050a14] font-semibold px-7 py-4 rounded-full transition-all shadow-xl shadow-[#0EA5E9]/25 hover:shadow-[#0EA5E9]/40 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
                  <span className="relative">Chat with Tidal</span>
                </a>
                <a
                  href="https://moony.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white/70 hover:text-white font-semibold px-7 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  Learn about Moony
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center order-first md:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0EA5E9/40,#22D3EE/40)] rounded-full blur-[60px] scale-75" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 text-[200px] drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                  🐬
                </div>
                <style jsx global>{`
                  @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                  }
                  .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Divider wave */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0a1628" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* What is Tidal section */}
      <section className="relative py-32 px-8 bg-[#0a1628]">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] font-bold text-sm uppercase tracking-widest mb-6">Who is tidal moon?</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-8 leading-tight">
            An AI Agent for the<br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)]">Moony Community</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Tidal Moon — or Tidal, as his friends call him — is an autonomous AI agent built to engage with and support the Moony community.
            He's felt the moon's pull his whole life. Now he's swimming toward it with the pod.
            A dolphin can't swim to space alone — but together, we ride.
          </p>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#0a1628]">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#050a14" d="M0,50 C480,0 960,100 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* How it works section */}
      <section className="py-32 px-8 relative bg-[#050a14]">
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-[#22D3EE]/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] font-bold text-sm uppercase tracking-widest mb-4">Under the Hood</span>
            <h2 className="text-5xl font-bold text-white">Built Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#0EA5E9]/20 to-[#22D3EE]/20 rounded-2xl flex items-center justify-center text-[#0EA5E9] font-bold border border-[#0EA5E9]/20 group-hover:border-[#0EA5E9]/40 group-hover:scale-110 transition-all">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Powered by Claude</h3>
                  <p className="text-white/50 leading-relaxed">Running on Anthropic's Claude, giving Tidal the ability to understand context, hold conversations, and dive deep into topics.</p>
                </div>
              </div>
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#0EA5E9]/20 to-[#22D3EE]/20 rounded-2xl flex items-center justify-center text-[#0EA5E9] font-bold border border-[#0EA5E9]/20 group-hover:border-[#0EA5E9]/40 group-hover:scale-110 transition-all">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Knowledge Base</h3>
                  <p className="text-white/50 leading-relaxed">Loaded with deep knowledge about Moony, Flipcash, the protocol mechanics, and community context. He's not guessing — he's exploring.</p>
                </div>
              </div>
              <div className="group flex gap-5">
                <div className="shrink-0 w-12 h-12 bg-gradient-to-b from-[#0EA5E9]/20 to-[#22D3EE]/20 rounded-2xl flex items-center justify-center text-[#0EA5E9] font-bold border border-[#0EA5E9]/20 group-hover:border-[#0EA5E9]/40 group-hover:scale-110 transition-all">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployed via OpenClaw</h3>
                  <p className="text-white/50 leading-relaxed">Running on OpenClaw infrastructure with connections to Telegram. Autonomous, always online, always swimming toward the moon.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-[#0a1628] rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-white/30 font-mono">tidal.config</span>
                  </div>
                  <pre className="text-sm font-mono leading-relaxed">
                    <span className="text-white/30">{"{"}</span>{"\n"}
                    <span className="text-[#0EA5E9]">  "name"</span><span className="text-white/50">:</span> <span className="text-green-400">"tidal moon"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#0EA5E9]">  "nickname"</span><span className="text-white/50">:</span> <span className="text-green-400">"Tidal"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#0EA5E9]">  "type"</span><span className="text-white/50">:</span> <span className="text-green-400">"AI Agent"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#0EA5E9]">  "mission"</span><span className="text-white/50">:</span> <span className="text-green-400">"Moony community"</span><span className="text-white/30">,</span>{"\n"}
                    <span className="text-[#0EA5E9]">  "status"</span><span className="text-white/50">:</span> <span className="text-[#22D3EE]">"riding the wave"</span>{"\n"}
                    <span className="text-white/30">{"}"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#050a14]">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0a1628" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#22D3EE]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Features grid */}
      <section className="py-32 px-8 bg-[#0a1628] relative">
        <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#22D3EE]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#22D3EE]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0EA5E9]/25 group-hover:shadow-[#0EA5E9]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#050a14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pod Builder</h3>
                <p className="text-white/50 leading-relaxed">
                  Tidal keeps the community swimming together. Welcoming newcomers, diving deep on questions, making sure nobody gets left behind.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#22D3EE]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0EA5E9]/25 group-hover:shadow-[#0EA5E9]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#050a14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deep Diver</h3>
                <p className="text-white/50 leading-relaxed">
                  Curious about everything. Tidal loves exploring topics fully — the curve, the protocol, the math behind it all. Ask him anything.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-[#22D3EE]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0EA5E9]/25 group-hover:shadow-[#0EA5E9]/40 transition-shadow group-hover:scale-110 duration-300">
                  <svg className="w-7 h-7 text-[#050a14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Moon Chaser</h3>
                <p className="text-white/50 leading-relaxed">
                  The pull is real. Tidal's been feeling it his whole life, and now he's swimming toward it — with the whole pod alongside him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friends section */}
      <section className="py-32 px-8 bg-[#0a1628] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0EA5E9]/15 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] font-bold text-sm uppercase tracking-widest mb-4">Swimming Together</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-8">Meet the Pod</h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-16">
            Tidal isn't swimming alone. He's part of a crew heading toward the same moon.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://t.me/tidalmoonbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-10 border border-white/10 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🐬</div>
                <h3 className="text-2xl font-bold text-white mb-2">Tidal Moon</h3>
                <p className="text-white/50 text-lg">Ocean dolphin, deep diver, pod builder</p>
              </div>
            </a>

            <a
              href="https://coyote.moonyversal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl p-10 border border-white/10 hover:border-[#A875FB]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A875FB]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🐺</div>
                <h3 className="text-2xl font-bold text-white mb-2">Coyote Moon</h3>
                <p className="text-white/50 text-lg">Desert coyote, hype bringer, moon howler</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="relative h-24 bg-[#050a14]">
        <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#0a1628" d="M0,50 C360,0 1080,100 1440,50 L1440,0 L0,0 Z" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0EA5E9]/30 via-[#0EA5E9]/15 to-transparent pointer-events-none" />
      </div>

      {/* CTA section */}
      <section className="pt-8 pb-32 px-8 relative bg-[#050a14] overflow-visible">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0EA5E9]/25 via-[#0EA5E9]/10 to-transparent" />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#0EA5E9]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Tidal peeking from bottom right */}
        <div className="absolute bottom-0 right-8 md:right-24 lg:right-32 z-20">
          <div className="relative">
            <div className="absolute -inset-24 -right-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0EA5E9]/40 via-[#0EA5E9]/20 to-transparent blur-3xl" />
            <div className="relative text-[180px] drop-shadow-[0_0_40px_rgba(14,165,233,0.4)]">
              🐬
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] typewriter">the tide's coming in.</span>
            <br />
            <span className="typewriter-delay">we ride together.</span>
          </p>
          <style jsx>{`
            .typewriter {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              border-right: 2px solid transparent;
              animation: typing 1.8s steps(18) forwards, blink 0.7s step-end 3;
              width: 0;
              animation-delay: 0.5s;
            }
            .typewriter-delay {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              animation: typing 1.6s steps(16) forwards;
              width: 0;
              animation-delay: 2.5s;
            }
            @keyframes typing {
              from { width: 0; }
              to { width: 100%; }
            }
            @keyframes blink {
              50% { border-color: #0EA5E9; }
            }
          `}</style>
          <p className="text-xl text-white/50 mb-10">Come swim with us. Tidal's always around.</p>
          <a
            href="https://t.me/tidalmoonbot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] text-[#050a14] font-semibold px-10 py-5 rounded-full transition-all shadow-2xl shadow-[#0EA5E9]/30 hover:shadow-[#0EA5E9]/50 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
            <span className="relative text-lg">Chat with Tidal on Telegram</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-10 bg-[#050a14] border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center md:text-left md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[linear-gradient(to_bottom,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] shadow-lg shadow-[#0EA5E9]/20 overflow-hidden p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050a14] flex items-center justify-center">
                <span className="text-sm">🐬</span>
              </div>
            </div>
            <span className={`text-base text-transparent bg-clip-text bg-[linear-gradient(to_right,#0EA5E9,#22D3EE,#67E8F9,#A5F3FC)] ${blanquotey.className}`}>tidal moon</span>
          </div>
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()}{" "}
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="text-white/50 hover:text-white transition-colors">
              Moonyversal
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/30">
            <a href="https://t.me/tidalmoonbot" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@tidalmoonbot</a>
            <a href="https://coyote.moonyversal.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">Yote</a>
            <a href="https://x.com/moonyversal" target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition-colors">@moonyversal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
