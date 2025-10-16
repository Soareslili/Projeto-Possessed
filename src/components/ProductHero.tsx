

interface ProductHeroProps {
  currentImage: string;
  currentColor: string;
  currentPrice: string;
  currentId: string;
}

export const ProductHero = ({ currentImage, currentColor, currentPrice, currentId }: ProductHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #FF7A00 0%, #A14C1E 50%, #241914 200%)",
      }}
    >
      {/* Vertical Brand Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 animate-slide-in-left">
        <h2 className="text-[8rem] font-black tracking-tighter leading-none -rotate-180 opacity-90"
          style={{ writingMode: 'vertical-rl' }}>
          POSSESSED
        </h2>
        <div className="mt-8 text-xs font-light tracking-wider opacity-60 -rotate-180"
          style={{ writingMode: 'vertical-rl' }}>
          <p>Creative Direction: Alex Chen</p>
          <p className="mt-2">Photography: Maria Silva</p>
          <p className="mt-2">Model: Jordan Blake</p>
        </div>
      </div>

      {/* Central Product Image */}
      <div className="flex-1 flex items-center justify-center animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-float"></div>
          <img
            src={currentImage}
            alt={`${currentColor} Inflated Jacket`}
            className="relative w-[600px] h-[600px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>


  
      {/* Product Info */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 p-10 rounded-3xl w-[380px] animate-slide-in-right"
        style={{
          background: "linear-gradient(180deg, rgba(255, 122, 0, 0.08) 0%, rgba(36, 25, 20, 0.45) 100%)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="space-y-8 text-white/90">
          <div>
            <p className="text-sm font-light tracking-widest text-white/70 mb-2">
              COLOUR
            </p>
            <p className="text-2xl font-semibold">{currentColor}</p>
          </div>

          <div>
            <p className="text-sm font-light tracking-widest text-white/70 mb-2">
              PRODUCT ID
            </p>
            <p className="text-base font-mono line-through decoration-white/30">
              {currentId}
            </p>
          </div>

          <div>
            <p className="text-sm font-light tracking-widest text-white/70 mb-2">
              PRICE
            </p>
            <p className="text-4xl font-bold text-[#FF7A00]">{currentPrice}</p>
          </div>

          {/* Botões */}
          <div className="flex gap-4 pt-6">
            <button
              className="flex-1 py-3 rounded-xl cursor-pointer font-semibold text-white shadow-lg text-lg tracking-wide"
              style={{
                background: "linear-gradient(90deg, #FF7A00 0%, #E26600 100%)",
              }}
            >
              Style
            </button>

            <button
              className="flex-1 py-3 rounded-xl cursor-pointer font-semibold text-white/80 border border-white/25 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-lg tracking-wide transition-all"
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};