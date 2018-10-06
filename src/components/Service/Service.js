import React, { Component } from "react";
import services from "./services.json";
import ListGroup from "./ListGroup";
import ListService from "./ListService";
import CardContainer from "./CardContainer";
import { Card, CardBody, CardHeader } from "../Card";

class Service extends Component {
    state = {
        services
    };
    loadServicesByGroup = () => {
        //Creating new array of all groups names
        const groups = services.map(groupNames => groupNames.group);
        console.log(groups);

        //Delete duplicated group names
        const uniqGroups = [...new Set (groups)];
        console.log (uniqGroups);

        //Creating new array of services by group
        const servicesByGroup = [];
        this.setState({ uniqGroups })

        //loop through all unique groups to obtain its services
        uniqGroups.forEach( groupName => {

            //Getting list of services in same group
            const groupedSer = services.filter( serList => {
                if (serList.group === uniqGroups[groupName]) {
                    const groupObj = {};
                    groupObj.push(serList.id, serList.service, serList.price)
                };
                return groupedSer;
            });
            console.log(groupedSer);
            servicesByGroup.push(groupedSer);
            console.log(servicesByGroup);
        })

    };

    render () {
        return (
            <Card>
                <CardHeader uniqGroups={services}/>
                <CardBody services={services}/>
            </Card>
        )
    };
}

export default Service;


// class Service extends Component {
//     state = {
//         services
//     };


//     groupBy(serviceArr, property ) {
//         return serviceArr.reduce((groupArr, obj) => {
//             const key = obj[property];
//             if (!groupArr[key]) {
//                 groupArr[key] = [];
//             }
//             groupArr[key].push(obj);
//             return groupArr;
//         },{});

//     };
//     grouped = this.groupBy(services, 'group');
    

    // console.log("group": ", group);


    // componentDidMount() {
        
    // }

    //use a for in loop to pull out the group names for each object
    //use another for in loop, but be sure to get deep enough acc.basic[i].service

    // console.log(groupedServices);
    // {
    //   "Basic Service": [
    //     { service: 'Basic Manicure', price: 20 }, 
    //     { service: 'Acrylic', price: 20 }
    //   ], 
    //   "Full Set": [{ service: 'Acrylic', price: 21 }] 
    // }

  

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
