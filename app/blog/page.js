import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      // ревалидация по таймингу при запущенном next js сервере
      revalidate: 60
    }
  })

  // здесь response.ok, response.status и т.д.
  //console.log(response)

  if (!response.ok) throw new Error("Unable to fetch posts!")
  // здесь data
  return response.json()
}

export default async function Posts() {

  const posts = await getData()

  return (
    <div>
      <h1>Посты</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link prefetch={false} href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}