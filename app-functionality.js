// Adding The Call Button Functionality
if(window.innerWidth >= 640) {
document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('call-btn')) {

            // Get The Call
            const getCallButton = event.target;

            const getCoinText = parseInt(document.getElementById('coin-life').innerText);

            // Adding The Life Remaining Check and Call Functionality
            const getServiceTitle = getCallButton.parentNode.parentNode.children[0].innerText;

            const getCallNo = getCallButton.parentNode.parentNode.children[2].innerText;

            if(getCoinText === 0 && getCoinText < 20){
                alert('❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে 20 টা কয়েন লাগবে')
                return;
            }

            alert("📞 Calling" + " " + getServiceTitle  + " " + getCallNo + '...');
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


            // Get the Call history Section
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
        }
        

})


//  Adding Call History Clear Functionality

document.getElementById('call-history-clear-btn')
    .addEventListener('click', function(){
        // Get The History Body
        const getHistoryBody = document.getElementById('call-history-body');
        
        getHistoryBody.innerHTML = '';
    })


// Copy Button Make Functional
let getCopyCount = parseInt(document.getElementById('header-copy-count').innerText);
document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('copy-btn')) {
            const getButton = event.target;

            // getButton.innerText = 'Copied'
            // Get the card call number
            const getCallNo = getButton.parentNode.parentNode.children[2].innerText;
            alert('নম্বর কপি হয়েছে' + ': ' + getCallNo)
            navigator.clipboard.writeText(getCallNo);

            // Make to increase copy number if user click on the copy button
            // Get the header copy count
            getCopyCount += 1
            
            // Assign it to the header copy
            document.getElementById('header-copy-count').innerText = getCopyCount;
            
        }
    })

// Make Favorite Button Functional
// // Get the header favourite count
let getFavouriteCount = parseInt(document.getElementById('header-favourite-count').innerText);
document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('favorite-btn')) {

            // Lets Increase The Favourite Count
            getFavouriteCount += 1;

            // Lets set it to the header favourite count
            document.getElementById('header-favourite-count').innerText = getFavouriteCount;
        }
    })

}













// For Mobile

if(window.innerWidth < 640) {
// Adding The Call Button Functionality

document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('call-btn')) {

            // Get The Call
            const getCallButton = event.target;

            const getCoinText = parseInt(document.getElementById('coin-life-mobile').innerText);

            // Adding The Life Remaining Check and Call Functionality
            const getServiceTitle = getCallButton.parentNode.parentNode.children[0].innerText;

            const getCallNo = getCallButton.parentNode.parentNode.children[2].innerText;

            if(getCoinText === 0 && getCoinText < 20){
                alert('❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে 20 টা কয়েন লাগবে')
                return;
            }

            alert("📞 Calling" + " " + getServiceTitle  + " " + getCallNo + '...');
            const cutCoin = getCoinText - 20;
            document.getElementById('coin-life-mobile').innerText = cutCoin;

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


            // Get the Call history Section
            const getCallHistoryMobile = document.getElementById('call-history-body-mobile')

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
            getCallHistoryMobile.appendChild(addDiv);
        }
        

})


//  Adding Call History Clear Functionality

document.getElementById('call-history-clear-btn-mobile')
    .addEventListener('click', function(){
        // Get The History Body
        const getHistoryBody = document.getElementById('call-history-body-mobile');
        
        getHistoryBody.innerHTML = '';
    })


// Copy Button Make Functional
let getCopyCountMobile = parseInt(document.getElementById('header-copy-count-mobile').innerText);
document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('copy-btn')) {
            const getButton = event.target;

            // getButton.innerText = 'Copied'
            // Get the card call number
            const getCallNo = getButton.parentNode.parentNode.children[2].innerText;
            navigator.clipboard.writeText(getCallNo);

            // Make to increase copy number if user click on the copy button
            // Get the header copy count
            getCopyCountMobile += 1
            
            // Assign it to the header copy
            document.getElementById('header-copy-count-mobile').innerText = getCopyCountMobile;
            
        }
    })

// Make Favorite Button Functional
// // Get the header favourite count
let getFavouriteCountMobile = parseInt(document.getElementById('header-favourite-count-mobile').innerText);
document.getElementById('card-section')
    .addEventListener('click', function(event){
        if(event.target.className.includes('favorite-btn')) {
            
            // Lets Increase The Favourite Count
            getFavouriteCountMobile += 1;

            // Lets set it to the header favourite count
            document.getElementById('header-favourite-count-mobile').innerText = getFavouriteCountMobile;
        }
    })




// Side bar show in mobile devices

// Get The Side bar
const getSideBar = document.getElementById('sidebar-section-pan-mobile');

const horizontalMenu  = document.getElementById('three-horizontal-menu-button') 
horizontalMenu.addEventListener('click', function(){
    horizontalMenu.classList.toggle('activate-button');
    getSideBar.classList.toggle('activate-pan');
    
})

}


