export default async function Content () {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return <div>contents...</div>
}