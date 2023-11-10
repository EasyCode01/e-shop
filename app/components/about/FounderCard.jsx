import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Image from "next/image";
import Link from "next/link";


export default function FounderCard({ founder, numVisibleCards }) {
  return (
    <div
      className="flex flex-col bg-gray-200 rounded-lg p-4 m-4 gap-4"
      style={{ width: `${100 / numVisibleCards}%` }}
    >
      <div className="bg-gray rounded-lg overflow-hidden">
        <Image
          src={founder.image}
          alt={founder.name}
          width={250}
          height={100}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{founder.name}</h1>
        <small>{founder.role}</small>
        <ul className="flex gap-4">
          <li>
            <Link href={`${founder.InstagramLink}`}>
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href={`${founder.LinkedInLimk}`}>
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link href={`${founder.twitterLink}`}>
              <Twitter />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
