import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface IActionsBtn {
  title: string;
  url: string;
}
export function NavLink({ title, url }: IActionsBtn) {
  return (
    <Link href={url} className={buttonVariants({ variant: "link" })}>
      {title}
    </Link>
  );
}
