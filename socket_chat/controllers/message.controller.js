const User = require("../models/user.model");
const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
const { receiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      message: message,
      senderId: senderId,
      receiverId: receiverId,
    });
    if (newMessage) {
      conversation.messages.push(newMessage.id);
      await Promise.all([newMessage.save(),conversation.save()])
    }

    const receiverSocket = receiverSocketId(receiverId);
    if(receiverSocket) {
      io.to(receiverSocket).emit("newMessage", newMessage); 
    }

    return res.status(200).json({
      isSuccess: true,
      data: newMessage,
      message: "Send successfully",
    });
  } catch (error) {
    return res.status(200).json({
      isSuccess: false,
      data: null,
      message: "Error",
    });
  }
};

const getAllMessage = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user.id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json({
        isSuccess: true,
        data: [],
        message: "Conversation is not existed",
      });
    }
    const messages = conversation.messages;
    return res.status(200).json({
      isSuccess: true,
      data: messages,
      message: "Conversation is existed",
    });
  } catch (error) {
    return res.status(200).json({
      isSuccess: false,
      data: null,
      message: "Server error",
    });
  }
};

module.exports = {
  sendMessage,
  getAllMessage,
};
