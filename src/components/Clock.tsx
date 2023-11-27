'use client';
import { useState, useEffect } from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import { TimePicker } from 'antd';

const NavbarTimeComponent = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleDateChange = (date:string) => {
      setCurrentDate(date);
    };

    const formatDate = new Date();
    const formattedDate = formatDate.toLocaleString('en-US', {
      timeZone:'America/New_York'
    });

    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); 
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      <div className="flex flex-row">
        <div className='mr-[4px]'><FormattedDate value={currentDate} year='numeric' month='long' day='2-digit'/></div>
        <FormattedTime value={currentTime} hour='numeric' minute='numeric' second='numeric' />
        <time  suppressHydrationWarning />
      </div>
    </>
  );
};

export default NavbarTimeComponent;

//Create a state for the time
//Set get the current time and date and format it
//Create a function to assign the formatted date to the state
//Use a timer to update the time every second
