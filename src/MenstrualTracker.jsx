import { useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import "./MenstrualTracker.css";

export default function MenstrualTracker() {
  const [lastPeriod, setLastPeriod] = useState(null);
  const cycleLength = 28;

  const handleDateSelect = (event) => {
    setLastPeriod(new Date(event.target.value));
  };

  const nextPeriod = lastPeriod ? addDays(lastPeriod, cycleLength) : null;
  const daysRemaining = lastPeriod ? differenceInDays(nextPeriod, new Date()) : null;
  const progress = daysRemaining !== null ? ((cycleLength - daysRemaining) / cycleLength) * 100 : 0;

return (
    <div className="tracker-container" style={{ backgroundColor: "#ffe6f2", color: "#ff66b2", textAlign: "center" }}>
        <h2 className="tracker-title">Menstrual Health Tracker!!</h2>
        <p className="tracker-subtext">Select the start date of your last period:</p>
        <input type="date" onChange={handleDateSelect} className="tracker-input" style={{ borderColor: "#ff66b2" }} />
        
        {lastPeriod && (
            <div className="tracker-info">
                <p>Last period: {format(lastPeriod, "PPP")}</p>
                <p>Next estimated period: {format(nextPeriod, "PPP")}</p>
                <div className="tracker-progress-container">
                    <progress value={progress} max="100" className="tracker-progress" style={{ color: "#ff66b2" }}></progress>
                </div>
                <p className="tracker-days-remaining">{daysRemaining} days until your next period</p>
            </div>
        )}
        <button className="tracker-button" onClick={() => setLastPeriod(null)} style={{ backgroundColor: "#ff66b2", color: "#fff" }}>Reset</button>
    </div>
);
}
