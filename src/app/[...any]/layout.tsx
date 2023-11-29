import { ReactNode } from "react";

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div>{children}</div>;
}
