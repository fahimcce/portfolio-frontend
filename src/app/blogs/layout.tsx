import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="py-2">{children}</div>;
}
