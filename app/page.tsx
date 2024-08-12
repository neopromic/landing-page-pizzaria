import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="px-4">
      <section className="my-4 flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">
          Comida <span className="text-primary font-extrabold">deliciosa</span>,
          <br />
          <span className="text-primary font-extrabold">Vida</span> deliciosa.
        </h1>
        <Button variant={"outline"} className="border-primary">
          Saiba mais
        </Button>
      </section>
    </main>
  );
}
