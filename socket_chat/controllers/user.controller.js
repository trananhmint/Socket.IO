const User = require("../models/user.model");

const getAllReceivers = async (req, res) => {

  try {
    const excludedId = req.user.id;
    const receiverList = await User.find({ _id: { $ne: excludedId } }).select("-password");

    return res.status(200).json({
        isSuccess: true,
        data: receiverList,
        message: "List of Receivers"
    })

  } catch (error) {
    return res.status(200).json({
        isSuccess: false,
        data: null,
        message: "Error server"
    })
  }
};

module.exports = {
    getAllReceivers
}