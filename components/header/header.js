'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSessionContext} from "supertokens-auth-react/recipe/session";
import {signOut} from "supertokens-auth-react/recipe/thirdpartypasswordless";

export const Header = () => {
  const sessionContext = useSessionContext();

  const pathname = usePathname()

  const logoutClicked = () => {
    signOut().then(() => {
      if (localStorage.getItem("supertokens-passwordless-loginAttemptInfo")) {
        localStorage.removeItem("supertokens-passwordless-loginAttemptInfo")
      }
      document.location.href = `${process.env.NEXT_PUBLIC_WEB_SITE}`;
    })
  };

  return (
    pathname !== "/auth" ?
      <header className="p-5 z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-gray-600">
        <nav className={"flex justify-center gap-5 w-fit m-auto text-white"}>
          <Link href={"/"}>Главная</Link>
          <Link href={"/blog"}>Блог</Link>
          <Link href={"/about"}>О нас</Link>
          {sessionContext.doesSessionExist && <button onClick={logoutClicked}>выйти</button>}
        </nav>
      </header>
      : null
  )
}