// for (let i =1 ; i <= 20; i++) {    
//     document.getElementById('allPlace').innerHTML += `
//     <div class="myplace mb-4">
//                       <input
//                         class="form-check-input styledRadio"
//                         type="radio"
//                         name="exampleRadios"
//                         id="exampleRadios${i}"
//                         value="option1"
//                       />
//                       <label class="form-check-label bg-success rounded" for="exampleRadios${i}"></label>
//                     </div>
//     `
// }

var selectedValue = 1
document.getElementById('toCountry').innerText = "libya"
document.getElementById('toCountry').setAttribute('value', 1)

function getSelectValue() {
    selectedValue = Number(document.getElementById("list").value);

    switch(selectedValue) {
        case 1:
            document.getElementById('toCountry').innerText = "libya"
            document.getElementById('toCountry').setAttribute('value', 1)
        break;
        case 2:
            document.getElementById('toCountry').innerText = "imarate"
            document.getElementById('toCountry').setAttribute('value', 2)
        break;
        case 3:
            document.getElementById('toCountry').innerText = "alaska"
            document.getElementById('toCountry').setAttribute('value', 3)
        break;
        case 4:
            document.getElementById('toCountry').innerText = "china"
            document.getElementById('toCountry').setAttribute('value', 4)
        break;
        default:
            document.getElementById('toCountry').innerText = "libya"
            document.getElementById('toCountry').setAttribute('value', 1)
    }
}
