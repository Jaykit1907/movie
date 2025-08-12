import type { FC } from "react";

const TravelHero: FC = () => {
  return (
    <section className="relative isolate w-full overflow-hidden rounded-none bg-gradient-to-br from-sky-200 via-white to-white px-6 py-14 sm:px-10 md:px-14 lg:px-16">
      {/* Decorative curve */}
      <div className="pointer-events-none absolute -top-28 left-0 h-[260px] w-[120%] -rotate-12 bg-gradient-to-r from-sky-400/30 to-sky-200/0 blur-lg" />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start">
        {/* Left: Glass card with heading */}
        <div className="relative w-full max-w-2xl rounded-[28px] border border-white/40 bg-white/20 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.15)] backdrop-blur-xl md:p-8 lg:p-10">
          {/* Floating bubbles */}
          <div className="pointer-events-none absolute right-6 top-6 flex gap-3">
            <span className="size-10 rounded-full bg-gradient-to-br from-sky-300/60 to-indigo-300/60 backdrop-blur-md shadow-inner border border-white/60" />
            <span className="size-6 self-end rounded-full bg-gradient-to-br from-sky-200/60 to-indigo-200/60 backdrop-blur-md border border-white/60" />
          </div>

          <h1 className="text-balance font-extrabold leading-[0.95] tracking-tight text-slate-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]">
            <span className="block text-4xl sm:text-5xl md:text-6xl">One-Stop</span>
            <span className="mt-2 block text-5xl sm:text-6xl md:text-7xl">TravelHub</span>
          </h1>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-5 py-3 text-slate-800 shadow-sm transition hover:bg-white">
              <span className="text-base font-semibold">Explore Now</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Featured card */}
        <div className="relative w-full max-w-xl rounded-[28px] bg-white/0">
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_12px_40px_rgba(2,6,23,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop"
              alt="Taj Mahal, Agra"
              className="h-80 w-full object-cover md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-2xl font-extrabold tracking-wide text-white drop-shadow">AGRA</p>
                <p className="mt-1 text-xs text-white/90">Witness the legacy of the Mughals in every corner</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-slate-800 shadow">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-yellow-400" aria-hidden>
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-sm font-semibold">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom thumbnails */}
      <div className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-3 gap-4">
        {[
          {
            src: "https://images.unsplash.com/photo-1584988297783-3f35b8c5b5d6?q=80&w=1200&auto=format&fit=crop",
            alt: "India Gate, Delhi",
          },
          {
            src: "https://images.unsplash.com/photo-1583742227061-cb16b3c2b4c5?q=80&w=1200&auto=format&fit=crop",
            alt: "Charminar, Hyderabad",
          },
          {
            src: "https://images.unsplash.com/photo-1564314968303-86c5df2b6b01?q=80&w=1200&auto=format&fit=crop",
            alt: "Gateway of India, Mumbai",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[22px] shadow-[0_8px_24px_rgba(2,6,23,0.15)]"
          >
            <img
              src={card.src}
              alt={card.alt}
              className="h-28 w-full object-cover sm:h-32 md:h-36"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelHero;