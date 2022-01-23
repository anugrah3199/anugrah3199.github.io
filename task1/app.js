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
    console.log(data)
    const keys = Object.keys(data);
    const arr = []
    keys.forEach((ele) => {
        arr.push(data[ele])
    })
    arr.sort((a, b) => b.popularity - a.popularity)

    arr.forEach((index) => {
        const product = index
        console.log(product)
        let row = table.insertRow();
        for (ele in product) {
            let cell = row.insertCell();
            let text = document.createTextNode(product[ele])
            cell.appendChild(text)
        }
    })

}
renderproducts()