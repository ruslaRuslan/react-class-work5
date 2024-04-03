import axios from "axios";
import { useEffect, useState } from 'react'
const url = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([]) //komponent yarananda render etsin!

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => { // destracche
                setUsers(data);
            })
    }, []) // bos list -> komponent yarananda bu isi gorecek

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        // Fragment -> (adlanir yani bos teq)
        <>

            {
                users.map(({id, name}) => {
                  return  <p key={id}>{name}</p>
                })
            }

        </>
    )
}

// component ne zaman render edir?
// Render -> komponentin kodlarinin yeniden oxunub, UI-ya gorsenmesi. 
// komponent iki halda render edir!
// 1. State deyisilende 
// 2. Props deyisilende
export default Users;