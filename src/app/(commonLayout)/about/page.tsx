"use client";

import { getBLogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);
  console.log(data);
  console.log(error)

  useEffect(() => {
    (async () => {
      const { data, error } = await getBLogs();
      setData(data);
      setError(error);
    })();
  }, []);

  return <div>about page</div>;
}

// await new Promise((resolve) => setTimeout(resolve, 4000));
// throw new Error("Something Went Wrong.")
