'use client'

import {Provider} from "react-redux";
import {store} from "@/reducers";
import SuperTokensReact, {SuperTokensWrapper} from "supertokens-auth-react";
import * as SuperTokensConfig from "@config/superTokensConfig";
import {setRouter} from "@config/superTokensConfig";
import { usePathname, useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}
export function Providers({ children }) {
  setRouter(useRouter(), usePathname() || window.location.pathname);

  return (
    <SuperTokensWrapper>
      <Provider store={store}>{children}</Provider>
    </SuperTokensWrapper>
  )
}