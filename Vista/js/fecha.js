var dateControl = document.querySelector('input[type="date"]');

    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    /*year=2020
    month=2
    day=3*/
    if(month<10){
        auxMonth='0'+month;
    }
    if(day<10){
        day='0'+day;
    }
    let man=`${year}-${auxMonth}-${day}`;
    dateControl.value = man;
    //fecha minima
    dateControl.min=man;
    //fecha maxima
    if(month<=7){
        if(month%2 != 0 ){
            dateControl.max=diasHabiles(26,31);
        }
        else{
            if(month==2){
                if(((year%4 == 0 && year%100 != 0) || year%400 == 0)){
                    dateControl.max=diasHabiles(24,29);
                }
                else{
                    dateControl.max=diasHabiles(23,28);
                }
            }
            else{
                dateControl.max=diasHabiles(25,30);
            }
        }
    }
    else{
        if(month%2 != 0 ){
            dateControl.max=diasHabiles(25,30);
        }
        else{
            dateControl.max=diasHabiles(26,31);
        }
    }

function diasHabiles(dias,ultimo_dia_mes){
    console.log(day)
    console.log(dias)
    if(day<dias){
        as=`${year}-${auxMonth}-${day+6}`;
    }
    else{
        auxDay=6-(ultimo_dia_mes-day);
        auxDay='0'+auxDay;
        month=month+1;
        auxMonth='0'+month;
        as=`${year}-${auxMonth}-${auxDay}`;
    }
    console.log(as)
        return as
}

    //dateControl.max=`${year}-${month}-${day+4}`;