"use server";

import { blogService } from "@/services/blog.service";

export const getBLogs = async () => {
  return await blogService.getBlogPost();
};
