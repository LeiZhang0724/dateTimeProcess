# dateTimeProcess
Js function process date or time.  
If you have new requiremnets of function please sent to 376218963@qq.com
# Source code
https://github.com/LeiZhang0724/dateTimeProcess
# Install
    npm i date-time-process-js -save

# How to use
import { function name } from 'date-time-process-js';

# Example
    import {  getDay,  getDateTime 
    } from 'date-time-process-js';

    mounted() {  
      getDay();  
      getDateTime('yyyy-MM-dd')
    }

results: 
5
2020-08-28
# Function List 
    dateFormat = (date, format)

 * @method dateFormat
 * @param {*} date
 * @param {*} format 
 * year: yyyy
 * month: MM
 * date: dd
 * hour hh
 * minite mm
 * second ss
 * @returns the date as the format  
---

    getDateTime = (format='yyyy-MM-dd hh:mm:ss', date = today)

 * @method getDateTime get date time as input format
 * @param format default as yyyy-MM-dd hh:mm:ss
 * @param date default as today, input date format as Date() support format
 * @returns date/ time/ datetime as input format (default format='yyyy-MM-dd hh:mm:ss')
---

    getDay = (date = today)
 
 * @method getDay get day in the week
 * @param date default as today, input date format as Date() support format
 * @returns day
---
    getDayCN = (date = today)
 
 * @method getDayCN get day in the week
 * @param date default as today, input date format as Date() support format
 * @returns day as Chinese
---

    getMonthDate = (setMonth = today.getMonth() + 1, setDate = 1, format='yyyy-MM-dd')
 
 * @method getMonthDate get input month and date, defaut as this month first date, or the month first date
 * @param setMonth default as this month
 * @param setDate default as first date
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns date (default format as yyyy-MM-dd) as set number of the month, default as this month first date, input the month return the month first date
 ---

    getTheDateOfMonth = (setDate = 1, setMonth = today.getMonth() + 1, format='yyyy-MM-dd')
 
 * @method getTheDateOfMonth get input the date of the month, defaut the first date of this month
 * @param setMonth default as this month
 * @param setDate default as first date
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns date as set number date in the month, default as this month first date, input the date number return the number 
 * date in this month, default format as yyyy-MM-dd
 * 0 last date of previous month
 * -1...-num n days before of the month 
 ---

    getLastDateOfMonth = (setMonth =  today.getMonth() + 1, format='yyyy-MM-dd')
 
 * @method getLastDateOfMonth
 * @param setMonth default as this month
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns last date of the month, default as last date of this month
 ---

    getDateNumOfYear = (setDate = today)
 
 * @method getDateNumOfYear get which number of the date in this year, defaut get today number
 * @param setDate default as today
 * @returns number of the date in the year, default the number of today in this year
 ---

    getLastDateNumOfYear = (setDate = today)
 
 * @method getLastDateNumOfYear get last number of the date in this year, defaut get last date of today number
 * @param setDate default as today
 * @returns the last number of the date in the year, default the last number of today in this year
 
 ---

    getWeekNumOfYear = (setDate = today)
 
 * @method getWeekNumOfYear get which number of the week in this year, defaut get this week number
 * @param setDate default as today
 * @returns week number of the year, default the week number of this week in this year
 ---

    getGapOfTime = (startDate,endDate,unit)
 
 * @method getGapOfTime get the gap of two dates
 * @param startDate
 * @param endDate
 * @param unit gap as day, hour, minute, second
 * @returns gap as unit of input dates
 ---

    getNDaysToDate = (count, direction, date = today, format= 'yyyy-MM-dd')
 
 * @method getNDaysToDate get the number of days previous/ follow date to input date
 * @param count number of the days
 * @param direction previous days or follow days
 * @param date start date, default as today
 * @returns date (default format as yyyy-MM-dd) of n days to the input date as diretion, default date is today
---

    getInputWeekList = (input_date = today, format = 'yyyy-MM-dd')
 
 * @method getInputWeekList get date list of input date week , default as this week, start from Monday to Sunday
 * @param input_date default as today
 * @param format default as yyyy-MM-dd
 * @returns date (default format as yyyy-MM-dd) list of the week as input date week (default as today's week)
 * @hints dateList[i] can get i date of this week
--- 

    getNumDateOfMonth = (input_date = today)
 
 * @method getNumDateOfMonth get the number of date in the month
 * @param input_date default as today
 * @returns date (default format as yyyy-MM-dd) list of the month as input date month (default as today's month)
---

    getInputMonthList = (input_date = today, format = 'yyyy-MM-dd')

 * @method getInputMonthList get date list of input date month , default as this month
 * @param input_date default as today
 * @param format default as yyyy-MM-dd
 * @return current_month list, date (default format as yyyy-MM-dd) list of the month as input date month (default as today's month)
 * @hints current_month[i] can get i date of this month

---

    getFirstDayOfSeason = (input_date = today)

 * @method getFirstDayOfSeason get first date of the season 
 * @param input_date default as today
 * @return the first date of the season as format yyyy-MM-dd
 
---
    isInDayTime = (input_time, input_period)

 * @method isInDayTime check two time plus is over 24 hours 
 * @param input_time default format as hh:mm:ss
 * @param input_period default format as hh:mm:ss
 * @return if less than 24 hours return true, if greater than 24 hours return false
 
 ---
	getPreNDaysList = (days)
	
 * @method getPreNDaysList get a list of N days before of today
 * @param rage { number } N days before you want to return 要倒退的天数
 * @return { array } return an array of N days before today