import React from "react";
import serviceList from "./services.json";


const listOfService = {serviceList};

groupBy = (serviceList, group) => {
    return serviceList.reduce((acc, groupName) => {
        const key = groupName[group];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(groupName);
        return acc;
    },{});
};

const groupedServices = this.groupBy(listOfService, 'group');
console.log(groupedServices);