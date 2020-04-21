import React from 'react';
import PropTypes from 'prop-types'

const TableList = (props) => {
    const {tableHead, tableBody} = props;

    const renderColmns = (body) => {
        return Object.entries(body).map(([key, value], idx) => {
            return (
                <td key={(idx+key)}>
                    {value}
                </td>
            )
        });
    };

    const renderBody = () => {
        let trData = [];
        tableBody.forEach((body, index) => {
            trData.push(
                <tr key={index}>
                    {renderColmns(body)}
                </tr>
            )
        });
        if(!(tableBody.length > 0) ){
            trData = [
                (
                    <tr key="123">
                        <td className="text-center"
                            colSpan={tableHead.length}>
                            No Data
                        </td>
                    </tr>
                )
            ]
        }
        return trData
    };

    const renderHead = () =>{
        let trData = [];
        tableHead.forEach((head, index) => {
            trData.push(
                <th key={index}>
                    {head}
                </th>
            )
        });
        return trData;
    };

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                {renderHead()}
            </tr>
            </thead>
            <tbody>
            {renderBody()}
            </tbody>
        </table>
    );
};

TableList.defaultProps = {
    tableHead: ["First", "Second", "..." ],
    tableBody: [
        {
            name: 'karan',
            age: '21',
            heigh: '5.9',
        },
        {
            name: 'bunny',
            age: '21',
            heigh: '5.9',
        },
    ]
};

TableList.propTypes = {
    tableHead: PropTypes.array.isRequired,
    tableBody: PropTypes.array.isRequired,
};

export default TableList;