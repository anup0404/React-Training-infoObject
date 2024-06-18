
import ContextProvider from './Context/ContextProvider'
import Task from './Task'
import ListTask from './ListTask'



const ReducerAndContext = () => {
  
  return (
    <ContextProvider>
   <Task/>
   <ListTask/>
  
    </ContextProvider>
  )
}

export default ReducerAndContext