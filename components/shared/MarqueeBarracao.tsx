"use client";

export default function MarqueeBarracao() {
  // The marquee texts are static, so this is safe for client rendering
  const skatehiveText = Array(8).fill('SKATEHIVE').join(' • ');
  const nogentaText = Array(8).fill('NOGENTA').join(' • ');
  const barracaoText = Array(8).fill('BARRACÃO DISSIDENTE').join(' • ');
  return (
    <div className="w-full mb-6">
      {/* SKATEHIVE Marquee */}
      <div className="overflow-hidden w-full">
        <div
          className="whitespace-nowrap animate-marquee text-5xl md:text-7xl font-extrabold text-orange-400 font-mono tracking-widest leading-none"
          style={{
            animation: 'marquee 12s linear infinite',
            display: 'inline-block',
          }}
        >
          {skatehiveText}
        </div>
      </div>
      {/* NOGENTA Marquee (reverse direction) */}
      <div className="overflow-hidden w-full">
        <div
          className="whitespace-nowrap text-5xl md:text-7xl font-extrabold text-orange-400 font-mono tracking-widest leading-none"
          style={{
            animation: 'marquee-reverse 12s linear infinite',
            display: 'inline-block',
          }}
        >
          {nogentaText}
        </div>
      </div>
      {/* BARRACÃO Marquee */}
      <div className="overflow-hidden w-full">
        <div
          className="whitespace-nowrap animate-marquee text-5xl md:text-7xl font-extrabold text-orange-400 font-mono tracking-widest leading-none"
          style={{
            animation: 'marquee 12s linear infinite',
            display: 'inline-block',
          }}
        >
          {barracaoText}
        </div>
      </div>
    </div>
  );
}
