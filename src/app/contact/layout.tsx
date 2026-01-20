import { ReactNode } from "react";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>
        This is contact layout...
        {children}
      </h1>
    </div>
  );
}
