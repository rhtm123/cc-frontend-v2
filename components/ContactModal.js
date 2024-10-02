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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg z-60">
        <h2 className="text-lg font-bold mb-4">Enter Your Details</h2>
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
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Submit
          </button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
