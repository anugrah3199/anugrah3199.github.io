const URL = "https://s3.amazonaws.com/open-to-cors/assignment.json"
const table = document.getElementById("mytable");

const res = fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
const getproducts = async() => {
    const a = await res;
    const products = a.products;
    return products
};

async function renderproducts() {
    const data = await getproducts();
    const keys = Object.keys(data);


    keys.forEach((key, index) => {
        const product = data[key]
        let row = table.insertRow();
        for (ele in product) {
            let cell = row.insertCell();
            let text = document.createTextNode(product[ele])
            cell.appendChild(text)
        }
    })

}
renderproducts()