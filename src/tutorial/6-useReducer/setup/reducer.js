const reducer=(state,action)=>{
  if(action.type==="ADD_ITEM"){
    const newItems=[...state.people, action.new_item]//containg my person
    return {...state,people:newItems,isModalOpen:true,modalContent:"Person added"}
  }
  if(action.type==="NO_ITEM"){
    return {...state,isModalOpen:true,modalContent:"Insert values"}
  }
  if(action.type==="DISAPEAR"){
    return {...state,isModalOpen:false}
  }
  if(action.type==="REMOVE"){
    const NewPeople=state.people.filter((person)=>
      person.id!==action.IDPass
    )
    return {...state,people:NewPeople}
  }
  return state
}
export default reducer