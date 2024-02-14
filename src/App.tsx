import { useState } from "react"
import s from './App.module.css'
import { rand_nums } from "./rand_nums"

export function App() {
  const [pos, setPos] = useState([0,0])
  const [yes, setYes] = useState(false)
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  
  const enterHandler = () => {
    setCount(count+1)
    const modx = Math.floor(Math.random() * (4)) + 1
    const mody = Math.floor(Math.random() * (4)) + 1
    const x = Math.floor(Math.random() * (700 - 50 + 1)) + 50
    const y = Math.floor(Math.random() * (250 + 50 + 1)) + 50
    setPos([modx === 1 ? -x : x, mody === 1 ? -y : y])
  }

  const hs = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  // const hs = [1]
  const vs = ['src/assets/valentinki/1.png','src/assets/valentinki/2.png','src/assets/valentinki/3.png','src/assets/valentinki/4.png',
  'src/assets/valentinki/5.png','src/assets/valentinki/6.png','src/assets/valentinki/7.png','src/assets/valentinki/8.png',
  'src/assets/valentinki/9.png','src/assets/valentinki/10.png','src/assets/valentinki/11.png','src/assets/valentinki/12.png',
  'src/assets/valentinki/13.png','src/assets/valentinki/14.png','src/assets/valentinki/15.png','src/assets/valentinki/16.png',
  'src/assets/valentinki/17.png','src/assets/valentinki/18.png','src/assets/valentinki/19.png','src/assets/valentinki/20.png',
  'src/assets/valentinki/21.png','src/assets/valentinki/22.png','src/assets/valentinki/23.png','src/assets/valentinki/24.png',
  'src/assets/valentinki/25.png','src/assets/valentinki/26.png','src/assets/valentinki/27.png','src/assets/valentinki/28.png',
  'src/assets/valentinki/29.png','src/assets/valentinki/30.png']

  if (yes) {
    setTimeout(()=>setIndex(index+1), 100)
   
    return <>
      {/* <div className={s.vals}> */}
        {vs.map((v, i) => {

          return <div className={s.val} style={{backgroundImage: `url(${v})`, left: rand_nums[i], top: rand_nums[rand_nums.length - i]}} ></div>
        })}
      {/* </div> */}
      {hs.map(v => {
        console.log(v);
        
        const x = Math.floor(Math.random() * (1800 + 1))
        const y = Math.floor(Math.random() * (700 + 1))
        return <div className={s.heart} style={{left: x, top: y}} ></div>
      })}
    </>
  }

  return (
    <div className={s.container}>
      <p>Янни (Кави), ты принимаешь валентинку от меня (Рома (Романя (Ромашка)))???😘😏❤️😭🤨</p>
      <div className={s.buttons}>
        {count >= 2 && <a onClick={()=>setYes(true)} className={s.da + ' ' + s.button}>Да!</a>}
        <a onClick={()=>alert("ээ так не договаривались!! переигрывай")} className={s.button + ' ' + s.no} style={{left: pos[0], top: pos[1]}} onMouseEnter={enterHandler}>Неа)</a>
      </div>
    </div>
  )
}