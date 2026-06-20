
import { getWatchUrl } from '@/lib/api'
import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

function BannerSection({ data }) {
  return (
    <Suspense fallback={<BannerSectionFallback />}>
      <BannerSectionContent data={data} />
    </Suspense>
  );
}

function BannerSectionContent({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[500px] py-12">
        <p className="text-lg text-gray-500">
          No items found.
        </p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full md:px-0 px-4"
    >
      <CarouselContent>
        {data.map((vid) => (
          <CarouselItem
            key={vid.imdbID}
            className="w-full max-w-[700px] h-[500px]"
          >
            <Link
              href={getWatchUrl(
                vid.imdbID,
                "movie",
                vid.Poster
              )}
            >
              <Image
                src={
                  vid.Poster && vid.Poster !== "N/A"
                    ? vid.Poster
                    : "/placeholder.jpg"
                }
                alt={vid.Title || "Movie"}
                width={700}
                height={500}
                className="w-full h-full bg-slate-600 rounded-lg object-cover"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-4 right-[12%] hidden md:flex">
        <CarouselPrevious className="w-[60px] h-[60px]" />
        <CarouselNext className="w-[60px] h-[60px] ml-2" />
      </div>
    </Carousel>
  );
}
function BannerSectionFallback() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
    </div>
  )

}

export default BannerSection;