import { Search, ShoppingBag, User } from "lucide-react";


export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
      style={{
        background: "linear-gradient(to bottom, rgba(255, 122, 0, 0.9) 0%, rgba(255, 122, 0, 0.6) 40%, rgba(161, 76, 30, 0.4) 100%)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-8">
            {["Men", "Women", "Customise"].map((label, i) => (
              <a
                key={label}
                href="#"
                className="text-sm font-sm text-accent-foreground hover:text-black transition-colors"
                data-aos="zoom-in-down"
                data-aos-delay={`${100 * (i + 1)}`}
                data-aos-duration="1200"
              >
                {label}
              </a>
            ))}
          </nav>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-Orbi font-bold text-accent-foreground"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1600"
          
          >
           
            POSSESSED
          </h1>

          <div className="flex items-center gap-4">
            <a className=" text-accent-foreground cursor-pointer rounded-2xl px-2 py-3 hover:bg-white/10">
              <Search className="h-5 w-5" />
            </a>
            <a className="text-accent-foreground cursor-pointer rounded-2xl px-2 py-3 hover:bg-white/10">
              <ShoppingBag className="h-5 w-5" />
            </a>
            <a className="text-accent-foreground cursor-pointer rounded-2xl px-2 py-3 hover:bg-white/10">
              <User className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};