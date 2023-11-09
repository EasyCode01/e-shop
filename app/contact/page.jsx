import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function ContactPage() {
  return (
    <div className="mt-16">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-8">
        <div className="shadow-lg rounded-md px-5 py-7 flex flex-col gap-4">
          <div className="pb-6 border-b-[1px] border-deep-gray border-solid">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red">
                <PhoneOutlinedIcon className="text-white" />
              </div>
              <p>Call To us</p>
            </div>

            <p className="my-4 text-sm">
              We are available 24/7&sbquo; 7 days a week
            </p>

            <p className="text-sm">Phone: +123455657</p>
          </div>

          <div className="pb-2 ">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red">
                <EmailOutlinedIcon className="text-white" />
              </div>
              <p>Write To Us</p>
            </div>

            <p className="mt-4 text-sm">
              fill out our form and we contact you within 24 hours
            </p>

            <p className="my-4 text-sm">Emails: customer@exclusive.com</p>

            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="flex-1 shadow-lg rounded-md px-5 py-7 flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5 w-full">
            <input
              className="text-sm flex-1 bg-gray p-3 rounded-md focus:outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="text-sm flex-1 bg-gray p-3 rounded-md focus:outline-none"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="text-sm flex-1 bg-gray p-3 rounded-md focus:outline-none"
              type="tel"
              placeholder="Your Phone"
            />
          </div>
          <div>
            <textarea
              className="text-sm bg-gray p-3 rounded-md focus:outline-none w-full h-44"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="btn-primary self-end">Send Message</button>
        </div>
      </div>
    </div>
  );
}
