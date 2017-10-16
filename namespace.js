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
            this.style.backgroundColor = "blue";
            this.style.borderColor = "yellow";
        }
        function divOver(ev){
            this.style.classList("highlight");
        }
    }
    
};
