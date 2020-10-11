const today = new Date();
/**
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
 */
const dateFormat = (date, format) => {
  const data = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S+": date.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      String(date.getFullYear()).substr(4 - RegExp.$1.length)
    );
  }
  for (const k in data) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ?
        data[k] :
        ("00" + data[k]).substr(String(data[k]).length)
      );
    }
  }
  return format;
}
/**
 * @method getDateTime get date time as input format
 * @param format default as yyyy-MM-dd hh:mm:ss
 * @param date default as today, input date format as Date() support format
 * @returns date/ time/ datetime as input format (default format='yyyy-MM-dd hh:mm:ss')
 */
const getDateTime = (format='yyyy-MM-dd hh:mm:ss', date = today) => {
  // const curDate = new Date();
  var temp = new Date(date)
  let time = dateFormat(temp, format);
  return time
}
/**
 * @method getDay get day in the week
 * @param date default as today, input date format as Date() support format
 * @returns day
 */
const getDay = (date = today) => {
  // var today = new Date();
  var temp = new Date(date);
  var day = temp.getDay();
  return day;
}
/**
 * @method getDayCN get day in the week
 * @param date default as today, input date format as Date() support format
 * @returns day as Chinese
 */
const getDayCN = (date = today) => {
  // var today = new Date();
  var temp = new Date(date);
  var day = "日一二三四五六".charAt(temp.getDay());
  return day;
}
/**
 * @method getMonthDate get input month and date, defaut as this month first date, or the month first date
 * @param setMonth default as this month
 * @param setDate default as first date
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns date (default format as yyyy-MM-dd) as set number of the month, default as this month first date, input the month return the month first date
 */
const getMonthDate = (setMonth = today.getMonth() + 1, setDate = 1, format='yyyy-MM-dd') => {
  var date = new Date();
  var getDate = new Date(date.setMonth(setMonth-1,setDate));
  return dateFormat(getDate, format);
}
/**
 * @method getTheDateOfMonth get input the date of the month, defaut the first date of this month
 * @param setMonth default as this month
 * @param setDate default as first date
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns date as set number date in the month, default as this month first date, input the date number return the number 
 * date in this month, default format as yyyy-MM-dd
 * 0 last date of previous month
 * -1...-num n days before of the month 
 */
const getTheDateOfMonth = (setDate = 1, setMonth = today.getMonth() + 1, format='yyyy-MM-dd') => {
  var date = new Date();
  var getDate = new Date(date.setMonth(setMonth-1,setDate));
  return dateFormat(getDate, format);
}
/**
 * @method getLastDateOfMonth
 * @param setMonth default as this month
 * @param format default as yyyy-MM-dd, input date format as Date() support format
 * @returns last date of the month, default as last date of this month
 */
const getLastDateOfMonth = (setMonth =  today.getMonth() + 1, format='yyyy-MM-dd') => {
  return getMonthDate(setMonth + 1, 0, format);
}
/**
 * @method getDateNumOfYear get which number of the date in this year, defaut get today number
 * @param setDate default as today
 * @returns number of the date in the year, default the number of today in this year
 */
const getDateNumOfYear = (setDate = today) => {
  setDate = dateFormat(new Date(setDate), 'yyyy/MM/dd')
  var num = 
    1 + Math.ceil(( new Date(setDate) - new Date(new Date().getFullYear().toString()))/(24*60*60*1000));
  return num;
}
/**
 * @method getLastDateNumOfYear get last number of the date in this year, defaut get last date of today number
 * @param setDate default as today
 * @returns the last number of the date in the year, default the last number of today in this year
 */
const getLastDateNumOfYear = (setDate = today) => {
  var y = new Date().getFullYear();
  var isLeap = ((0===y%4) && (0!==y%100)) || (0===y%400);
  var days = isLeap ? 366 : 365;
  var num = days - getDateNumOfYear(setDate);
  return num;
}
/**
 * @method getWeekNumOfYear get which number of the week in this year, defaut get this week number
 * @param setDate default as today
 * @returns week number of the year, default the week number of this week in this year
 */
const getWeekNumOfYear = (setDate = today) => {
  setDate = dateFormat(new Date(setDate), 'yyyy/MM/dd')
  var week = 1 + Math.ceil(((new Date(setDate) - new Date(new Date().getFullYear().toString()))/(24*60*60*1000))/7);
  return week;
}
/**
 * @method getGapOfTime get the gap of two dates
 * @param startDate
 * @param endDate
 * @param unit gap as day, hour, minute, second
 * @returns gap as unit of input dates
 */
