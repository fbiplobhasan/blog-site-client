import { env } from "@/env";

const API_URL = env.API_URL;

interface GetBlogParams {
  isFeatured?: boolean;
  search?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogPost: async function (
    params?: GetBlogParams,
    options?: ServiceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);
      // console.log(Object.entries(params))
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      // url.searchParams.append("key", "value");
      const res = await fetch(url.toString(), config);
      // const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } });
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong!" } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong." } };
    }
  },
};
