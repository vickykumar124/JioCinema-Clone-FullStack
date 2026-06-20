import { api, ENDPOINT, getStreamingVideoThumbnail } from "@/lib/api";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";

export default async function JioPlusPage() {
  let videos = [];

  try {
    const res = await api.get(ENDPOINT.fetchAllStreamingVideos);
    videos = res?.data?.data || [];
  } catch (error) {
    console.log("Video Fetch Error:", error);
  }

  return (
    <main className="h-screen mt-20 p-8">
      <h1 className="text-2xl font-medium mb-6">
        Jio+ Premium Videos
      </h1>

      <ul
        className={cn(
          "flex gap-4 w-full overflow-scroll scrollbar-hide p-4"
        )}
      >
        {videos?.map((video, index) => (
          <Link
            key={index}
            href={`/jio+/watch?id=${video.id}`}
            className="relative flex items-center justify-center"
          >
            <Image
              src={getStreamingVideoThumbnail(video.id)}
              alt={video.title || "video"}
              width={200}
              height={300}
              className="min-w-[200px] h-[300px] rounded-lg object-cover"
              quality={30}
            />
            <PlayCircleIcon className="absolute" />
          </Link>
        ))}
      </ul>
    </main>
  );
}