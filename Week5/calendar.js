var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){

        var d = new Date();
        var mth = d.getMonth()+1;
        var yr = d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */

    
    var str = "<table id='myTable'>";
    var dateNumber = 1;
    
    while(dateNumber <= numberOfDaysInMonth){
        str += "<tr class = 'weekHeader'>"
            for(var dow = 0; dow < 7;dow++){
                if(dow == firstDayOfWeek && dateNumber <= numberOfDaysInMonth){
                    str += "<td class='dayHeader'>" + dateNumber + "</td>";
                    dateNumber++;
                    firstDayOfWeek++;
                
                    
                }else{
                    str += "<td class ='Grey dayHeader'></td>"
                }
            }
            firstDayOfWeek = 0;
        str += "<tr>";
    }
    
    str += "</table>";
    str += "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>"; 
    
    $("#results").html(str);
     
    $('#myTable td').on("click",function(){
        var cell = $(this); 
        if(cell.hasClass('Green')){
            cell.removeClass('Green');
            cell.addClass('Red');
        }
        else if(cell.hasClass('Red')){
          cell.removeClass('Red');  
        }
        else{
            cell.addClass('Green');
        }
       
        
    });

    
}

$('#yes').click(function(){
    
    $('#myTable td').addClass('Green');
    $('#myTable td').removeClass('Red');
    });
    
    $('#no').click(function(){
        $('#myTable td').addClass('Red');
        $('#myTable td').removeClass('Green');
    });



    
    