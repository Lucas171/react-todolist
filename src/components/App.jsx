import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Input from "./Input";
import ListItem from "./ListItem";

import { Container } from "@mui/material";

function App() {
    const [list, setList] = useState([]);

    function addItem(item) {
        setList([...list, item]);
        console.log(list);
    }

    function deleteitem(id) {
        const newArray = list.filter((item, index) => {
            return index !== id;
        });

        setList(newArray);
    }

    return (
        <div>
            <Container maxWidth="sm">
                <div className="box">
                    <div style={{ textAlign: "center" }}>
                        <Heading />
                        <Input addItem={addItem} />
                    </div>
                    {list.map((x, index) => {
                        return (
                            <ListItem
                                deleteItem={deleteitem}
                                content={x}
                                key={index}
                                id={index}
                            />
                        );
                    })}
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
{
    /*  */
}
