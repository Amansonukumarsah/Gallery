import { useState } from "react";
import { useGetUserQuery } from '../service/HandleRegusterUserApi';
import { usePostNotifyMutation } from '../service/Notification';

const Search = () => {
    const [user, setUser] = useState(''); // User input state
    // const [notiyUser,setnotifyUser] = useState([]);//for the user notiy
    const [filteredData, setFilteredData] = useState([]); // State for filtered data4
    const [notify] =  usePostNotifyMutation();
    const { data: userDetails, isLoading, isError } = useGetUserQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError || !userDetails) {
        return <div>Error loading data</div>;
    }
    const follow = async(event,username)=>{
        event.preventDefault()
        try {
            const res=await notify({username})
            if(res && res.error.data){
                alert(res.error.data);
            }
            else{
                console.log("ERROR ERROR!!!")
            }
        } catch (error) {
            console.log('Error from catch',error)
        }
        
    }
    // Filter function to update the state based on user input
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setUser(searchValue); 
        const filteredResults = userDetails.filter((user) =>
            user.username.toLowerCase().includes(searchValue)
        );
        setFilteredData(filteredResults); 
    };

    return (
        <>
            <div>
                <form>
                    <label>Search</label>
                    <input
                        name="user"
                        value={user}
                        onChange={handleSearch} // Set the filter function
                    />
                </form>
            </div>
            <div>
                {filteredData.length > 0 ? (
                    <ul>
                        {filteredData.map((user, index) => (
                            <li key={index}>{user.username} 
                            <button onClick={(event)=>follow(event,user.username)} className="bg-success">Follow</button>
                            </li> 
                        ))}
                    </ul>
                ) : (
                    <div>No users found</div>
                )}
            </div>
        </>
    );
};

export default Search;
