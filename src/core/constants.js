export const stepMapping = Object.freeze({
  from: "from",
  to: "to",
  confirm: "confirm",
  weight: "weight",
  shipping: "shipping"
});

export const shippingOptionObj = Object.freeze({
  ground: 1,
  priority: 2
});

export const alertMessageCons = Object.freeze({
  success: {
    heading: "Hey, nice to see you !",
    message: "You successfully logged in"
  },
  error: {
    heading: "Oh snap! You got an error while login!",
    message: "Unfortunetly, Your creditials doesnt work please try again"
  }
});
