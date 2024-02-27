import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ScheduleForm = ({getData}) => {

    const [options, setOptions] = useState(["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);

    const [day, setDay] = useState();
    const [touchedDay, setTouchedDay] = useState(false);

    const [morningPeriodStart, setMorningPeriodStart] = useState();
    const [morningPeriodStop, setMorningPeriodStop] = useState();
    const [eveningPeriodStart, setEveningPeriodStart] = useState();
    const [eveningPeriodStop, setEveningPeriodStop] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const morningPeriod = {
            start: morningPeriodStart,
            stop: morningPeriodStop
        }
    
        const eveningPeriod = {
            start: eveningPeriodStart,
            stop: eveningPeriodStop
        }

        const dayActvity = {day, morningPeriod , eveningPeriod};

        // A Local JSON Server is used here. When the API is available, the endpoints can be edited

        fetch('http://localhost:3001/Days', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dayActvity)
        });

        // console.log(getData());
        setOptions(options.filter(option => option != day))

        setDay(''); setEveningPeriodStart(''); setEveningPeriodStop(''); setMorningPeriodStart(''); setMorningPeriodStop('');
    }
    
    return ( 
        <div className="display-div">
            <h2 className="display-title">Working Houres</h2>
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
                <form className="display-div-item" onSubmit={handleSubmit}>
                    <div>
                        <select type="text" id="select" required value={day} onChange={(e) => {
                            setDay(e.target.value);
                            setTouchedDay(true);
                        }}> 
                           <option value={options[0]}>{options[0]}</option>
                            <option value={options[1]}>{options[1]}</option>
                        
                            
                        </select>
                    </div>
                    <div>
                        <label htmlFor="start">Start</label>
                        <input type="text" value={morningPeriodStart} onChange={(e) => setMorningPeriodStart(e.target.value)} required/>
                        <label htmlFor="stop">Stop</label>
                        <input type="text" value={morningPeriodStop} onChange={(e) => setMorningPeriodStop(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="start">Start</label>
                        <input type="text" value={eveningPeriodStart} onChange={(e) => setEveningPeriodStart(e.target.value)} required/>
                        <label htmlFor="start">Stop</label>
                        <input type="text" value={eveningPeriodStop} onChange={(e) => setEveningPeriodStop(e.target.value)} required/>
                    </div>
                    <div>{touchedDay ? <button>Submit</button>: <button disabled>Submit</button>} </div>
                </form>
            </div>
            
            {<Link to="schedule">Done</Link>}
        </div>
     );
}
 
export default ScheduleForm;