import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/Jumper";
import { api, ENDPOINT } from "@/lib/api";

export default async function Movies() {
  let comedy = [];
  let horror = [];
  let romance = [];
  let action = [];
  let bannerData = [];

  try {
    const res = await api.get(ENDPOINT.fetchComedyMovies);
    comedy = res?.data?.response?.results || [];
  } catch (err) {
    console.log("Comedy Error:", err?.response?.status || err.message);
  }

  try {
    const res = await api.get(ENDPOINT.fetchHorrorMovies);
    horror = res?.data?.response?.results || [];
  } catch (err) {
    console.log("Horror Error:", err?.response?.status || err.message);
  }

  try {
    const res = await api.get(ENDPOINT.fetchRomanceMovies);
    romance = res?.data?.response?.results || [];
  } catch (err) {
    console.log("Romance Error:", err?.response?.status || err.message);
  }

  try {
    const res = await api.get(ENDPOINT.fetchActionMovies);
    action = res?.data?.response?.results || [];
  } catch (err) {
    console.log("Action Error:", err?.response?.status || err.message);
  }

  try {
    const res = await api.get(ENDPOINT.fetchAnimeMovies);
    bannerData = res?.data?.response?.results || [];
  } catch (err) {
    console.log("Anime Error:", err?.response?.status || err.message);
  }

  const list = [
    {
      label: "Top Comedy Movies",
      href: "comedy",
    },
    {
      label: "Top Horror Movies",
      href: "horror",
    },
    {
      label: "Top Romance Movies",
      href: "romance",
    },
    {
      label: "Top Action Movies",
      href: "action",
    },
  ];

  return (
    <>
      <JumperSection list={list} />

      <BannerSection data={bannerData} />

      <CategoriesSection
        title="Top Comedy Movies"
        id="comedy"
        data={comedy}
      />

      <CategoriesSection
        title="Top Horror Movies"
        id="horror"
        data={horror}
      />

      <CategoriesSection
        title="Top Romance Movies"
        id="romance"
        data={romance}
      />

      <CategoriesSection
        title="Top Action Movies"
        id="action"
        data={action}
      />
    </>
  );
}