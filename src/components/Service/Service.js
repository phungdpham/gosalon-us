import React, { Component } from "react";
import services from "./services.json";
import ListGroup from "./ListGroup";
import ListService from "./ListService";
import CardContainer from "./CardContainer";
import Card from "./Card";



class Service extends Component {
    state = {
        services,
    };

    render () {
        return (
            <CardContainer>
                <Card>
                    {/* <ListGroup /> */}
                    <ListService services={services}/>
                </Card>;
            </CardContainer>
        )
    };
}

export default Service;



// const services = [{service}];


// {
//     id: 1,
//     group: "Basic Services",
//     serviceList: [
//         {
//             serId: 11,
//             service: "Basic Manicure",
//             price: 18
//         },
//         {
//             serId: 12,
//             service: "Basic Pedicure",
//             price: 28
//         },
//         {
//             serId: 12,
//             service: "Basic Manicure and Pedicure",
//             price: 40
//         },
//         {
//             serId: 13,
//             service: "Manicure Gel Color",
//             "price": 35
//         },
//         {
//             serId: 14,
//             service: "Manicure Gel French",
//             price: 28
//         }
//     ]

// },
// {
//     id: 2,
//     group: "Full Set",
//     serviceList: [
//         {
//             serId: 21,
//             service: "Acrylic",
//             price: 30
//         },
//         {
//             serId: 22,
//             service: "Overlay",
//             price: 30
//         },
//         {
//             serId: 22,
//             service: "Pink & White",
//             price: 55
//         },
//         {
//             serId: 23,
//             service: "Gel Dip",
//             price: 55
//         }
//     ]

// },
// {
//     id: 3,
//     group: "Full Set",
//     serviceList: [
//         {
//             serId: 31,
//             service: "Acrylic",
//             price: 20
//         },
//         {
//             serId: 32,
//             service: "Overlay",
//             price: 20
//         },
//         {
//             serId: 32,
//             service: "Pink & White",
//             price: 35
//         },
//         {
//             serId: 33,
//             service: "Gel Dip",
//             price: 45
//         }
//     ]
// }
