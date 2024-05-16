import { useEffect, useState } from "react";
import './App.css';
import LineChart from "./components/LineChart.jsx";

function App() {
    const [data, setUserData] = useState("");
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("http://localhost:8080/data?from=2023-09-09&to=2023-10-10", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const response = await res.json();
            setUserData(response);
        }
        fetchData(); // Call fetchData here

    }, []);

    async function fetchData1() {
        let res = await fetch(`http://localhost:8080/data?from=${date1}&to=${date2}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        setUserData(response);
        return response;
    }

    return (
        <>
            {data && <LineChart data={data}/>}
            <div>From:
                <input className='date1' onChange={(e) => setDate1(e.target.value)} type='date'/>
            </div>
            <div>To:
                <input className='date2' onChange={(e) => setDate2(e.target.value)} type='date'/>
            </div>
            <button onClick={fetchData1}>Reload</button>
        </>
    );
}

export default App;
