const Model = {
  success: false,
  image: null
}

const AnimationReducer = (state=Model,action:any)=>{
  switch(action.type)
  {
    case "PREVIEW_IMAGE" : return {
      success: true,
      image: action.payload.thumbnail
    }
    default : return state;
  }
}

export default AnimationReducer;
