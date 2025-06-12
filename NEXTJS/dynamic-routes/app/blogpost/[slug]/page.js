export default async function Page({ params }) {
  const { slug } = await params

  let languages = ["python", "javascript", "typescript", "java", "c++", "c#"]

  if(languages.includes(slug)) {
    return <div>My Post: {slug} - This is a programming language</div>
  }
  else
  return <div>Post not found</div>

  return <div>My Post: {slug}</div>
}