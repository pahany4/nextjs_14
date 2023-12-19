
// динамическая meta
export const generateMetadata = async ({params: {id}}) => {
  return {
    title: `Пост - ${id}`
  }
}

export default function Post({params: {id}}) {
  return (
    <h1>Пост - {id}</h1>
  )
}