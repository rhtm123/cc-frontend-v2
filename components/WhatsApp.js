import { FaWhatsappSquare } from "react-icons/fa";

const WhatsApp = () => {

    return(
        <a
        href="https://wa.me/919518901902"
        className="fixed bottom-4 right-4 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare className="zoom-in-zoom-out text-green-600	" size={64} />
        
       
      </a>
    )
}

export default WhatsApp;