const getGapOfTime = (startDate,endDate,unit) => {
  //get gap of millisecond
  var diff=Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());
  //count gap of days
  var days=Math.floor(diff/(24*3600*1000));
  //count gap of hours
  var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
  var hours=Math.floor(leave1/(3600*1000));
  //count gap of minites
  var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
  var minutes=Math.floor(leave2/(60*1000));
  //count gap of seconds
  var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
  var seconds=Math.round(leave3/1000);
  var gap = days + "days " + hours + ":" + minutes + ":" + seconds;
  if(unit === "day") {
     return gap = days;
  }else if(unit === "hour") {
     return gap = (hours+days*24);
  }else if(unit === "minute") {
     return gap = (minutes+(hours+days*24)*60);
  }else if(unit === "second") {
     return gap = (seconds+(minutes+(hours+days*24)*60)*60) ;
  }else{
      return gap;
  }
}
/**
 * @method getNDaysToDate get the number of days previous/ follow date to input date
 * @param count number of the days
 * @param direction previous days or follow days
 * @param date start date, default as today
 * @returns date (default format as yyyy-MM-dd) of n days to the input date as diretion, default date is today
 */
const getNDaysToDate = (count, direction, date = today, format= 'yyyy-MM-dd') => {
  date = new Date(date)
  if (direction === 'previous'){
    date.setDate(date.getDate() - count);//get previous number of days 
    return dateFormat(date, format)
  } else if (direction === 'follow'){
    date.setDate(date.getDate() + count);//get follow number of days
    return dateFormat(date, format)
  }
} 
/**
 * @method getInputWeekList get date list of input date week , default as this week, start from Monday to Sunday
 * @param input_date default as today
 * @param format default as yyyy-MM-dd
 * @returns date (default format as yyyy-MM-dd) list of the week as input date week (default as today's week)
 * @hints dateList[i] can get i date of this week
 */
const getInputWeekList = (input_date = today, format = 'yyyy-MM-dd') => {
  let oneDayTime = 1000 * 60 * 60 * 24 
  let theDate = new Date(input_date)
  let theDay = theDate.getDay() || 7 
  let startDate = new Date(
    theDate.getTime() - oneDayTime * (theDay - 1)
  )
  let dateList = new Array()
  for(let i = 0; i < 7; i++){
      let temp = new Date(startDate.getTime() + i * oneDayTime)
      dateList[i] = dateFormat(temp, format)
  }
  return dateList
}
/**
 * @method getNumDateOfMonth get the number of date in the month
 * @param input_date default as today
 * @returns date (default format as yyyy-MM-dd) list of the month as input date month (default as today's month)
*/
const getNumDateOfMonth = (input_date = today) => {
  var theDate = new Date(input_date);
  var year = theDate.getFullYear();
  var month = theDate.getMonth() + 1;
  var d = new Date(year, month, 0);
  return d.getDate();
}
/**
 * @method getInputMonthList get date list of input date month , default as this month
 * @param input_date default as today
 * @param format default as yyyy-MM-dd
 * @return current_month list, date (default format as yyyy-MM-dd) list of the month as input date month (default as today's month)
 * @hints current_month[i] can get i date of this month
*/
const getInputMonthList = (input_date = today, format = 'yyyy-MM-dd') => {
  let theDate = new Date(input_date);
  let current_month_num = getNumDateOfMonth(input_date);
  let current_month = [];
  for (let i = 1; i <= current_month_num; i++) {
    current_month.push(dateFormat(new Date(theDate.setDate(i)), format));
  }
  return current_month;
}
/**
 * @method getFirstDayOfSeason get first date of the season 
 * @param input_date default as today
 * @return the first date of the season as format yyyy-MM-dd
 */
const getFirstDayOfSeason = (input_date = today) => {
  var date = new Date(input_date);
  var month = date.getMonth();
  if(month <3 ){
      date.setMonth(0);
  }else if(2 < month && month < 6){
      date.setMonth(3);
  }else if(5 < month && month < 9){
      date.setMonth(6);
  }else if(8 < month && month < 11){
      date.setMonth(9);
  }
  date.setDate(1);
  return dateFormat(date, 'yyyy-MM-dd');
}
/**
 * @method isInDayTime check two time plus is over 24 hours,  
 * @param input_time default format as hh:mm:ss
 * @param input_period default format as hh:mm:ss
 * @return if less than 24 hours return true, if greater than 24 hours return false
 */

const isInDayTime = (input_time, input_period) => {
  let time1 = input_time.split(':')
  let time2 = input_period.split(':')
  let s= Number(time1[2]) + Number(time2[2])
  let m = Number(time1[1]) + Number(time2[1])
  let h = Number(time1[0]) + Number(time2[0])
  if (s >= 60) m = m + 1;
  if (m >= 60) h = h + 1;
  if (h >= 24) {
    return false
  } else {
    return true
  }
}

export {
  dateFormat,
  getDateTime,
  getDay,
  getDayCN,
  getMonthDate,
  getTheDateOfMonth,
  getLastDateOfMonth,
  getDateNumOfYear,
  getLastDateNumOfYear,
  getWeekNumOfYear,
  getGapOfTime,
  getNDaysToDate,
  getInputWeekList,
  getNumDateOfMonth,
  getInputMonthList,
  getFirstDayOfSeason,
  isInDayTime
}
