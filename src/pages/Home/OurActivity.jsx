export default function OurActivity() {
  return (
    <section className="relative my-20">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100 blur-2xl opacity-60 -z-10" />

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-red-600 tracking-wide">
          আমাদের কার্যক্রম
        </h2>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {[
            "স্বেচ্ছায় রক্তদান কার্যক্রম",
            "দরিদ্র ও অসহায় মানুষকে সহায়তা করা",
            "প্রাকৃতিক দুর্যোগে সহায়তা প্রদান",
            "স্বাস্থ্য বিষয়ক সচেতনতা কার্যক্রম",
            "মেধাবী শিক্ষার্থীদের সহায়তা",
            "অসুস্থ দরিদ্রের চিকিৎসায় সহযোগিতা",
            "রক্তদান ক্যাম্প আয়োজন",
            "দুঃস্থদের মাঝে ত্রাণ বিতরণ",
            "সামাজিক উন্নয়নে অবদান",
            "মানবিক মূল্যবোধ প্রতিষ্ঠা",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 shadow-lg hover:shadow-xl transition hover:scale-[1.02] backdrop-blur"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {i + 1}
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
