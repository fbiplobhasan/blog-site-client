import HistoryTable from "@/components/modules/user/createBlog/HistoryTable";
import PaginationControls from "@/components/ui/pagination-controls";
import { blogService } from "@/services/blog.service";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  console.log(page);

  const response = await blogService.getBlogPost({ page });

  console.log(response);

  const posts = response.data?.data || [];
  const pagination = response.data?.pagination || {
    limit: 10,
    page: 10,
    total: 1,
    totalPages: 1,
  };
  console.log(pagination);

  console.log(posts);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
