import React from "react";

function ContactModal({ isOpen, onClose, onSubmit, quizName }) {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  const handleSubmit = () => {
    if (name && number) {
      const contactData = {
        email: "quiz@gmail.com", // Set the email as specified
        mobile: number,
        short_msg: `User ${name} has attempted the quiz ${quizName}.`, // Set the short message
        purpose: "contact", // Set the purpose
      };

      // Send POST request to the backend
      fetch(`${process.env.API_URL}auth/contactsubscribers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token if needed
        },
        body: JSON.stringify(contactData),
      })
        .then((response) => {
          if (response.ok) {
            onSubmit({ name, number });
            onClose();
          } else {
            alert("Failed to submit contact information.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while submitting the contact information.");
        });
    } else {
      alert("Please fill in both fields.");
    }
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
    //   <div className="bg-white p-6 rounded-lg shadow-lg z-60">
    //     <h2 className="text-lg font-bold mb-4">Enter Your Details</h2>
        // <input
        //   type="text"
        //   placeholder="Name"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        //   className="border border-gray-300 p-2 mb-4 w-full rounded"
        // />
        // <input
        //   type="text"
        //   placeholder="Number"
        //   value={number}
        //   onChange={(e) => setNumber(e.target.value)}
        //   className="border border-gray-300 p-2 mb-4 w-full rounded"
        // />
    //     <div className="flex justify-end">
          // <button
          //   onClick={handleSubmit}
          //   className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          // >
    //         Submit
    //       </button>
    //       <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
    //         Cancel
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-blue-50 font-[sans-serif] fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full flex flex-col lg:flex-row lg:space-x-8"> {/* Adjusted layout and spacing */}
      
      {/* Form Section */}
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0"> {/* Sets width and spacing for large screens */}
        <h2 className="text-2xl font-extrabold text-gray-800 text-center">Let&apos;s Connect & Discover Your Results!</h2>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed text-center">
        Curious about your performance? Share your contact details, and we&apos;ll get your results to you in no time!
        </p>
  
        <div className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="text-gray-800 bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-4 py-2"
            >
              Submit
            </button>
            <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded ml-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
  
      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex items-center justify-center"> 
        <img
          src="https://readymadeui.com/images/analtsis.webp"
          className="w-full h-auto object-contain max-w-sm lg:max-w-full mx-auto" 
          alt="Contact"
        />
      </div>
    </div>
  </div>
  
  );
}

export default ContactModal;
