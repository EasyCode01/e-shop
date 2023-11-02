import { SearchOffOutlined } from "@mui/icons-material";
import Image from "next/image";
import { person } from "./constant/data";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <div className="container">
        <p className="text-light-red">{person.name}</p>
        <Image src={person.image} alt="Ezekiel" width={20} height={20} />

        <div>
          <button className="btn-primary">View all Products</button>
        </div>
        <div>
          <button className="btn-dark">View all Products</button>
        </div>
      </div>
    </main>
  );
}
