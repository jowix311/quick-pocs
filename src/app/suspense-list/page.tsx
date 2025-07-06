/**
 * The Purpose for this page is to check Suspense Fallback triggering upon
 * router.push with search param update.
 */

import { Suspense } from "react";
import { ListServer } from "./_components/list/list.server";
// import Link from "next/link";

// type PageProps = {
//     searchParams: Promise<{page: string}>
// }

// export default function Page({searchParams}: PageProps) {
export default async function  Page() {
  // const page = await searchParams;

  return (
    <Suspense>
    <div className={"h-screen flex items-center justify-center gap-2"}>
      <Suspense fallback={"LOADING..."}>
        <ListServer />
      </Suspense>

      {/* <ul className="flex gap-2">
                <li><Link href="?page=1">Page 1</Link></li>
                <li><Link href="?page=2">Page 2</Link></li>
            </ul> */}
    </div>
    </Suspense>
  );
}
