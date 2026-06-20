import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/Jumper";
import { api, ENDPOINT } from "@/lib/api";

export default async function Home() {
  let topRated = [];
  let popular = [];
  let upcoming = [];
  let bannerData = [];

  try {
    const topRatedResp = await api.get(
      ENDPOINT.discoverTopRated
    );
    topRated =
      topRatedResp?.data?.response?.results || [];
  } catch (err) {
    console.log(
      "Top Rated Error:",
      err?.response?.status || err.message
    );
  }

  try {
    const popularResp = await api.get(
      ENDPOINT.discoverTrending
    );
    popular =
      popularResp?.data?.response?.results || [];
  } catch (err) {
    console.log(
      "Popular Error:",
      err?.response?.status || err.message
    );
  }

  try {
    const upcomingResp = await api.get(
      ENDPOINT.discoverUpcoming
    );
    upcoming =
      upcomingResp?.data?.response?.results || [];
  } catch (err) {
    console.log(
      "Upcoming Error:",
      err?.response?.status || err.message
    );
  }

  try {
    const bannerResp = await api.get(
      ENDPOINT.discoverNowPlaying
    );
    bannerData =
      bannerResp?.data?.response?.results || [];
  } catch (err) {
    console.log(
      "Banner Error:",
      err?.response?.status || err.message
    );
  }

  const jumperList = [
    {
      label: "Top Rated",
      href: "top-rated",
    },
    {
      label: "Popular",
      href: "popular",
    },
    {
      label: "Upcoming",
      href: "upcoming",
    },
  ];

  return (
    <>
      <JumperSection list={jumperList} />

      <BannerSection data={bannerData} />

      <CategoriesSection
        title="Top Rated"
        id="top-rated"
        data={topRated}
      />

      <CategoriesSection
        title="Popular"
        id="popular"
        data={popular}
      />

      <CategoriesSection
        title="Upcoming"
        id="upcoming"
        data={upcoming}
      />
    </>
  );
}