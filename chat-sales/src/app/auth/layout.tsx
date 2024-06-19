import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex flex-col items-start p-6">
        {/* image*/}
        {children}
      </div>
    </div>
  );
};
