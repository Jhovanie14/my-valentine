export default function ValentineCard({ children }) {
  return (
    <div
      className="relative w-[90%] max-w-xl 
                      px-12 py-14 text-center
                      bg-white/60 backdrop-blur-xl
                      border border-rose-200
                      shadow-[0_30px_80px_rgba(192,57,75,0.12)]
                      rounded-sm
                      animate-[float_6s_ease-in-out_infinite]"
    >
      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-amber-400 opacity-60"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-amber-400 opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-amber-400 opacity-60"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-amber-400 opacity-60"></div>

      {children}
    </div>
  );
}
