import React from 'react';
import { useGetNotifyQuery } from '../service/Notification';
const Notification = () => {
    const {data:fetchData, isLoading,isError} = useGetNotifyQuery();
    console.log(fetchData);
    return (
        <>
            <div>
                <h1>Aman From India</h1>
                
                {/* {
                    fetchData.map((key,val)=>{
                        <strong>{key}</strong>
                    })
                } */}
            </div>
        </>
    )
}
export default Notification;
