import aj from "../utils/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);
        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) {
               return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
            }
            else if(decision.reason.isBot()) {
                // Check if the bot is spoofing a legitimate user agent
                return res.status(403).json({ message: "Access denied. Bot traffic is not allowed." });
            }
            else {
               return res.status(403).json({ message: "Access denied. Suspicious activity detected." });
            }
        }

       if(decision.results.some(isSpoofedBot)) {
          return res.status(403).json({ 
            error:"Spoofed bot detected",
            message: "Access denied. Spoofed bot traffic is not allowed." 
        });
       }

        next();

    } catch (error) {
        console.log("Arcject Protection error",error);
        next()
    }
}