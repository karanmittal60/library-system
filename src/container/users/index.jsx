import React, {useEffect, useState} from 'react';
import TableList from "../../components/tableList";
import usePikachu from "../../hooks/usePikachu";
import {routeRules} from "../../routes/routeRules";
import Pagination from "../../components/pagination";

const Users = (props) => {

    const {token, setUsersData, usersData, userDetails} = usePikachu();

    useEffect(() => {
        if (localStorage.getItem('token') === "" || userDetails === null){
            props.history.push(routeRules.login);
        } else
            getUsersData(limit, page);
    },[]);

    const URL ="http://staging.prozo.com/api/v3";

    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(0);

    const getUsersData = (l, p) => {

        let localToken = localStorage.getItem('token');
        fetch(
            `${URL}/users?limit=${l}&offset=${p}`,
            {
                // method: 'GET',
                headers :{
                    tenant: "tenant_3",
                    source: "2" ,
                    id: userDetails,
                    Authorization: localToken
                }
            }
        )
            .then(response  => response.json())
            .then(response  => {
                setUsersData(response)
                // setUsersData(response);
            })
            .catch(err => {
                console.log("error",err)
            })
    };

    const tableBody = Array.isArray(usersData) && usersData.length > 0 ? usersData.map(item => {

            return {
                name: item.name,
                mobile: item.mobile,
                email: item.email,
                id: item.id,
                payment_due: item.payment_due,
            }
        }) :
        [];
    const tableHead = [/*- user_name, mobile, email, id , gstin*/
        "User Name",
        "Mobile",
        "Email",
        "Id",
        "GSTIN",
    ];


    const onPageChange = (newPage) => {
        setPage(parseInt(newPage));
        getUsersData(limit, newPage);
    };


    return (
        <div>
            <div className="text-center">
                <h3>Users</h3>
            </div>
            <TableList
                tableHead={tableHead}
                tableBody={tableBody}
            />
            <div className="m-5">
                <Pagination
                    pages={10}
                    onPageChange={onPageChange}
                    activePage={page}
                />
            </div>
        </div>
    );
};

export default Users;