export const dynamic = "force-dynamic";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";

export default async function JioPlusPage() {
  const videos = [];

  return (
    <main className="min-h-screen mt-20 p-8">
      <h1 className="text-2xl font-medium mb-6">
        Jio+ Premium Videos
      </h1>

      {videos.length === 0 ? (
        <div className="text-gray-400">
          No Premium Videos Available
        </div>
      ) : (
        <ul
          className={cn(
            "flex gap-4 w-full overflow-scroll scrollbar-hide p-4"
          )}
        >
          {videos.map((video, index) => (
            <Link
              key={index}
              href={`/jio+/watch?id=${video.id}`}
              className="relative flex items-center justify-center"
            >
              <Image
                src={"/placeholder.jpg"}
                alt={video.title || "video"}
                width={200}
                height={300}
                className="min-w-[200px] h-[300px] rounded-lg object-cover"
              />
              <PlayCircleIcon className="absolute" />
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
}