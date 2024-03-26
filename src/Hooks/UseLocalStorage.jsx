import { useEffect, useState } from "react";
import { getFromLOcalStorage } from "../utils/localStorage";

const UseLocalStorage = () => {
    const [LocalData, setLocalData] = useState([]);
    console.log(LocalData);
    useEffect(()=>{
        setLocalData(getFromLOcalStorage())
    }, [])
    return {LocalData};
};

export default UseLocalStorage;