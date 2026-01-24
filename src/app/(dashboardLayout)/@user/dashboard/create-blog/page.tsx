import { CreateBlogFormClient } from "@/components/modules/user/createBlog/createBlogFormClient";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
  const { data } = await blogService.getBlogPost({});
  console.log(data);
  return (
    <div>
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient/>
      {data?.data.map((item: BlogPost) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
