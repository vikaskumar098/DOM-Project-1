var arr = [
    {
        team : "RCB",
        captain : "Virat Kohli",
        origin : "Bangalore",
        primary : "RCB.png",
        secondry : "Black",
        wins : 2
    },

    {
        team : "MI",
        captain : "Rohit Sharma",
        origin : "Mumbai",
        primary : "MI.jpg",
        secondry : "Silver",
        wins : 5
    },

    {
        team : "KKR",
        captain : "Dinesh Karthik",
        origin : "Kolkata",
        primary : "KKR.jpg",
        secondry : "Gold",
        wins : 2
    },
    
    {
        team : "SRH",
        captain : "Kane Williamson",
        origin : "Hyderabad",
        primary : "SRH.jpg",
        secondry : "Black",
        wins : 1
    },

    {
        team : "CSK",
        captain : "MS Dhoni",
        origin : "Chennai",
        primary : "CSK.png",
        secondry : "Blue",
        wins : 4
    },

    {
        team : "DC",
        captain : "Rishabh Pant",
        origin : "Delhi",   
        primary : "DC.jpg",
        secondry : "Red",
        wins : 0
    },

    {
        team : "PBKS",
        captain : "Mayank Agarwal",
        origin : "Punjab",  
        primary : "PBKS.png",
        secondry : "Red",
        wins : 0    
    }


]

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");  
let main = document.querySelector("main");
let video = document.querySelector("video");  

btn.addEventListener("click", function(){
    btn.style.color = "rgb(17, 9, 9)";
    btn.style.boxShadow = "0 0 10px rgba(17, 16, 16, 0.2)";
    let winner = arr[Math.floor(Math.random() * arr.length)];
    h1.innerHTML = winner.team + " has won " + winner.wins + " times in IPL!" + winner.captain + " is the captain of this team from " + winner.origin + ".";
    // main.style.backgroundColor = winner.primary;
    main.style.backgroundImage = `url(${winner.primary})`;
    main.style.color = winner.secondry;
    video.style.display = "none";

})

