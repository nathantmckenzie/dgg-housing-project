"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans text-black">
      <main className="flex min-h-screen w-full flex-col items-stretch justify-between bg-white dark:bg-black">
        <div className="relative w-full">
          <Image
            src="/homepage.png"
            alt="Homepage"
            width={1440}
            height={500}
            priority
            style={{ width: "100%", height: "auto" }}
          />

          <button
            onClick={() => setOpen(true)}
            className="
              absolute 
              left-1/2 
              top-[75%] 
              -translate-x-1/2 
              -translate-y-1/2
              bg-[#c16011]
              text-white 
              font-semibold 
              rounded-sm 
              shadow-lg
              px-[clamp(.3rem,1vw,2.5rem)]
              py-[clamp(.25rem,1vw,1rem)]
              text-[clamp(.5rem,1vw,1.25rem)]
              hover:bg-[#a75a1a]
              transition
              cursor-pointer
            "
          >
            Sign Up for Updates
          </button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* Modal Card */}
            <div className="relative w-[90%] max-w-md rounded-lg p-8 pb-28 text-center shadow-xl bg-white">
              {submitted ? (
                <p className="text-xl font-medium text-BLACK">
                  Thank you! We will follow up shortly
                </p>
              ) : (
                <>
                  <h2 className="mb-4 text-xl font-semibold">SEND ME UPDATES</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      // Show success message immediately
                      setSubmitted(true);

                      const formData = new FormData(e.target);

                      // Submit in the background (no-cors)
                      fetch(
                        "https://solvi7.us11.list-manage.com/subscribe/post?u=dc8985960e26176fb9fcae712&id=872789b23f&f_id=00c226e1f0",
                        {
                          method: "POST",
                          mode: "no-cors",
                          body: formData,
                        },
                      );

                      e.target.reset();

                      // Close modal after 3 seconds
                      setTimeout(() => {
                        setOpen(false);
                        setSubmitted(false);
                      }, 3000);
                    }}
                    className="flex flex-col gap-3"
                  >
                    <input
                      type="text"
                      name="FNAME"
                      placeholder="First Name"
                      className="border p-3 rounded"
                    />

                    <input
                      type="text"
                      name="LNAME"
                      placeholder="Last Name"
                      className="border p-3 rounded"
                    />

                    <input
                      type="email"
                      name="EMAIL"
                      required
                      placeholder="Email"
                      className="border p-3 rounded"
                    />

                    <input
                      type="text"
                      name="PHONE"
                      placeholder="Phone Number"
                      className="border p-3 rounded"
                    />

                    <div className="absolute left-[-5000px]">
                      <input
                        type="text"
                        name="b_dc8985960e26176fb9fcae712_872789b23f"
                        tabIndex={-1}
                        defaultValue=""
                      />
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer rounded bg-[#c16011] p-3 text-white hover:bg-[#a75a1a]"
                    >
                      SEND
                    </button>
                  </form>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 cursor-pointer text-sm text-gray-500"
                  >
                    Close
                  </button>
                </>
              )}

              <Image
                src="/deline-logo.png"
                alt="Deline Logo"
                width={160}
                height={160}
                className="pointer-events-none absolute bottom-[5%] left-1/2 max-w-md -translate-x-1/2"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
