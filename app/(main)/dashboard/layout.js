import React from "react";
import DashboardPage from "./page";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="gredient-title text-6xl font-bold mb-4 tracking-tight">
        Dashboard
      </h1>

        <Suspense fallback={
          <div className="h-[300px] w-full justify-center items-center flex">

          <LoaderCircle className="h-10 w-10 animate-spin justify-center items-center" />
          </div>
          
          }>
          <DashboardPage />
        </Suspense>
    </div>
  );
};

export default DashboardLayout;
