import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // ClerkProvider must wrap the entire app
    // so that we have authentication available everywhere
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
