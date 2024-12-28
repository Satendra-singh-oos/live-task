import axios from "axios";

export const createOrder = (req, res) => {
  try {
    const { orderDetails, userId } = req.body;

    // create order
    console.log("Order added in the db", { orderDetails });

    // after succsfully order
    axios
      .post(`http://localhost:8001/v1/user/notify`, {
        orderDetails,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return res.status(200).json({
      sucess: true,
      message: "Order created",
    });
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong: ", error);
  }
};
