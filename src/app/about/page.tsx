
export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  throw new Error("Something Went Wrong.")

  return <div>about page</div>;
}
