import { api } from './api/api'
import s from './App.module.css'
import { useEffect, useState } from 'react'
import logo from '/logo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [searchpage, setsearchPage] = useState(1)
  const [searchname, setsearchName] = useState("")
  const [erro, setErro] = useState(false)

  useEffect(() => {
    setErro(false)
    api.get(`/character/?page=${searchpage}&name=${searchname}`).then((res) => {
      setData(res.data.results)
    }).catch((err) => {
      setErro(true)
      console.error(err)
    })
  }, [searchpage, searchname])

  return (
    <>
    <main>
      <img className={s.logo} src={logo} alt="Logo RM" />
      <div className={s.inputs}>
        <input type="number" value={searchpage} onChange={(e) => setsearchPage(e.target.value)} placeholder="1/42" />
        <input type="text" value={searchname} onChange={(e) => setsearchName(e.target.value)} placeholder="Digite um nome" />
      </div>
      { erro
      ?
       <h3 style={{color : "red", backgroundColor: "lightpink" }}>Não foi possível encontrar os personagens</h3> 
      :
      <div className={s.wrapCards}>
        {data.map((item, index) => {
          return(
            <div key={index}>
            <Card image={item.image} name={item.name} status={item.status} species={item.species} gender={item.gender} />
            </div>
          )
        })}
      </div>}
    </main>
    </>
  )
}

export default App
