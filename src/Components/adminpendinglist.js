import React, { Fragment, useEffect, useState } from "react";

const PendingList = () => {
    const [items, setItem] = useState([]);

    const getItem = async () => {
        try {
            const response = await fetch("http://localhost:5000/easybuymartprodviewadmin")
            const jsonDATA = await response.json();

            setItem(jsonDATA);

        } catch (err) {
            console.error(err.message);
        }


    }

    const deleteProduct = async id => {
        try {
            const deleteTerm = await fetch(`http://localhost:5000/deleteproduct/${id}`, {
                method: "DELETE"


            });
            setItem(items.filter(item => item.prod_id != id))
            console.log(deleteTerm);
        } catch (err) {
            console.error(err.message);
        }
        getItem()
    }

    useEffect(() => {
        getItem();
    }, []);

    return <Fragment>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Item name</th>
                    <th>Seller name</th>
                    <th>Description</th>
                    <th>Approve</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>


                {items.map(item => (
                    <tr key={item.prod_id}>
                        <td>{item.name}</td>
                        <td>{item.sellername}</td>
                        <td>{item.description}</td>
                        <th><button className="btn btn-outline-danger" >Approve</button></th>
                        <th><button className="btn btn-outline-danger" onClick={() => deleteProduct(item.prod_id)} >Delete</button></th>
                    </tr>
                ))}

                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <th><button className="btn btn-outline-danger" >Approve</button></th>
                    <th><button className="btn btn-outline-danger" >Delete</button></th>
                </tr> */}

            </tbody>
        </table>
    </Fragment>

}
export default PendingList;