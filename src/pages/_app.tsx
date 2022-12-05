import type { AppType } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { trpc } from "~/lib/trpc";
import { Protect } from "~/components/Protext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Protect>
        <Component {...pageProps} />
      </Protect>
    </UserProvider>
  );
};

export default trpc.withTRPC(MyApp);
