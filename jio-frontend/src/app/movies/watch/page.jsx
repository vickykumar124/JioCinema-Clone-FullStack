import ShareButton from "@/components/atom/ShareButton";
import WishlistButton from "@/components/atom/WishListButton";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Page = async ({ searchParams }) => {
    // Next.js 15/16 fix
    const params = await searchParams;

    const id = params?.id;
    const poster_path = params?.poster_path;

    if (!id) {
        return (
            <div className="h-screen flex items-center justify-center text-white text-2xl">
                No Movie ID Found
            </div>
        );
    }

    return (
        <div className="mt-[80px] min-h-screen">
            {/* YouTube Video */}
           <iframe
  className="w-full aspect-video lg:h-[78vh]"
  src="https://www.youtube.com/embed/OYcsHXWUTYI"
  title="Movie Trailer"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

            {/* Movie Details */}
            <div className="flex flex-wrap gap-4 px-4 lg:px-10 py-8 items-center">
                <h1 className="text-2xl font-bold text-white">
                    Demo Movie
                </h1>

                <WishlistButton
                    wishlist={{
                        id: id,
                        poster_path: poster_path,
                        name: "Demo Movie",
                        media_type: "movie",
                    }}
                />

                <ShareButton />

                <Link href="/" className={buttonVariants()}>
                    Back Home
                </Link>
            </div>
        </div>
    );
};

export default Page;