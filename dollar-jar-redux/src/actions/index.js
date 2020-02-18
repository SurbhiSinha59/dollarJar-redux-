export function HandleNameChange(event) {
  return {
    type: "HANDLE_NAME_CHANGE",
    payload: event.target.value
  };
}

export function onNameChange(event) {
  return {
    type: "ON-NAME-CHANGE",
    payload: event.target.value
  };
}

export function onUserAddition(event) {
  return {
    type: "ON-USER-ADDITION",
    payload: event
  };
}

// export function onEnterPress(event) {
//   return {
//     type: "ON-ENTER-PRESS",
//     payload: event
//   };
// }

export function onJarChange(event) {
  return {
    type: "ON-JAR-CHANGE",
    payload: event.target.value
  };
}

export function onAddAmount(id) {
  return {
    type: "ON-ADD-AMOUNT",
    payload: id
  };
}

export function onSubAmount(id) {
  return {
    type: "ON-SUB-AMOUNT",
    payload: id
  };
}

export function calculateTotalAmount() {
  return {
    type: "CALCULATE-TOTAL-AMOUNT"
  };
}
