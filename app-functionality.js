// Adding The Call Button Functionality

document.getElementById('national-em-call')
    .addEventListener('click', function(){
        const getCoinText = parseInt(document.getElementById('coin-life').innerText);

        // Adding The Life Remaining Check and Call Functionality
        const getServiceTitle = document.getElementById('national-em-call-title').innerText;

        const getCallNo = document.getElementById('national-em-number').innerText;


        if(getCoinText === 0 && getCoinText < 20){
            alert('You Have Insufficient Coin')
            return;
        }

        alert(getServiceTitle + "\nCalling to" + " " + getCallNo);
        const cutCoin = getCoinText - 20;
        document.getElementById('coin-life').innerText = cutCoin;

        /*---------------------------------------
         Call History Design Concept
         Fist We Create a Div as a container or history Cards
         Then we create two div (one for card title and another for date and time)
         then we create h3 and p append them to the div1
         then defines h3 and p main text (means title and emergency number)
         then getClick time (Real Time) append to the div2

         then div container flex and add some css to the div and its content

         Thats it
        -----------------------------------------*/


        // Getting the Call history
        const getCallHistory = document.getElementById('call-history-body')

        // Get Click Time
        const getClickTime = new Date().toLocaleTimeString();

        // Create Call History Block
        const addDiv = document.createElement('div');
        const addColumn1Div = document.createElement('div');
        const addColumn2Div = document.createElement('div');

        // History Card Column 01 Skeleton
        addDiv.appendChild(addColumn1Div);
        addDiv.appendChild(addColumn2Div);

        const addH3 = document.createElement('h3');
        addColumn1Div.appendChild(addH3);

        // Create a p tag
        const addP = document.createElement('p');

        addColumn1Div.appendChild(addP);

        // Create a another p for div 2
        const addPDiv2 = document.createElement('p');

        // Append it to the div 2
        addColumn2Div.appendChild(addPDiv2);

        // Lets Convert the Date and Time to String
        const getClickTimeToString = String(getClickTime);
        addPDiv2.innerText = getClickTimeToString;

        // Adding Styles to the History Cards Div
        addDiv.style.display = 'flex';
        addDiv.style.justifyContent = 'space-between';
        addDiv.style.alignItems = 'center';
        addDiv.classList.add('call-blocks');

        addP.classList.add('call-blocks-call-number');
        addH3.classList.add('call-blocks-call-title');

        addPDiv2.classList.add('call-blocks-date');

        

        // console.log(addDiv)

        // Define the Internal Content
        addH3.innerText = getServiceTitle;
        addP.innerText = getCallNo;
        
        // Push it to the history body
        getCallHistory.appendChild(addDiv);

})