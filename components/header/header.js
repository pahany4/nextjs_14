import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-5 z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-gray-600">
      <nav className={"flex justify-center gap-5 w-fit m-auto text-white"}>
        <Link href={"/"}>Главная</Link>
        <Link href={"/blog"}>Блог</Link>
        <Link href={"/about"}>О нас</Link>
      </nav>
    </header>
  )
}