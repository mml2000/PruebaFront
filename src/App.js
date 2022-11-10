import React, {useState} from 'react'
import Posteos from "./componets/Posteos"
import Estatus from "./componets/Estatus"
import "./index.css"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const [cantidadLikes, setCantLikes] = useState(0)

const aumentarUnLike = () => {
  setCantLikes(prev => prev +1);
}


function App() {

  return (
      <body>
      <nav>
        <Estatus cantidadLikes={cantidadLikes}/>
      </nav>
        <Posteos aumentarUnLike={aumentarUnLike}/>
      </body>
  )
} 

export default App;
