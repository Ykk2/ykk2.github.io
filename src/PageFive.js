import ContactForm from "./ContactForm";
import { useState } from "react";

export const PageFive = () => {

const [sent, setSent] = useState(false)

    return (
        <div className={`Page ${sent ? "Play" : "Five"}`}>
            <ContactForm sent={sent} setSent={setSent} />
        </div>

    )
}

export default PageFive
