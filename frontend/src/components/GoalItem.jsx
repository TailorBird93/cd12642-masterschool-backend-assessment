import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
<<<<<<< HEAD
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
=======
      <div>{new Date(goal.createdAt).toLocaleString('en-UK')}</div>
>>>>>>> main
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

<<<<<<< HEAD
export default GoalItem
=======
export default GoalItem
>>>>>>> main
