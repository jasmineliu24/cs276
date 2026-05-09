"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSelectedDomain } from "@/components/CareerSelector";

type Props = {
  basePath: string;
  className?: string;
  children: React.ReactNode;
};

function Inner({ basePath, className, children }: Props) {
  const domain = useSelectedDomain();
  const href = domain ? `${basePath}?domain=${domain}` : basePath;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function DomainAwareLink(props: Props) {
  return (
    <Suspense fallback={<Link href={props.basePath} className={props.className}>{props.children}</Link>}>
      <Inner {...props} />
    </Suspense>
  );
}
