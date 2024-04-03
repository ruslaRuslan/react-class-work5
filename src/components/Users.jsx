import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {
    // destracche
    axios.get(url)
    // component ne zaman render edir?
        .then(({ data }) => {
            console.log(data);
        })
    return (
        // Fragment -> (adlanir yani bos teq)
        <>



        </>
    )
}

export default Users;