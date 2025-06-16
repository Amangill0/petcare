import Category from "@/components/common/Category";
import Dashboard from "@/components/common/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Dashboard>
        <Category />
      </Dashboard>
    </>
  );
}
