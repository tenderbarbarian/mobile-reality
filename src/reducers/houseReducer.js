const houseReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_HOUSE':
          return state.concat([action.data]);
        case 'DELETE_HOUSE':
          return state.filter((house)=>house.id !== action.id);
        // case 'EDIT_HOUSE':
        //     return state.map((house)=>house.id === action.id ? {...house,editing:!house.editing}:house)
        default:
          return state;
      }
}
export default houseReducer;