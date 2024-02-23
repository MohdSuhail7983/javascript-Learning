// monday - 7am
//tue - thur - 4am
// friday - 9am
//sat - sun - 8am

let day = "yesterday"

switch(day){
    case  "monday":
        console.log("7am");
        break;
    // case "tuesday":
    //     console.log("4am");
    //     break;
    // case "Wednesday":
    //     console.log("4am");
    //     break;
    // case "Thursday":
    //     console.log("4am");
    //     break;

            // OR

        case "tuesday":
        case "wednesday":
        case "Thursday":    
        console.log("4am");
        break;

    case "Friday":
        console.log("9am");
        break;
    case "saturday":
        console.log("8am");
        break;
    case "sunday":
        console.log("8am");
        break;
    default :
    console.log("Enter the correct day name");
}
console.log("Wake up Suhail");
