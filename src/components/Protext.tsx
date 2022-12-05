import { ReactNode } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { trpc } from "~/lib/trpc";

export const Protect = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useUser();
  const examplePublicQuery = trpc.example.public.useQuery({
    text: "public",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div>
        <Link href="/api/auth/login">Login</Link>
        <div>examplePublicQuery:</div>
        <pre>{JSON.stringify(examplePublicQuery, null, 2)}</pre>
      </div>
    );
  }

  return <div>{children}</div>;
};
