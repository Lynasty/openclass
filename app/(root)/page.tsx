import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import SortingFilter from "@/components/shared/SortingFilter";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const sorting = (searchParams?.sort as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    sorting,
    page,
    limit: 6,
    upcomingEventsOnly: true,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Cultivons les compétences de l'avenir !</h1>
            <p className="p-regular-20 md:p-regular-24">
              Ici, c'est l'endroit où on s'engage à faire pousser vos
              compétences pour un avenir brillant. Prêts à cultiver ensemble le
              succès ?
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explorer</Link>
            </Button>
          </div>
          <Image
            className="max-h-[70vh] object-contain object-center m-auto 2xl:max-h-[50vh]"
            src="/assets/images/hero-learn.jpg"
            alt="Hero"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Votre confiance, <br /> notre succès
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
          <SortingFilter />
        </div>

        <Collection
          data={events?.data}
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
