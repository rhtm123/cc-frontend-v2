import Link from "next/link"

export function ScholarshipNav (){



    return (
     <div id="banner" tabIndex="-1" className="z-50 bg-base-200 flex justify-center w-full px-4 py-3 border border-b border-gray-200 lg:py-4">
      <div className="items-center md:flex">
        <p className="text-sm font-medium md:my-0">
          <span className="bg-primary text-base-100 text-xs font-semibold mr-2 px-1 py-0.5 rounded hidden md:inline">NEW</span>
          Join Our Scholarship Program.
            <Link href="/scholarship-program/" className="inline-flex items-center ml-2 text-sm font-medium text-primary md:ml-2 hover:underline">
              Check it out
              <svg className="w-3 h-3 ml-1.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </Link>
        </p>
      </div>
  </div>
    )
}