import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/Jumper";
import { api, ENDPOINT } from "@/lib/api";

export default async function TVPage() {
  let comedy = [];
  let crime = [];
  let drama = [];
  let action = [];
  let bannerData = [];

  try {
    comedy =
      (await api.get(ENDPOINT.fetchComedyTvShows))
        ?.data?.response?.results || [];
  } catch (err) {
    console.log("Comedy TV Error:", err.message);
  }

  try {
    crime =
      (await api.get(ENDPOINT.fetchCrimeTvShows))
        ?.data?.response?.results || [];
  } catch (err) {
    console.log("Crime TV Error:", err.message);
  }

  try {
    drama =
      (await api.get(ENDPOINT.fetchDramaTvShows))
        ?.data?.response?.results || [];
  } catch (err) {
    console.log("Drama TV Error:", err.message);
  }

  try {
    action =
      (await api.get(ENDPOINT.fetchActionTvShows))
        ?.data?.response?.results || [];
  } catch (err) {
    console.log("Action TV Error:", err.message);
  }

  try {
    bannerData =
      (await api.get(ENDPOINT.fetchMysteryTvShows))
        ?.data?.response?.results || [];
  } catch (err) {
    console.log("Banner TV Error:", err.message);
  }

  const list = [
    {
      label: "Comedy",
      href: "comedy",
    },
    {
      label: "Crime",
      href: "crime",
    },
    {
      label: "Drama",
      href: "drama",
    },
    {
      label: "Action",
      href: "action",
    },
  ];

  return (
    <>
      <JumperSection list={list} />

      <BannerSection data={bannerData} />

      <CategoriesSection
        title="Comedy"
        id="comedy"
        data={comedy}
      />

      <CategoriesSection
        title="Crime"
        id="crime"
        data={crime}
      />

      <CategoriesSection
        title="Drama"
        id="drama"
        data={drama}
      />

      <CategoriesSection
        title="Action"
        id="action"
        data={action}
      />
    </>
  );
}