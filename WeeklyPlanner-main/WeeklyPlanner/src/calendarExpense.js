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

function renderDate() {
    var tester = true;
    
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
            for (let j = 0; j < viewDayArr.length; j++) {
                if (i === viewDayArr[j] && viewMonthArr[j] === monthNumber[dt.getMonth()] && viewYearArr[j] === dt.getFullYear()){
                    cells += "<div class='icalendar__today'>" + i + "<br><br>Php " + viewPriceArr[j] +"</div>"; 
                    tester = false;
                }
            }
            if (tester) {
                cells += "<div class='icalendar__today'>" + i + "</div>";
            }

            tester = true;
            
        } else {
            for (let j = 0; j < viewDayArr.length; j++) {
                if (i === viewDayArr[j] && viewMonthArr[j] === monthNumber[dt.getMonth()] && viewYearArr[j] === dt.getFullYear()){
                    cells += "<div>" + i + "<br><br>Php " + viewPriceArr[j] +"</div>"; 
                    tester = false;
                }
            }
            
            if (tester) {
                cells += "<div>" + i + "</div>";
            }

            tester = true;
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

// function getRenderUser(){
//     $(onload).ready(function(){
//         currentUser = sessionStorage.getItem('currentUser');
//         console.log(currentUser);
//     })
// }

function dayRenderLoad(){
    $(onload).ready(function() {
        $.ajax({
            type: "POST",
            url: "expenseDayLoad.php",
            data: {currentUser: currentUser},
            success:function(data) {
                console.log(data);
                viewDay = data;
                $.ajax({
                    type: "POST",
                    url: "expenseMonthLoad.php",
                    data: {currentUser: currentUser},
                    success:function(data) {
                        console.log(data);
                        viewMonth = data;
                        $.ajax({
                            type: "POST",
                            url: "expenseYearLoad.php",
                            data: {currentUser: currentUser},
                            success:function(data) {
                                console.log(data);
                                viewYear = data;
                                $.ajax({
                                    type: "POST",
                                    url: "expensePriceLoad.php",
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
                                            viewPriceArr.push(parseInt(viewPriceArrTemp[cntr]));
                                        }

                                        var tester = true;
    
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
                                                for (let j = 0; j < viewDayArr.length; j++) {
                                                    if (i === viewDayArr[j] && viewMonthArr[j] === monthNumber[dt.getMonth()] && viewYearArr[j] === dt.getFullYear()){
                                                        cells += "<div class='icalendar__today'>" + i + "<br><br>Php " + viewPriceArr[j] +"</div>"; 
                                                        tester = false;
                                                    }
                                                }
                                                if (tester) {
                                                    cells += "<div class='icalendar__today'>" + i + "</div>";
                                                }

                                                tester = true;
                                                
                                            } else {
                                                for (let j = 0; j < viewDayArr.length; j++) {
                                                    if (i === viewDayArr[j] && viewMonthArr[j] === monthNumber[dt.getMonth()] && viewYearArr[j] === dt.getFullYear()){
                                                        cells += "<div>" + i + "<br><br>Php " + viewPriceArr[j] +"</div>"; 
                                                        tester = false;
                                                    }
                                                }
                                                
                                                if (tester) {
                                                    cells += "<div>" + i + "</div>";
                                                }

                                                tester = true;
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

// function monthRenderLoad(){
//     $(onload).ready(function() {
//         $.ajax({
//             type: "POST",
//             url: "expenseMonthLoad.php",
//             data: {currentUser: currentUser},
//             success:function(data) {
//                 console.log(data);
//                 viewMonth = data;
//             }
//         })
//     })
// }

// function yearRenderLoad(){
//     $(onload).ready(function() {
//         $.ajax({
//             type: "POST",
//             url: "expenseYearLoad.php",
//             data: {currentUser: currentUser},
//             success:function(data) {
//                 console.log(data);
//                 viewYear = data;
//             }
//         })
//     })
// }

// function priceRenderLoad(){
//     $(onload).ready(function() {
//         $.ajax({
//             type: "POST",
//             url: "expensePriceLoad.php",
//             data: {currentUser: currentUser},
//             success:function(data) {
//                 console.log(data);
//                 viewPrice = data;
//             }
//         })
//     })
// }

// function preSetArrays() {
//     viewMonthArrTemp = viewMonth.split(',');
//     viewDayArrTemp = viewDay.split(',');
//     viewYearArrTemp = viewYear.split(',');
//     viewPriceArrTemp = viewPrice.split(',');

//     for (var cntr=0; cntr<viewMonthArrTemp.length; cntr++) {
//         viewMonthArr.push(parseInt(viewMonthArrTemp[cntr]));
//         viewDayArr.push(parseInt(viewDayArrTemp[cntr]));
//         viewYearArr.push(parseInt(viewYearArrTemp[cntr]));
//         viewPriceArr.push(parseInt(viewPriceArrTemp[cntr]));
//     }
// }