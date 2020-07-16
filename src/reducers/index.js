const initialState = {
  images: [
    {id: 1, name: 'LEFT SIDE'},
    {id: 2, name: 'RIGHT SIDE'},
    {id: 3, name: 'FRONT SIDE'},
    {id: 4, name: 'BACK SIDE'},
    {id: 5, name: 'TOP SIDE'},
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETIMAGE':
      return{
        ...state,
        images:state.images.map(item=>{
          if(item.id === action.payload.id){
            item.uri = action.payload.data
          }
          return item
        })
      }
    default:
      return state;
  }
};

export default reducer;
