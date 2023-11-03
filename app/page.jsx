import { SearchOffOutlined } from "@mui/icons-material";
import Image from "next/image";
import { person } from "./constant/data";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <div className="container">
        <Hero />
      </div>
    </main>
  );
}
