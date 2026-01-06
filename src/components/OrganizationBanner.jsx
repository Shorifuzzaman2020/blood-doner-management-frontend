// import React from "react";

// export default function OrganizationBanner() {
//   return (
//     <div className="max-w-6xl mx-auto border-4 border-black p-4 bg-[#a9dbe6] rounded-lg shadow-lg">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-4">
//           <img
//             src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
//             className="w-24 h-24 rounded-full border-2 border-red-600"
//             alt="logo"
//           />
//           <div>
//             <p className="text-lg font-semibold text-black">বিসমিল্লাহির রাহমানির রাহিম</p>
//             <p className="text-sm text-black">তুচ্ছ নয় রক্তদান, বাঁচতে পারে একটি প্রান</p>
//             <h1 className="text-3xl font-extrabold text-red-600 mt-1">
//               শ্রীবরদী সমাজকল্যাণ ও রক্তদান সংস্থা
//             </h1>
//             <p className="text-sm mt-1 text-black">
//               একটি সমাজ সেবামূলক অরাজনৈতিক স্বেচ্ছাসেবী সংগঠন — শ্রীবরদী, শেরপুর
//             </p>
//           </div>
//         </div>

//         {/* QR Placeholder */}
//         <div className="w-24 h-24 border-2 border-black flex items-center justify-center bg-white">
//           {/* <span className="text-xs">QR Code</span> */}
//           <img src="https://i.ibb.co.com/0j1fddCd/Untitled.jpg" alt="" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">

//         <ul className="list-decimal pl-5 space-y-1 font-medium">
//           <ol>স্বেচ্ছায় রক্তদান কার্যক্রম</ol>
//           <ol>দরিদ্র ও অসহায় মানুষকে সহায়তা করা</ol>
//           <ol>প্রাকৃতিক দুর্যোগে সহায়তা প্রদান</ol>
//           <ol>স্বাস্থ্য বিষয়ক সচেতনতা কার্যক্রম</ol>
//           <ol>মেধাবী শিক্ষার্থীদের সহায়তা</ol>
//         </ul>

//         <ul className="list-decimal pl-5 space-y-1 font-medium">
//           <ol>অসুস্থ দরিদ্রের চিকিৎসায় সহযোগিতা</ol>
//           <ol>রক্তদান ক্যাম্প আয়োজন</ol>
//           <ol>দুঃস্থদের মাঝে ত্রাণ বিতরণ</ol>
//           <ol>সামাজিক উন্নয়নে অবদান</ol>
//           <ol>মানবিক মূল্যবোধ প্রতিষ্ঠা</ol>
//         </ul>

//       </div>

//       {/* Footer */}
//       <div className="mt-5 bg-blue-900 text-white text-center py-3 rounded-md">
//         <p className="font-bold">মোবাইল: 01518905148 , 01646918226</p>
//         <p>sreebardisocialwelfare2020@gmail.com</p>
//       </div>

//     </div>
//   );
// }

import React from "react";

export default function OrganizationBanner() {
  return (
    <div className="max-w-6xl mx-auto border-4 border-black p-3 sm:p-4 md:p-6 bg-[#a9dbe6] rounded-lg shadow-lg">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">

          <img
            src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-red-600"
            alt="logo"
          />

          <div>
            <p className="text-sm sm:text-lg font-semibold text-black">
              বিসমিল্লাহির রাহমানির রাহিম
            </p>

            <p className="text-xs sm:text-sm text-black">
              তুচ্ছ নয় রক্তদান, বাঁচতে পারে একটি প্রান
            </p>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-600 mt-1">
              শ্রীবরদী সমাজকল্যাণ ও রক্তদান সংস্থা
            </h1>

            <p className="text-xs sm:text-sm mt-1 text-black">
              একটি সমাজ সেবামূলক অরাজনৈতিক স্বেচ্ছাসেবী সংগঠন — শ্রীবরদী, শেরপুর
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="mx-auto md:mx-0 w-20 h-20 sm:w-24 sm:h-24 border-2 border-black flex items-center justify-center bg-white">
          <img
            src="https://i.ibb.co.com/0j1fddCd/Untitled.jpg"
            alt="QR"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">

        <ul className="list-decimal pl-5 space-y-1 font-medium text-sm sm:text-base">
          <ol>১. স্বেচ্ছায় রক্তদান কার্যক্রম</ol>
          <ol>২. দরিদ্র ও অসহায় মানুষকে সহায়তা করা</ol>
          <ol>৩. প্রাকৃতিক দুর্যোগে সহায়তা প্রদান</ol>
          <ol>৪. স্বাস্থ্য বিষয়ক সচেতনতা কার্যক্রম</ol>
          <ol>৫. মেধাবী শিক্ষার্থীদের সহায়তা</ol>
        </ul>

        <ul className="list-decimal pl-5 space-y-1 font-medium text-sm sm:text-base">
          <ol>৬. অসুস্থ দরিদ্রের চিকিৎসায় সহযোগিতা</ol>
          <ol>৭. রক্তদান ক্যাম্প আয়োজন</ol>
          <ol>৮. দুঃস্থদের মাঝে ত্রাণ বিতরণ</ol>
          <ol>৯. সামাজিক উন্নয়নে অবদান</ol>
          <ol>১০. মানবিক মূল্যবোধ প্রতিষ্ঠা</ol>
        </ul>

      </div>

      {/* Footer */}
      <div className="mt-5 bg-blue-900 text-white text-center py-2 sm:py-3 rounded-md text-sm sm:text-base">
        <p className="font-bold">মোবাইল: 01518905148 , 01646918226</p>
        <p>sreebardisocialwelfare2020@gmail.com</p>
      </div>

    </div>
  );
}
