import { api, ENDPOINT, getStreamingVideoThumbnail } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon, Crown } from "lucide-react";

export default async function JioPlusPage() {
  const response = await api.get(ENDPOINT.fetchAllStreamingVideos);

  const videos = response?.data?.data || [];

  console.log("VIDEOS:", videos);

  return (
    <main className="min-h-screen mt-20 px-6 md:px-10">
      {/* Hero Section */}
      <section className="mb-10">
        <div className="rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-8">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="text-yellow-300" />
            <span className="font-semibold text-yellow-300">
              Premium Content
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Jio+ Premium Videos
          </h1>

          <p className="text-gray-200 mt-3 max-w-2xl">
            Enjoy exclusive premium movies, TV shows and entertainment
            available only for Jio+ members.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Trending Premium Content
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {videos.map((video, index) => {
            const videoId =
              typeof video === "string"
                ? video.replace(".mp4", "")
                : video?.id;

            return (
              <Link
                key={index}
                href={`/jio+/watch?id=${videoId}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                  <Image
                    src={getStreamingVideoThumbnail(videoId)}
                    alt={videoId}
                    width={300}
                    height={450}
                    unoptimized
                    className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <PlayCircleIcon size={60} />
                  </div>

                  <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    PREMIUM
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-medium truncate capitalize">
                    {videoId.replace(/_/g, " ")}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}