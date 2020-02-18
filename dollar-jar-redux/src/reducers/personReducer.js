const initialState = {
  persons: [
    { name: "Nikki", total: 0, id: 1 },
    { name: "Nikkiii", total: 0, id: 2 },
    { name: "Nikkiiiii", total: 0, id: 3 }
  ],
  newPersonObj: { name: "", total: 0, id: 0 },
  idCount: 3,
  jarValue: 10,
  totalSum: 0
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON-NAME-CHANGE":
      let updatedState = { ...state };
      let tempId = updatedState.idCount + 1;
      let newPerson = updatedState.newPersonObj;
      newPerson.name = action.payload;
      newPerson.id = tempId;
      newPerson.total = 0;
      return {
        ...state,
        newPersonObj: newPerson,
        idCount: tempId
      };

    case "ON-USER-ADDITION":
      action.payload.preventDefault();
      let updatedState1 = { ...state };
      let temp1 = { ...updatedState1.newPersonObj };
      let newPersonsArray = [...updatedState1.persons];
      if (temp1.name != "") {
        newPersonsArray.push(temp1);
        updatedState1.persons = newPersonsArray;
      }
      return { ...state, persons: newPersonsArray };

    // case "ON-ENTER-PRESS":
    //   if (event.keyCode == 13) {
    //     action.payload.preventDefault();
    //     let updatedState2 = { ...state };
    //     let temp2 = { ...updatedState2.newPersonObj };
    //     let newPersonsArray1 = [...updatedState2.persons];
    //     if (temp2.name != "") {
    //       newPersonsArray1.push(temp2);
    //       updatedState2.persons = newPersonsArray1;
    //     }
    //   }
    //   return { ...state, persons: newPersonsArray1 };

    case "ON-JAR-CHANGE":
      return { ...state, jarValue: parseInt(action.payload) };

    case "ON-ADD-AMOUNT":
      let i = 0;
      let updatedState3 = { ...state };
      let newPersonsArray2 = [...updatedState3.persons];
      //console.log(newPersonsArray2);
      for (i = 0; i < newPersonsArray2.length; i++) {
        if (newPersonsArray2[i].id === action.payload) {
          break;
        }
      }

      let temp = { ...newPersonsArray2[i] };
      temp.total = temp.total + parseInt(updatedState3.jarValue);

      newPersonsArray2[i] = temp;
      //console.log(temp);

      return { ...state, persons: newPersonsArray2 };
    // let updatedPersons = [...state.persons];
    // let i = 0;
    // for (i = 0; i < updatedPersons.length; i++) {
    //   if (updatedPersons[i].id === action.payload) {
    //     break;
    //   }
    // }
    // updatedPersons[i].total += parseInt(state.jarValue);
    // console.log(updatedPersons);
    // return {
    //   ...state,
    //   persons: updatedPersons
    // };

    case "ON-SUB-AMOUNT": {
      let i = 0;
      let updatedState3 = { ...state };
      let newPersonsArray2 = [...updatedState3.persons];
      //console.log(newPersonsArray2);
      for (i = 0; i < newPersonsArray2.length; i++) {
        if (newPersonsArray2[i].id === action.payload) {
          break;
        }
      }

      let temp = { ...newPersonsArray2[i] };
      temp.total = temp.total - parseInt(updatedState3.jarValue);

      newPersonsArray2[i] = temp;
      //console.log(temp);

      return { ...state, persons: newPersonsArray2 };
    }

    case "CALCULATE-TOTAL-AMOUNT":
      let sum = 0;
      let updatedState5 = { ...state };

      updatedState5.persons.forEach(k => {
        sum = sum + k.total;
      });

      return { ...state, totalSum: sum };

    default:
      return state;
  }
};

export default personReducer;
