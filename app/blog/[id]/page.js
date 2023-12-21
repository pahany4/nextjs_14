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

export default async function Post({params: {id}}) {

  const post = await getData(id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}