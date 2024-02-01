import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });
  const user = await currentUser();
  return (
    <>
      {/* My Info */}
      <section className="bg-dotted-pattern dark:bg-dotted-pattern-dark bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-secondary-foreground text-center sm:text-left border-b-2">
            Mes informations
          </h3>
        </div>
      </section>

      <section className="wrapper my-8 text-secondary-foreground">
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold border-b-2">Nom d'utilisateur</p>
            <p>{user?.username}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold border-b-2">Nom complet</p>
            <p>
              {user?.firstName} {user?.lastName}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold border-b-2">Emails</p>
            <ul className="list-disc">
              {user?.emailAddresses.map((email) => (
                <li key={email.emailAddress}>{email.emailAddress}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* My Tickets */}
      <section className="bg-dotted-pattern dark:bg-dotted-pattern-dark text-secondary-foreground bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left border-b-2">
            Mes achats
          </h3>
          <Button
            asChild
            size="lg"
            className="button text-neutral-50 hidden sm:flex"
          >
            <Link href="/#events">Découvrir d'autres évènements</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="Aucun billet d'événement n'a encore été acheté"
          emptyStateSubtext="Vos futurs achats apparaîtront ici !"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-dotted-pattern dark:bg-dotted-pattern-dark bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left text-secondary-foreground border-b-2">
            Mes évènements
          </h3>
          <Button
            asChild
            size="lg"
            className="button hidden text-neutral-50 sm:flex"
          >
            <Link href="/events/create">Créer</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="Aucun événement n'a encore été créé"
          emptyStateSubtext="Allez en créer maintenant !"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
