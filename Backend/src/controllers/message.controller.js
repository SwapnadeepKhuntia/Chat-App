import Message from "../modules/message.module.js";
import User from "../modules/user.module.js";

export const  getAllContacts = async (req, res) => {
    try {
        const userId = req.user._id;
        
        const filteruser = await User.find({_id: { $ne: userId }}).select("-password");

        res.status(200).json(filteruser);
        
        
    } catch (error) {
         res.status(500).json({message:"Internal Server Error"});
    }

}

// export const getchatPartners = async (req, res) => {

// }

export const getMessagebyuserId = async (req, res) => {
    try {
        const myId = req.user._id;
    // const otherId = req.params.id;
    const {id} = req.params;

    const messages = await Message.find({
        $or: [
            { senderId : myId, receiverId: id },
            { senderId: id, receiverId: myId }
        ]
    });

    res.status(200).json(messages);

    } catch (error) {
        console.log("Error in get Message conroller",error);
        res.status(500).json({message:"Internal Server Error"});
    }

    
}

export const sendMessage = async (req, res) => {
    try {
        const {content} = req.body;
        const senderId = req.user._id;
        const receiverId = req.params.id;

        // let imageUrl = null;
        // if(image){
        // //    cloudinary integration for image upload
        //     // const result = await cloudinary.uploader.upload(image, { folder: "chatapp" });
        //     // imageUrl = result.secure_url;
        //     // imageUrl = image; // For now, we are directly using the image URL from the request body 
        // }

        const newMessage = new Message({
            senderId,
            receiverId,
            text:content
            // image
        });

        await newMessage.save();

        res.status(201).json(newMessage);
    }catch (error) {
        console.log("Error in send Message conroller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};