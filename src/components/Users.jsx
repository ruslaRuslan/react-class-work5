import axios from "axios";
import { useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([])
    // destracche
    axios.get(url)
    // component ne zaman render edir?
    // Render -> komponentin kodlarinin yeniden oxunub, UI-ya gorsenmesi. 
    // komponent iki halda render edir!
    // 1. State deyisilende 
    // 2. Props deyisilende
        .then(({ data }) => {
            console.log(data);
        })

    return (
        // Fragment -> (adlanir yani bos teq)
        <>

            {
                [
                    <p>Ali</p>,
                    <p>Ruslan</p>,
                    <p>Sada</p>,
                    <p>Sabina</p>,
                ]
            }

        </>
    )
}

export default Users;