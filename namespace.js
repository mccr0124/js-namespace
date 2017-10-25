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
    },
    click: function divClicked(ev){
            this.click.style.backgroundColor = "blue";
            this.click.style.borderColor = "yellow";
    },
    over: function divOver(ev){
           this.over.classList.toggle("highlight");
    },
    out: function divOut(ev){
           this.out.classList.toggle("highlight");
    }
    
};
