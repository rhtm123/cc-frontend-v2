import { useState } from "react";

export default function InternshipForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !mobile || !address || !college || !degree) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Prepare the message content
      const short_msg = `Internship Application from ${name}`;
      const long_msg = `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Address: ${address}
        College: ${college}
        Degree: ${degree}
        
        Message:
        ${message}
      `;

      const url = process.env.API_URL + "auth/contactsubscribers/";

      // Send POST request to the backend
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          mobile: mobile,
          short_msg: short_msg,
          long_msg: long_msg,
          purpose: "contact",
        }),
      });

      // Also send to contact-us endpoint like in the example
      const url2 = process.env.API_URL + "auth/contact-us/";
      await fetch(url2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "internship@codingchaska.com",
          name: name,
          message: long_msg,
          subject: `Internship Application from ${name}`,
        }),
      });

      setSubmitted(true);

      // Reset form
      setName("");
      setEmail("");
      setMobile("");
      setAddress("");
      setCollege("");
      setDegree("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-base-200 rounded-lg shadow-md p-6">
      {submitted ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Thank You for Applying!</h2>
          <p className="text-lg mb-6">We've received your internship application and will get back to you soon.</p>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/Qr.jpg" // Replace with actual base64 of uploaded QR code
              alt="PhonePe QR Code"
              className="w-full h-auto object-contain max-w-sm mb-4"
            />
            <p className="text-sm mb-4">If you have paid the registration fee, please send the payment receipt to the below WhatsApp number (+91 9370394747)</p>
            <a
              href="https://wa.me/919370394747?text=Hi,%20I%20have%20submitted%20my%20internship%20application.%20Please%20find%20my%20payment%20receipt%20attached."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Send Payment Receipt
            </a>
          </div>
          <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-4">
            Submit Another Application
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Form Section */}
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="text-2xl font-extrabold">Apply for Internship</h2>
            <p className="text-sm opacity-85 mt-2 leading-relaxed">
              Join Our Internship Program<br/>
              Take the first step in your career journey! Fill out the form below to apply for our internship program.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address *
                </label>
                <textarea
                  id="address"
                  placeholder="Your current address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="textarea textarea-bordered w-full h-20"
                  required
                />
              </div>

              <div>
                <label htmlFor="college" className="block text-sm font-medium mb-1">
                  College/University *
                </label>
                <input
                  id="college"
                  type="text"
                  placeholder="Your college or university name"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="degree" className="block text-sm font-medium mb-1">
                  Degree/Course *
                </label>
                <input
                  id="degree"
                  type="text"
                  placeholder="Your degree or course name"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about yourself, your skills, and why you want to intern with us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="textarea textarea-bordered w-full h-32"
                />
              </div>

              {error && <div className="text-error text-sm">{error}</div>}

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      Submitting...
                    </>
                  ) : (
                    "SUBMIT APPLICATION"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* QR Code Section */}
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
            <img
              src="/images/Qr.jpg" // Replace with actual base64 of uploaded QR code
              alt="PhonePe QR Code"
              className="w-full h-auto object-contain max-w-sm mb-4"
            />
            <p className="text-sm mb-4 text-gray-600">Please send the payment receipt to the below WhatsApp number (+91 9370394747)</p>
            <a
              href="https://wa.me/919370394747?text=Hi,%20I%20have%20submitted%20my%20internship%20application.%20Please%20find%20my%20payment%20receipt%20attached."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              SEND PAYMENT RECEIPT
            </a>
          </div>
        </div>
      )}
    </div>
  );
}