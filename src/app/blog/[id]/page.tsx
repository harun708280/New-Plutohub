import BlogDetailsPage from "../../../Components/BlogDetailsPage/BlogDetailsPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <BlogDetailsPage id={{ id: id }} />;
}