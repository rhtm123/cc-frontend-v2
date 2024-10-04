import React from "react";
import { postData } from "@/utils/auth"; // Import postData function

function ContactModal({ isOpen, onClose, onSubmit, quizName, questions, rightCount, totalTime }) {
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");

    const handleSubmit = () => {
        if (name && number) {
            // Prepare the long message with detailed quiz results
            let long_msg = `Quiz Name: ${quizName}\n`;
            long_msg += `Total Score: ${rightCount}/${questions.length}\n`;
            long_msg += `Time Taken for the Quiz: ${Math.floor(totalTime / 60)}:${totalTime % 60 < 10 ? '0' : ''}${totalTime % 60} minutes\n\n`;
            long_msg += "Question Details:\n";

            questions.forEach((question, index) => {
                long_msg += `${index + 1}. ${question.text}\n`;
                long_msg += `   Your Answer: ${question.selected || "Not Answered"}\n`;
                long_msg += `   Correct Answer: ${question.right_option}\n`;
                long_msg += `   ${question.selected === question.right_option ? "Result: Correct" : "Result: Wrong"}\n\n`;
            });

            const contactData = {
                email: "quiz.codingchaska@gmail.com", // Set the email as specified
                mobile: number,
                short_msg: `User ${name} has attempted the quiz ${quizName}. Score: ${rightCount}/${questions.length}`,
                long_msg: long_msg, // Set the long message with detailed results
                purpose: "contact", // Set the purpose
            };
            var url = process.env.API_URL + "auth/contactsubscribers/";
            // Send POST request to the backend for contact information
            postData(url, contactData)
                .then((response) => {
                    onSubmit({ name, number });
                    onClose();
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("An error occurred while submitting the contact information.");
                });
        } else {
            alert("Please fill in both fields.");
        }
    };


    if (!isOpen) return null;

    return (
        <div className="bg-blue-50 font-[sans-serif] fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full flex flex-col lg:flex-row lg:space-x-8">
                {/* Form Section */}
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
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