import { getWatchUrl } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { InboxIcon } from "lucide-react";

function CategoriesSection({
  title,
  id,
  data = [],
}) {
  return (
    <div className="py-8 px-6">
      <h2
        id={id}
        className="text-2xl font-medium mb-6 scroll-m-[100px]"
      >
        {title}
      </h2>

      {!data || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-[300px] py-12">
          <InboxIcon
            className="w-32 h-32 text-slate-400 mb-10"
            strokeWidth={1.2}
          />

          <p className="text-lg text-gray-500">
            No items found.
          </p>
        </div>
      ) : (
        <ul className="flex gap-4 w-full overflow-x-auto scrollbar-hide">
          {data.map((post, index) => {
            const itemId =
              post.imdbID ||
              post.id ||
              index;

            const poster =
              post.Poster &&
              post.Poster !== "N/A"
                ? post.Poster
                : post.poster_path
                ? post.poster_path.startsWith("http")
                  ? post.poster_path
                  : `https://image.tmdb.org/t/p/w500${post.poster_path}`
                : "/jio-logo.png";

            const title =
              post.Title ||
              post.title ||
              post.name ||
              "Movie";

            const mediaType =
              post.media_type || "movie";

            return (
              <li key={itemId}>
                <Link
                  href={getWatchUrl(
                    itemId,
                    mediaType,
                    poster
                  )}
                >
                  <Image
                    src={poster}
                    alt={title}
                    width={200}
                    height={300}
                    className="min-w-[200px] h-[300px] rounded-lg object-cover hover:scale-105 transition-all duration-300"
                    unoptimized
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CategoriesSection;