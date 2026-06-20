// import ShareButton from "@/components/atom/ShareButton";
// import WishlistButton from "@/components/atom/WishListButton";
// import { buttonVariants } from "@/components/ui/button";
// import { api, ENDPOINT } from "@/lib/api";
// import { FilmIcon } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const page = async ({ searchParams }) => {
//   const { id, poster_path } = await searchParams;

//   let details = null;

//   try {
//     const res = await api.get(
//       ENDPOINT.getTvShowsDetails(id)
//     );

//     // OMDB response
//     details = res.data?.response;
//   } catch (err) {
//     console.log("TV Details Error:", err.message);
//   }

//   return (
//     <div className="mt-[80px] min-h-screen">
//       {details ? (
//         <>
//           {/* Demo YouTube Video */}
//       <iframe
//   className="w-full aspect-video lg:h-[78vh]"
//   src="https://www.youtube.com/embed/EXeTwQWrcwY"
//   title="TV Show Trailer"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />

//           <div className="flex flex-wrap gap-4 px-4 lg:px-10 py-8 items-center">
//             <h1 className="text-2xl font-bold text-white">
//               {details.Title || "TV Show"}
//             </h1>

//             <WishlistButton
//               wishlist={{
//                 id: details.imdbID || id,
//                 name: details.Title || "TV Show",
//                 media_type: "tv",
//                 poster_path: poster_path,
//               }}
//             />

//             <ShareButton />

//             <Link href="/" className={buttonVariants()}>
//               Take me Home
//             </Link>
//           </div>
//         </>
//       ) : (
//         <div className="w-full h-[60vh] flex flex-col gap-4 items-center justify-center text-slate-400">
//           <FilmIcon className="w-[100px] h-[100px]" />
//           <p>Uh Oh! Video is unavailable.</p>

//           <Link href="/" className={buttonVariants()}>
//             Take me Home
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default page;



import ShareButton from "@/components/atom/ShareButton";
import WishlistButton from "@/components/atom/WishListButton";
import { buttonVariants } from "@/components/ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { FilmIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }) => {
  const { id, poster_path } = await searchParams;

  let details = null;

  try {
    const res = await api.get(
      ENDPOINT.getTvShowsDetails(id)
    );

    details = res.data?.response;
  } catch (err) {
    console.log("TV Details Error:", err.message);
  }

  // TV trailers list
  const tvVideos = [
    "EXeTwQWrcwY",
    "zSWdZVtXT7E",
    "V75dMMIW2B4",
    "NmzuHjWmXOc",
    "bLvqoHBptjg",
    "OYcsHXWUTYI",
  ];

  // Random video
  const randomVideo =
    tvVideos[Math.floor(Math.random() * tvVideos.length)];

  return (
    <div className="mt-[80px] min-h-screen">
      {details ? (
        <>
          <iframe
            className="w-full aspect-video lg:h-[78vh]"
            src={`https://www.youtube.com/embed/${randomVideo}`}
            title="TV Show Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="flex flex-wrap gap-4 px-4 lg:px-10 py-8 items-center">
            <h1 className="text-2xl font-bold text-white">
              {details.Title || "TV Show"}
            </h1>

            <WishlistButton
              wishlist={{
                id: details.imdbID || id,
                name: details.Title || "TV Show",
                media_type: "tv",
                poster_path: poster_path,
              }}
            />

            <ShareButton />

            <Link href="/" className={buttonVariants()}>
              Take me Home
            </Link>
          </div>
        </>
      ) : (
        <div className="w-full h-[60vh] flex flex-col gap-4 items-center justify-center text-slate-400">
          <FilmIcon className="w-[100px] h-[100px]" />
          <p>Uh Oh! Video is unavailable.</p>

          <Link href="/" className={buttonVariants()}>
            Take me Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;