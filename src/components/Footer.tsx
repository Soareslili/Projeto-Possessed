export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 glass-footer border-t border-white/10"
    style={{
        background: "linear-gradient(to bottom, rgba(255, 122, 0, 0.9) 0%, rgba(255, 122, 0, 0.6) 40%, rgba(161, 76, 30, 0.4) 100%)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}

    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-Orbi text-white tracking-widest ">
              IN
            </a>
            <a href="#" className="text-xs font-Orbi text-white tracking-widest ">
              TW
            </a>
            <a href="#" className="text-xs font-Orbi text-white tracking-widest ">
              YT
            </a>
            <a href="#" className="text-xs font-Orbi text-white tracking-widest ">
              OS
            </a>
          </div>

          <a href="#" className="text-xs text-white font-Orbi tracking-widest ">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};
