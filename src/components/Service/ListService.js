import React from "react";

const ListService = props => (
    <ul className="list-group">
        {props.services.map(service => (
            <li className="list-group-item" key={service.id}>
                {service.service}
            </li>
        ))}
    </ul>
)

export default ListService;


// [
    //     {
    //         id: 1,
    //         service: "Basic Manicure",
    //         "group": "Basic Service",
    //         "price": 18
    //     },
    //     {
    //         id: 2,
    //         service: "Basic Pedicure",
    //         group: "Basic Service",
    //         price: 28
    //     },
    //     {
    //         id: 3,
    //         service: "Basic Manicure & Pedicure",
    //         group: "Basic Service",
    //         price: 40
    //     },
    //     {
    //         id: 4,
    //         service: "Manicure Gel Color",
    //         group: "Basic Service",
    //         price: 35
    //     },
    //     {
    //         id: 5,
    //         service: "Acrylic",
    //         group: "Full Set",
    //         price: 28
    //     },
    //     {
    //         id: 6,
    //         service: "Overlay",
    //         group: "Full Set",
    //         price: 18
    //     },
    //     {
    //         id: 7,
    //         service: "Pink & White",
    //         group: "Full Set",
    //         price: 28
    //     },
    //     {
    //         id: 8,
    //         service: "Gel Dip",
    //         group: "Full Set",
    //         price: 40
    //     },
    //     {
    //         id: 9,
    //         service: "Acrylic",
    //         group: "Fill In",
    //         price: 20
    //     },
    //     {
    //         id: 10,
    //         service: "Overlay",
    //         group: "Fill In",
    //         price: 20
    //     },
    //     {
    //         id: 10,
    //         service: "Pink & White",
    //         group: "Fill In",
    //         price: 35
    //     },
    //     {
    //         id: 10,
    //         service: "Gel Dip",
    //         group: "Fill In",
    //         price: 45
    //     }
    // ];
    




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

// }
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
