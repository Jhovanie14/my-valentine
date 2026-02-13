"use client";

export default function YesNoButtons({ onYes }) {
  return (
    <div className="flex justify-center items-center mt-6">
      {/* Yes Button */}
      <button
        onClick={onYes}
        className="px-10 py-3 text-lg tracking-widest text-primary font-sans font-semibold
                  border border-rose-400 
                   shadow-lg
                   rounded-lg
                   hover:-translate-y-1
                   hover:shadow-rose-500/40
                   active:scale-95
                   transition-all duration-300 cursor-pointer"
      >
        ✨ Open for Me ✨
      </button>
    </div>
  );
}
