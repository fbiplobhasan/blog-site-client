import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <div>
            <Button asChild><Link href="/dashboard/analytics/monthly">Monthly</Link></Button>
            <Button asChild><Link href="/dashboard/analytics/weekly">Weekly</Link></Button>
        </div>
        {children}</div>
  )
}
