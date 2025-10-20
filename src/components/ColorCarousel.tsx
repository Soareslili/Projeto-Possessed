import jacketOrange from "../assets/jacket-black-3d.jpg";
import jacketPink3D from "../assets/Jacket-pink.png";
import jacketGold3D from "../assets/Jacket-yellow.png";
import jacketBlack3D from "../assets/Jacket-orange.png";

interface ColorCarouselProps {
  onColorChange: (color: ColorOption) => void;
  activeColorId: string;
}

export interface ColorOption {
  name: string;
  image: string;
  id: string;
  price: string;
  productId: string;
}

const colors: ColorOption[] = [
  { name: "Matte Black", image: jacketOrange, id: "orange", price: "$1,250", productId: "353484" },
  { name: "Neon Pink", image: jacketPink3D, id: "pink", price: "$1,350", productId: "353485" },
  { name: "Metallic Gold", image: jacketGold3D, id: "gold", price: "$1,450", productId: "353486" },
  { name: "Blood Orange", image: jacketBlack3D, id: "black", price: "$1,299", productId: "353487" },
];

export const ColorCarousel = ({ onColorChange, activeColorId }: ColorCarouselProps) => {

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-fade-in"


    >
      <div className=" px-6 py-4 rounded-full flex gap-4 items-center shadow-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(255, 122, 0, 0.08) 0%, rgba(36, 25, 20, 0.45) 100%)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}

        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1800"
      >
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorChange(color)}
            className={`group relative transition-all duration-500 ${activeColorId === color.id ? 'scale-125' : 'scale-100 hover:scale-110'
              }`}
          >
            <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeColorId === color.id ? 'border-primary shadow-[0_0_30px_rgba(255,122,0,0.6)]' : 'border-white/20 hover:border-white/40'
              }`}>
              <img
                src={color.image}
                alt={color.name}
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <p className="text-xs font-light tracking-wide">{color.name}</p>
            </div>
            {activeColorId === color.id && (
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export { colors };