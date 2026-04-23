import { resendClient, sender } from "../utils/resent.js";
import { createEmailWecomeTemplate } from "./emailTemplates.js";


export const sendwelcomeEmail = async (email, name, clientUrl) => {
    const { data, error } = await resendClient.emails.send({
        from: `sender.name <${sender.email}>`,
        to: email,
        subject: "Welcome to ChatApp!",
        html: createEmailWecomeTemplate(name, clientUrl)
    });


    if (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");

    }
    else {
        console.log("Welcome email sent successfully:", data);
    }
};

