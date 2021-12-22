

let btn = document.getElementById("btn");
btn.addEventListener("click",
    function (e) {
        e.preventDefault()
        let message = document.getElementById("msg-input");
        let feedback = document.querySelector(".feedback");
        let msgContent = document.getElementById("last-msg");

        if (message.value === '') {
            feedback.classList.add("show");
            setTimeout(function () {
            feedback.classList.remove('show')
            }, 2000)
        }
        else {
            //Change message content and clear the message input
            msgContent.textContent = message.value
            message.value = ''
        }
    }
)
