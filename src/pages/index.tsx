import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { trpc } from "~/lib/trpc";

export default function IndexPage() {
  const { user } = useUser();
  const exampleProtectedQuery = trpc.example.protected.useQuery({
    text: "protected",
  });

  if (exampleProtectedQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Logged in as:</div>
      <Link href="/api/auth/logout">(Logout)</Link>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <div>exampleProtectedQuery:</div>
      <pre>{JSON.stringify(exampleProtectedQuery, null, 2)}</pre>
    </div>
  );
}
