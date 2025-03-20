const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");



function getValue(button)
{
    return button.textContent;
}

function getType(button)
{
    return button.classli
}

buttons.forEach(button =>
{
    console.log(button.classList[0]);
    // button.addEventListener("click", () =>
    // {
    //     btnValue = getValue(button);
    //     btnType = getType(button);
    // });

});