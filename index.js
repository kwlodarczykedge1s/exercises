/**
 * Created by kacper on 20.01.17.
 */

$(() => {
    let toDoList = [];

    $(".button").on("click", () => {
        const inputValue = $(".input").val();
        let li = `<li>${inputValue}</li>`;

        if(!inputValue) {
            console.log('error');
            return;
        }

        toDoList.push(li);
        console.log(toDoList);

        $("ul").append(li);
    });

    $(".clear").on("click", () => {
        $("ul").empty();
    })




});