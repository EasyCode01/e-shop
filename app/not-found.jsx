import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-5 px-4">
      <h1 className="text-4xl md:text-6xl font-medium text-center">
        404 Not Found
      </h1>
      <p className="text-center">
        You visited a page that does not exist. You may go back to the home
        page.
      </p>
      <Link href="/">
        <button className="btn-primary">Back to home page</button>
      </Link>
    </main>
  );
}
