//Set initial count
let counter = 0;

//select buttons and value
const val = document.querySelector('#value');
const allBtns = document.querySelectorAll('.btn')

allBtns.forEach(function (button){
    button.addEventListener('click', function(e){
        /* increase or decrease counter when button is clicked */
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            counter--
        }else if(styles.contains('increase')){
            counter++
        }else{
            counter = 0
        }
        // Change colour of number when counter button is pressed 
        if(counter > 0){
            val.style.color = 'green'

        } else if (counter < 0){
            val.style.color = 'red'

        }else{
            val.style.color = 'black'
        }
        val.textContent = counter
    })
})