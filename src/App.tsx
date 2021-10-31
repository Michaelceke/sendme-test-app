
import './App.css';
import {useState} from "react"
import List from "./components/List"
import {fetchData} from "./tools/api"
import { useQuery } from 'react-query'
//import { idText } from 'typescript';
import TableList from "./components/TableList/TableList"
import Orders from "./components/Orders"



const App=()=>{
  const { isLoading, error, data } = useQuery('repoData', fetchData)
console.log("isLoading",isLoading)
  if(isLoading){
    return <h3>...Page is Loading</h3>
  }

  return (
    <div className="App">
     <h1>People Invited to my party</h1>
     {/* <TableList/> */}
     <Orders/>
    </div>
  );
}

export default App;
