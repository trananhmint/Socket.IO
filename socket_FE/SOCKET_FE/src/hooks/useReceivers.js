import React, { useEffect, useState } from "react";
import userService from "../services/user.service";

const useReceivers = () => {
  const [loading, setLoading] = useState(false);
  const [receiversList, setReceiversList] = useState([]);

  const getAllReceivers = async () => {
    setLoading(true);
    const receivers = await userService.getAllReceivers();
    setReceiversList(receivers);
    setLoading(false);
    return true;
  };

  useEffect(() => {
    getAllReceivers();
  },[]);

  return {
    loading,
    receiversList,
  };
};

export default useReceivers;
