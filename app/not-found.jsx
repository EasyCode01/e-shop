import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-6xl font-medium">404 Not Found</h1>
      <p>
        You visited a page that does not exist. You may go back to the home
        page.
      </p>
      <Link href="/">
        <button className="btn-primary">Back to home page</button>
      </Link>
    </main>
  );
}
