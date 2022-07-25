import { useCountdown } from "./useCountDown";
const CountDownClock = ({ targetDate }) => {
    
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  }
  export default CountDownClock;
  
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
      return (
        <div className="show-counter">
          {/* <a
            href="https://tapasadhikary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="countdown-link"
          > */}
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          {/* </a> */}
        </div>
      );
    };
  
  //   import React from 'react';
  
  const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p>{value}</p>
      </div>
    );
  };
  
  const ExpiredNotice = () => {
      return (
        <div className="expired-notice">
          <span>Expired!!!</span>
          <p>Please select a future date and time.</p>
        </div>
      );
    };
  