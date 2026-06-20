import CategoriesSection from "@/components/section/CategoriesSection";
import { api } from "@/lib/api";

export default async function SearchPage({ searchParams }) {
  // Next.js latest support
  const params = await searchParams;
  const query = params?.q || "";

  let movies = [];

  if (query) {
    try {
      const res = await api.get(
        `/movies/search?q=${encodeURIComponent(query)}`
      );

      console.log("Search API Response:", res.data);

      movies = res?.data?.response?.results || [];
    } catch (error) {
      console.log("Search Error:", error);
    }
  }

  return (
    <div className="mt-24 px-4">
      <h1 className="text-white text-3xl font-bold mb-6">
        Search Results : {query}
      </h1>

      {movies.length > 0 ? (
        <CategoriesSection
          title={`Results for "${query}"`}
          data={movies}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px] text-white">
          <h2 className="text-3xl font-bold">
            No Movies Found
          </h2>
          <p className="text-gray-400 mt-2">
            Try searching another movie
          </p>
        </div>
      )}
    </div>
  );
}