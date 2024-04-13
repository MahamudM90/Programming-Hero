import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
function App() {
 
 function one(){
  alert('One')
 }

 const two = () => {
  alert('Two')
 }

 const four = (num) => {
  alert(num+5)
 }

  return (
    <>   
      <h3>React core concepts 2</h3>
      <button onClick={one}>1</button>
      <button onClick={two}>2</button>
      <button onClick={()=>{alert('Three')}}>3</button>
      <button onClick={()=>four(5)}>4</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
    </>
    
  )
}

export default App
