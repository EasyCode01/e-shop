import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen min-w-screen flex items-center gap-4 justify-center p-4">
      <div className="hidden md:block w-3/5">
        <img src="/images/dl.beatsnoop 1.png" alt="Logo" className=" h-auto" />
      </div>
      <div className="w-full md:w-2/5">
        <div className="max-w-md mx-auto flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-2">Log in to Exclusive</h1>
          <p className="text-sm mb-4">Enter your details below</p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-400 focus:outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 focus:outline-none focus:border-black"
            />
            <div className="flex items-center justify-between">
              <button className="btn-primary">Log In</button>
              <Link href="/forgot" className="text-sm text-red">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
