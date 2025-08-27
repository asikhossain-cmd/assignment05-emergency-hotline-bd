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

        
        // Getting the Call history
        const getCallHistory = document.getElementById('call-history-body')

        // Get Click Time
        const getClickTime = new Date();

        // Create Call History Block
        const addElement = document.createElement('p');
        addElement.innerText = 'Asik';

        getCallHistory.appendChild(addElement);



        // Adding it to the Call History Section   

})