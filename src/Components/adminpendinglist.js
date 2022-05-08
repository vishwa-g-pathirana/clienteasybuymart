import React, { Fragment, useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const PendingList = () => {
    const [items, setItem] = useState([]);
    const [items2, setItem2] = useState([]);

    const getItem = async () => {
        try {
            const response = await fetch("http://localhost:5000/easybuymartprodviewadmin")
            const jsonDATA = await response.json();

            setItem(jsonDATA);

        } catch (err) {
            console.error(err.message);
        }


    }
    const getItemapr = async () => {
        try {
            const response = await fetch("http://localhost:5000/easybuymartprodviewclient")
            const jsonDATA = await response.json();

            setItem2(jsonDATA);


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
        getItemapr()
    }
    const deleteProductapr = async id => {
        try {
            const deleteTerm = await fetch(`http://localhost:5000/deleteproduct/${id}`, {
                method: "DELETE"


            });
            setItem(items2.filter(item2 => item2.prod_id != id))
            console.log(deleteTerm);
        } catch (err) {
            console.error(err.message);
        }
        getItem()
        getItemapr()
    }
    const updateDisplay = async (id) => {

        try {


            const response = await fetch(
                `http://localhost:5000/product/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },

                }
            );
            setItem(items.filter(item => item.prod_id != id))


        } catch (err) {
            console.error(err.message);
        }
        getItem()
        getItemapr()


    };

    const updateDisplayapr = async (id) => {

        try {


            const response = await fetch(
                `http://localhost:5000/productunpublish/${id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },

                }
            );
            setItem(items2.filter(item2 => item2.prod_id != id))


        } catch (err) {
            console.error(err.message);
        }
        getItem()
        getItemapr()


    };

    useEffect(() => {
        getItem();
        getItemapr();
    }, []);

    return <Fragment>
         <Divider>
        <Chip label="PENDING PRODUCTS" />

      </Divider>
      <br></br>
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
                        <th><button className="btn btn-success" onClick={() => updateDisplay(item.prod_id)} >Approve</button></th>
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

{/* 2nd table */}

<Divider>
        <Chip label="APPROVED PRODUCTS" />

      </Divider>
      <br></br>
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


                {items2.map(item2 => (
                    <tr key={item2.prod_id}>
                        <td>{item2.name}</td>
                        <td>{item2.sellername}</td>
                        <td>{item2.description}</td>
                        <th><button className="btn btn-warning" onClick={() => updateDisplayapr(item2.prod_id)} >Unpublish</button></th>
                        <th><button className="btn btn-outline-danger" onClick={() => deleteProductapr(item2.prod_id)} >Delete</button></th>
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