        const screen = document.querySelector(".screen");
        const btns = document.querySelectorAll(".button");
        let calculation = [];
        let join ;
        function calculate(btn){
            const value = btn.textContent;
            if(value === "c"){
                calculation = [];
                screen.textContent = '';
                
            }
            else if(value === "="){
                screen.textContent = eval(join);

            }
            else{
                calculation.push(value);
                join = calculation.join('');
                screen.textContent = join;
            }
        }


        btns.forEach((btn)=> btn.addEventListener("click", ()=>calculate(btn))

        )