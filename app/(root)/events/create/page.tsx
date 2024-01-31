import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-dotted-pattern dark:bg-dotted-pattern-dark bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-secondary-foreground text-center border-b-2 sm:text-left">
          Créer un évènement
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
