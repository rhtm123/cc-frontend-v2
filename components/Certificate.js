import React from "react";
import { Download, Share2 } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Certificate = ({
  isOpen,
  onClose,
  name,
  quizName,
  score,
  totalQuestions,
  date,
}) => {
  const certificateRef = React.useRef();

  console.log(quizName)

  const handleDownload = async () => {
    const element = certificateRef.current;
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${name}-${quizName}-Certificate.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleShare = async () => {
    try {
      const canvas = await html2canvas(certificateRef.current);
      const imgData = canvas.toDataURL("image/png");

      // Convert base64 to blob
      const blob = await (await fetch(imgData)).blob();

      if (navigator.share) {
        const file = new File([blob], "certificate.png", { type: "image/png" });
        await navigator.share({
          title: "My Quiz Certificate",
          text: `I scored ${score}/${totalQuestions} in ${quizName}!`,
          files: [file],
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "certificate.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error sharing:", error);
      alert("Error sharing certificate. Please try downloading instead.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 flex justify-end gap-2">
          <button
            onClick={handleDownload}
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            <Download size={16} /> Download PDF
          </button>
          <button
            onClick={handleShare}
            className="btn btn-secondary btn-sm flex items-center gap-2"
          >
            <Share2 size={16} /> Share
          </button>
          <button onClick={onClose} className="btn btn-ghost btn-sm">
            Close
          </button>
        </div>

        <div ref={certificateRef} className="p-8 bg-white">
          <div className="certificate">
            <div className="inner-certificate">
              <div className="content">
                <img
                  src="https://www.codingchaska.com/images/logo/logo.png"
                  alt="Coding Chaska Logo"
                  className="university-logo"
                  crossOrigin="anonymous"
                />
                <div className="initiative-line">
                  An initiative of Learning Setu Private Limited
                  <br />
                  <a
                    href="https://www.codingchaska.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0048A4" }}
                  >
                    www.codingchaska.com
                  </a>
                </div>

                <div className="header">Certificate of Achievement</div>

                <div className="student-info">
                  <p>
                    This is to certify that <strong>{name}</strong> has
                    successfully completed
                  </p>
                  <p>
                    the <strong>{quizName}</strong> assessment with outstanding
                    performance,
                  </p>
                  <p>
                    achieving a score of{" "}
                    <strong>
                      {score}/{totalQuestions}
                    </strong>
                    .
                  </p>
                  <p>
                    Date of Achievement:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="footer">
                <div className="qr">
                  
                </div>

                <div className="signature">
                  <p className="director">Rohit Maurya</p>
                  <p>Founder & Director</p>
                  <img
                    src="https://codingchaska.up.railway.app/static/img/rohit_sign.png"
                    alt="Signature"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
