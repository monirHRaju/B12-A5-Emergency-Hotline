// universal scripts
console.log('script  connected')
//re usable functions
function getValue(id){
    const value = document.getElementById(id).value;
    
    return value;
}
function getValueNumber(id){
    const value = document.getElementById(id).value;
    const valueNumber = parseInt(value);

    return valueNumber;
}
function getInnerTextNumber(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseInt(innerText);

    return innerTextNumber;
}

function setAvailableBalance(value){
    const availableBalance = document.getElementById('balance');
    
    availableBalance.innerText = value;
}

function getElement(id){
    const element = document.getElementById(id)
    return element;
}

function getElements(className){
    const elements = document.getElementsByClassName(className)
    return elements;
}




//main functions
//heart count function
let count = 0;
const heartButtons = document.querySelectorAll('.fa-heart');
for(const button of heartButtons){
    button.addEventListener('click', function(){
        count++;
        getElement('count').innerText = count;
    })
}


    const callBtns = document.querySelectorAll('.call-btn')
    const callHistory = [];
    // console.log(callBtns)
    for(const btn of callBtns){
        btn.addEventListener('click', function(event){
            
            
            //coin function
            const availableCoins = getInnerTextNumber('available-coins');
            const newAvailableCoins = availableCoins - 20;
            if(newAvailableCoins < 0){
                alert('You do not have sufficient balance. Please add Balance first. You need at least 20 coins but you have only '+availableCoins + ' coins')
                return;
            } else{
            getElement('available-coins').innerText = newAvailableCoins;

            }
            
            //call alert function
            let title = btn.parentNode.parentNode.children[1].innerText;
            let number = btn.parentNode.parentNode.children[3].innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            alert('Are you sure to call to '+title+ ' ' +number)

            //call history function
            const callHistoryContainer = getElement('call-history-container')
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `
                <div class="flex justify-between gap-3 items-center p-4 rounded-lg bg-[#fafafa] mb-3">
                    <div class="left">
                        <h3 class="text-[16px] text-black font-semibold">${title}</h3>
                        <p class="text-[18px] text-gray-500">${number}</p>
                    </div>
                    <p class="text-gray-900 text-[18px]">${timeString}</p>
                </div>
            `
            callHistoryContainer.append(newDiv);
            // console.log(event.target.parentNode)
        })}
        

        getElement('clear-button').addEventListener('click', function(){
            callHistory.length = 0;
            getElement('call-history-container').innerHTML = '';
        })
       
        
