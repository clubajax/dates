# dates
A small utility library for managing date objects. Good alternative to Moment and its larger footprint.

The primary use of this library is to support [ClubAJAX Date Picker](https://github.com/clubajax/date-picker), so functionality may be limited.

## Getting Started

To install:

    yarn add @clubajax/dates

You may also use `bower` or `npm` if you prefer. Or, you can clone the repository with your generic clone commands as a standalone 
repository or submodule.

	git clone git://github.com/clubajax/dates.git

`dates` has no dependencies.

## Support

`dates` supports all modern browsers, and is tested on IE11 and up. 

## Docs

 - `format(date, delimiterOrPattern)` - Formats a date string from a date object, based on the pattern of the third object. If `delimiterOrPattern` is:
    - One character, it is assumed to be a _delimiter_, and used to separate the numbers of a default date string _(mm/dd/yyyy)_
    - Otherwise, the format of the date string is constructed based on some of the common standard patterns, such as what is used in [Java Simple Date Format](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html). Examples:
    ```    
        date based examples:
        'M d, yyyy' => 1 5, 2015
        'MM dd yy' => 01 05 15
        'M-d-yy' => 1-1-15
        'MM-dd-yyyy' => 01-01-2015
        'MM/d/yy' => 12/25/15
        
        day based examples:
        'yyyy/MM/dd, E' => 2016/01/26, Tuesday
        'yyyy/MM/dd, e' => 2016/01/26, Tue
        
        time based examples:
        'yyyy/MM/dd h:m A' => 2016/01/26 04:23 AM
        'h:m:s a' => 04:23:32 pm
        'H:m' => 16:23
        
   ```
    		
 - `toDate(str)` - Returns a date object based on the date string.
 - `getNaturalDay(date, compareDate, noDaysOfWeek)` - Returns simple natural dates (Yesterday, Today, Tommorrow) or the date. Will add Mon, Tues, etc, unless `noDaysOfWeek` is true. `compareDate` is usually the current date.
 - `toTimestamp(date)` - Returns a timestamp based on the date object.
 - `fromTimestamp(string)` - Returns a date based on the timestamp - although this is used under the hood, prefer use: `toDate`
 - `isTimestamp(string)` - Returns a boolean on whether the argument is a timestamp.
 - `subtract(date, amount, dateType)` - Subtracts N "something" (day, week, month, year) from a date object.
 - `add(date, amount, dateType)` - Adds N "something" (day, week, month, year) from a date object.
 - `subtractDate(date1, date2, datepart)` - Subtracts date1 from date2 and returns the difference based on the increment of the third parameter (in days, weeks, etc).
 - `copy(date)` - Returns a copy of a date object.
 - `isLess(date1, date2)` - Returns if first date is less than second date.
 - `isGreater(date1, date2)` - Returns if first date is greater than second date.
 - `diff(date1, date2)` - The difference, in days, between two date objects. Always a positive value.
 - `isValid(date)` - Determines if the date object or date string is a valid date.
 - `isValidObject(value)` - Determines if the value is a valid date object.
 - `isLeapYear(dateOrYear)` - Determines if the date or year is a leap year.
 - `getMonthIndex(name)` - Returns the zero-based index, given a month name, which can be a full name or abbreviation (January or Jan).
 - `getFirstSunday(date)` - For use in building calendars.
 - `getDaysInMonth(date)` - For use in building calendars.
 - `getDaysInPrevMonth(date)` - For use in building calendars.
 - `getMonthName(date)` - Returns the month name of a date.
 
 
## License

This uses the [MIT license](./LICENSE). Feel free to use, and redistribute at will.
