export default (state , action)=>{
    switch(action.type){
        case 'delete':
            return {
                ...state , 
                transactions : state.transactions.filter((transaction)=>transaction.id !== action.peyload)
            }
        case 'add':
            return {
                ...state ,
                transactions : [...state.transactions , action.peyload]
            }
        default :
        return state ;
    }
}