const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let funcStr = "";

function getButtonPress(btnPress)
{
    const value = btnPress.textContent;
    return btnPress;
}


function calculate(equation)
{
    let operands = [0, 0];
    let operandIndex = 0;
    let operandsStr = ["",""];
    for(let char of equation)
    {
        if(isNaN(parseInt(char)))
        {
            if(char === "=")
            {
                
            }
            operandIndex++;
        }
        else
        {
            operands[operandIndex] += char;
        }
    }
    return result;
}

buttons.forEach(button =>
{
    // button.addEventListener("click", () =>
    // {
    //     funcStr += getButtonPress(button);
    // });

});