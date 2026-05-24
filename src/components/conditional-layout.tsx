"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f4f8ff_30%,#f7fbff_100%)]"
      >
        <div className="absolute inset-0 aviation-grid opacity-[0.14]" />
        <div className="absolute inset-0 aviation-route-lines opacity-[0.16]" />
        <div className="absolute -left-24 top-[-8%] h-[42vh] w-[42vh] rounded-full bg-[radial-gradient(circle,rgba(66,151,255,0.2)_0%,rgba(66,151,255,0)_70%)] blur-2xl" />
        <div className="absolute -right-20 top-[22%] h-[46vh] w-[46vh] rounded-full bg-[radial-gradient(circle,rgba(16,70,168,0.18)_0%,rgba(16,70,168,0)_72%)] blur-2xl" />
        <div className="absolute bottom-[-14%] left-[12%] h-[36vh] w-[36vh] rounded-full bg-[radial-gradient(circle,rgba(150,204,255,0.3)_0%,rgba(150,204,255,0)_74%)] blur-2xl" />
      </div>
      <Navbar />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
}
