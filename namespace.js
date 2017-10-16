var MCCR0124 = {
    init: function(){
        let newDiv = document.createElement("div");
        let box = document.getElementById("boxes");
        newDiv.classList.add("box");
        newDiv.textContent="mccr0124";
        box.appendChild(newDiv);
        newDiv.addEventListener("click", divClicked);
        newDiv.addEventListener("mouseover", divOver);
        newDiv.addEventListener("mouseout", divOut);
        
        function divClicked(ev){
            this.setAttribute("border-color", "blue");
            this.setAttribute("background-color", "yellow");
        }
    }
    
};
