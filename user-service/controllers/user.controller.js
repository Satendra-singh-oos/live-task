export const notifyUser = (req, res) => {
  try {
    const { orderDetails } = req.body;

    console.log(orderDetails);

    return res.status(200).json({
      sucess: true,
      message: "Order Succesfully",
      data: orderDetails,
    });
  } catch (error) {
    throw new Error("Something went wrong: ", error?.message);
  }
};
