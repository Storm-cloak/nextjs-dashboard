export default async function Page() {
  const delayed = await new Promise(resolve => setTimeout(resolve, 1000));

  return <p>Dashboard Page</p>;
}