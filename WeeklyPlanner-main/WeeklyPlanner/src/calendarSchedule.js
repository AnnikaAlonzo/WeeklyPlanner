'use strict';
let dt = new Date();

var currentUser;
var viewDay;
var viewMonth;
var viewYear;
var viewPrice;
var viewDayArr = [];
var viewMonthArr = [];
var viewYearArr = [];
var viewPriceArr = [];
var viewDayArrTemp = [];
var viewMonthArrTemp = [];
var viewYearArrTemp = [];
var viewPriceArrTemp = [];
var taskCounter=0;

function renderDate() {
    let dateString = new Date();

    dt.setDate(1);
    let day = dt.getDay();

    let endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    let prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();

    let today = new Date();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let monthNumber = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
    ];

    document.getElementById("icalendarMonth").innerHTML = months[dt.getMonth()] + " " + dt.getFullYear();
    document.getElementById("icalendarDateStr").innerHTML = dateString.toDateString();

    let cells = "";
    let countDate = 0;
    
    for (let x = day; x > 0; x--) {
        cells += "<div class='icalendar__prev-date'>" + (prevDate - x + 1) + "</div>";
    }

    for (let i = 1; i <= endDate; i++) {
        if (i === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear()) {
            for (let cntr=0; cntr < viewDayArr.length; cntr++) {
                if (i === viewDayArr[cntr] && viewMonthArr[cntr] === monthNumber[dt.getMonth()] && viewYearArr[cntr] === dt.getFullYear()){
                    taskCounter++;
                }
            }

            if(taskCounter > 0) {
                cells += "<div class='icalendar__today'>" + i + "<br><br>" + taskCounter + " Task/s" +"</div>"; 
                taskCounter = 0;
            } else {
                cells += "<div class='icalendar__today'>" + i + "</div>";
            }
        
        } else {
            for (let cntr=0; cntr < viewDayArr.length; cntr++) {
                if (i === viewDayArr[cntr] && viewMonthArr[cntr] === monthNumber[dt.getMonth()] && viewYearArr[cntr] === dt.getFullYear()){
                    taskCounter++;
                }
            }

            if(taskCounter > 0) {
                cells += "<div>" + i + "<br><br>" + taskCounter + " Task/s" +"</div>";  
                taskCounter = 0;
            } else {
                cells += "<div>" + i + "</div>";
            }
        
        }

        countDate = i;
    }

    let reservedDateCells = countDate + day + 1;
    for (let j1 = reservedDateCells, j2 = 1; j1 <= 42; j1++, j2++) {
        cells += "<div class='icalendar__next-date'>" + j2 + "</div>";
    }

    document.getElementsByClassName("icalendar__days")[0].innerHTML = cells;
}

function moveDate(param) {
    if (param === 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (param === 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }

    renderDate();
}

function dayRender2Load(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "taskDayLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                viewDay = data;
                $.ajax({
                    type: "POST",
                    url: "taskMonthLoad.php",
                    data: {currentUser: currentUser},
                    success:function(data) {
                        console.log(data);
                        viewMonth = data;
                        $.ajax({
                            type: "POST",
                            url: "taskYearLoad.php",
                            data: {currentUser: currentUser},
                            success:function(data) {
                                console.log(data);
                                viewYear = data;
                                $.ajax({
                                    type: "POST",
                                    url: "taskNameLoad.php",
                                    data: {currentUser: currentUser},
                                    success:function(data) {
                                        console.log(data);
                                        viewPrice = data;

                                        viewMonthArrTemp = viewMonth.split(',');
                                        viewDayArrTemp = viewDay.split(',');
                                        viewYearArrTemp = viewYear.split(',');
                                        viewPriceArrTemp = viewPrice.split(',');

                                        for (var cntr=0; cntr<viewMonthArrTemp.length; cntr++) {
                                            viewMonthArr.push(parseInt(viewMonthArrTemp[cntr]));
                                            viewDayArr.push(parseInt(viewDayArrTemp[cntr]));
                                            viewYearArr.push(parseInt(viewYearArrTemp[cntr]));
                                        }

                                        viewPriceArr = viewPriceArrTemp; //actual title of task
    
                                        let dateString = new Date();

                                        dt.setDate(1);
                                        let day = dt.getDay();

                                        let endDate = new Date(
                                            dt.getFullYear(),
                                            dt.getMonth() + 1,
                                            0
                                        ).getDate();

                                        let prevDate = new Date(
                                            dt.getFullYear(),
                                            dt.getMonth(),
                                            0
                                        ).getDate();

                                        let today = new Date();

                                        let months = [
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "August",
                                            "September",
                                            "October",
                                            "November",
                                            "December"
                                        ];

                                        let monthNumber = [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9,
                                            10,
                                            11,
                                            12
                                        ];

                                        document.getElementById("icalendarMonth").innerHTML = months[dt.getMonth()] + " " + dt.getFullYear();
                                        document.getElementById("icalendarDateStr").innerHTML = dateString.toDateString();

                                        let cells = "";
                                        let countDate = 0;
                                        
                                        for (let x = day; x > 0; x--) {
                                            cells += "<div class='icalendar__prev-date'>" + (prevDate - x + 1) + "</div>";
                                        }

                                        for (let i = 1; i <= endDate; i++) {
                                            if (i === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear()) {
                                                for (let cntr=0; cntr < viewDayArr.length; cntr++) {
                                                    if (i === viewDayArr[cntr] && viewMonthArr[cntr] === monthNumber[dt.getMonth()] && viewYearArr[cntr] === dt.getFullYear()){
                                                        taskCounter++;
                                                    }
                                                }

                                                if(taskCounter > 0) {
                                                    cells += "<div class='icalendar__today'>" + i + "<br><br>" + taskCounter + " Task/s" +"</div>"; 
                                                    taskCounter = 0;
                                                } else {
                                                    cells += "<div class='icalendar__today'>" + i + "</div>";
                                                }
                                            
                                            } else {
                                                for (let cntr=0; cntr < viewDayArr.length; cntr++) {
                                                    if (i === viewDayArr[cntr] && viewMonthArr[cntr] === monthNumber[dt.getMonth()] && viewYearArr[cntr] === dt.getFullYear()){
                                                        taskCounter++;
                                                    }
                                                }

                                                if(taskCounter > 0) {
                                                    cells += "<div>" + i + "<br><br>" + taskCounter + " Task/s" +"</div>";  
                                                    taskCounter = 0;
                                                } else {
                                                    cells += "<div>" + i + "</div>";
                                                }
                                            
                                            }

                                            countDate = i;
                                        }

                                        let reservedDateCells = countDate + day + 1;
                                        for (let j1 = reservedDateCells, j2 = 1; j1 <= 42; j1++, j2++) {
                                            cells += "<div class='icalendar__next-date'>" + j2 + "</div>";
                                        }

                                        document.getElementsByClassName("icalendar__days")[0].innerHTML = cells;
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    })
}