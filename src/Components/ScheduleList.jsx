import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScheduleList = () => {

    // The endpoints in here will be replaced by the actual endpoints when the api is ready.
    // For the sake of this code, I used a local json server
    // In terminal, inside the project folder, run "npx json-server --watch data/db.json --port 3001 "
    
    const [schedule, setSchedule] = useState(null);
    const getData = () => {
        fetch('http://localhost:3001/Days')
            .then((res) => {
                return res.json();
            }).then((data) => {
                setSchedule(data);
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/Days/${id}`, {
            method: 'DELETE'
        }).then(() => {
            getData();
        })
    }

    console.log(schedule);

    return ( 
        <>
            <div className="display-div">
                <h2 className="display-title">Daily Schedule</h2>
                <div className="display-div-body">
                    <div className="display-div-item">
                        <div>DAY(Mon - Sun)</div>
                        <div>
                            MORNING HOURS
                        </div>
                        <div>
                            EVENING HOURS
                        </div>
                        <div>COMPLETE</div>
                    </div>
                    {schedule && schedule.map((item) => (
                        <div className="display-div-item" key={item.id}>
                            <div>{item.day}</div>
                            <div>{item.morningPeriod.start} - {item.morningPeriod.stop}</div>
                            <div>{item.eveningPeriod.start} - {item.eveningPeriod.stop}</div>
                            <div><button onClick={() => handleDelete(item.id)}>Delete</button></div>
                        </div>
                    ))}
                    <Link to="/">Go Home</Link>
                </div>    
            </div>
        </>
     );
}
 
export default ScheduleList;