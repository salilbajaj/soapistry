import React, {useState, useEffect} from 'react'

const useFetch = (url,params=null,type=null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        if(!type || type === 'GET'){
            fetch(`${url}/${params?params:''}`)
            .then(res=>{
                if (!res.ok) { 
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json()
            })
            .then(resData=>{
                setData(resData);
                setLoading(false);
                setError(null);
            })
            .catch(err=>{
                setData(null)
                setError(err);
                setLoading(false);
            })
        }
    },[url])
    
    return {data,loading,error};
}

export default useFetch;
