import Link from "next/link";
import photo from "../../public/images/signup-login.png";
import Image from "next/image";

export default function Login() {
  return (
    <section className="mt-20 lg:mt-0 py-8">
      <div className="flex flex-col gap-4 md:flex-row items-center p-2">
        <div className="flex-1 h-[600px] w-full relative">
          <Image
            className="object-cover"
            src={photo}
            alt="Signup Logo"
            quality={100}
            priority
            layout="fill"
          />
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
      </div>
    </section>
  );
}
