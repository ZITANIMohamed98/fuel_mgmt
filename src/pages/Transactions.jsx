import React from 'react'

import Table from '../components/table/Table'

import changesList from '../assets/JsonData/changes-list.json'

const changesTableHead = [
    '',
    'nTank',
    'type',
    'date',
    'volume',
    'totalPrice'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.nTank}</td>
        <td>{item.type}</td>
        <td>{item.date}</td>
        <td>{item.volume}</td>
        <td>{item.totalPrice}</td>
    </tr>
)

const Changes = () => {
    return (
        <div>
            <h2 className="page-header">
                Transactions
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={changesTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={changesList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Changes
