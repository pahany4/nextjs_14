async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  // здесь response.ok, response.status и т.д.
  //console.log(response)

  if (!response.ok) throw new Error("Unable to fetch posts!")
  // здесь data
  return response.json()
}
async function getData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      // ревалидация по таймингу при запущенном next js сервере
      revalidate: 60
    }
  })

  // здесь response.ok, response.status и т.д.
  //console.log(response)

  // здесь data
  return response.json()
}

// динамическая meta
export const generateMetadata = async ({params: {id}}) => {
  return {
    title: `Пост - ${id}`
  }
}

export async function generateStaticParams () {
  const posts = await getPosts()

  return posts.map(post => ({
    id: post.id.toString()
  }))
}

export default async function Post({params: {id}}) {

  const post = await getData(id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}