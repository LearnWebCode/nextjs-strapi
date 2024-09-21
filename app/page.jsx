import { BlocksRenderer } from "@strapi/blocks-react-renderer"

async function getContent() {
  const res = await fetch("http://localhost:1337/api/homepage")
  const home = await res.json()
  return home.data.content
}

export default async function Page() {
  const content = await getContent()

  return (
    <div className="prose max-w-none">
      <BlocksRenderer content={content} />
    </div>
  )
}
