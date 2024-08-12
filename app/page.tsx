import { Button } from "@/components/ui/button";
import { CalendarClockIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4">
      <section className="my-4 flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">
          Comida <span className="text-primary font-extrabold">deliciosa</span>,
          <br />
          <span className="text-primary font-extrabold">Vida</span> deliciosa.
        </h1>
        <Button variant={"outline"} className="border-primary w-fit max-w-fit">
          Saiba mais
        </Button>
      </section>
      <section className="bg-muted p-4 rounded space-y-2">
        <h1 className="text-xl font-bold text-center text-nowrap">Mais <span className="text-primary">Pedidos</span></h1>
        <div className="flex gap-2 overflow-x-auto snap-x items-center justify-center">

          <section className="flex flex-col space-y-2 max-w-fit bg-background p-2 rounded-md justify-center items-center shadow-md border">
            <Image
            src="/pizza.png"
            alt="Pizza"
            width={100}
            height={100}
            className="object-cover "
            />
            <h2>Pizza Calabresa</h2>
            <Button className="gap-2">
              <CalendarClockIcon size={16} />
              Reservar
              </Button>
          </section>
          <section className="flex flex-col space-y-2 max-w-fit bg-background p-2 rounded-md justify-center items-center shadow-md border">
            <Image
            src="/pizza.png"
            alt="Pizza"
            width={100}
            height={100}
            className="object-cover "
            />
            <h2>Pizza Portuguesa</h2>
            <Button className="gap-2">
              <CalendarClockIcon size={16} />
              Reservar
              </Button>
          </section>
          <section className="flex flex-col space-y-2 max-w-fit bg-background p-2 rounded-md justify-center items-center shadow-md border">
            <Image
            src="/pizza.png"
            alt="Pizza"
            width={100}
            height={100}
            className="object-cover "
            />
            <h2>Pizza Peperoni</h2>
            <Button className="gap-2">
              <CalendarClockIcon size={16} />
              Reservar
              </Button>
          </section>
          </div>
      </section>
    </main>
  );
}
