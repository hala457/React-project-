
/*  some ajax code to fetch data  */
const products = [
    { name: "A", num: 30, price: 4.4, sold: false },
    { name: "B", num: 1, price: 6.4, sold: true },
    { name: "C", num: 10, price: 8, sold: true },
    { name: "D", num: 21, price: 1, sold: false },
]

const products2 = [
    { name: "E", num: 4, price: 40.4, sold: true },
    { name: "F", num: 11, price: 16.4, sold: false },
]

const tableHeader = <thead>
    <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Price</th>
        <th>Sold</th>
    </tr>
</thead>


function TableRow(props) {
    return <tr>
        <td> {props.product.name}</td>
        <td> {props.product.num}</td>
        <td> {props.product.price}</td>
        <td> {props.product.sold.toString()}</td>
    </tr>
}

function ProductTable(props) {

    const allRows = props.pdata.map(
        (item) => <TableRow product={item} />
    );

    return (
        <div>
            <table border="1">
                {tableHeader}
                <tbody>
                    {allRows}
                </tbody>
            </table>
        </div>
    )
}


ReactDOM.render(
    <div>
        <ProductTable pdata={products} />
        <br />
        <ProductTable pdata={products2} />
    </div>,
    document.getElementById('root')
);