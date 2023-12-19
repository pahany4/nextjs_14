import Link from "next/link";

export default function AboutLayout({children}) {
  return (
    <div>
      <h1 className={"text-3xl font-bold"}>О нас</h1>
      <ul className={"flex gap-5"}>
        <li className={"text-base font-bold"}><Link href={"/about/contacts"}>Контакты</Link></li>
        <li className={"text-base font-bold"}><Link href={"/about/team"}>Команда</Link></li>
      </ul>
      {children}
    </div>
  )
}