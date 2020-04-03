import React, {useState} from "react";
import MaterialTable from "material-table";

const CategoryTableForm = ({ data}) => {
    const  [state, setState] = useState( {data} )
    const columns = [
        { title: 'Date', field: 'date' },
        { title: 'Time', field: 'time' },
        { title: 'Comment', field: 'comment' },
        { title: 'Amount', field: 'amount', type: 'numeric' },
        { title: 'Currency', field: 'currency' },
    ]


    return (
        <MaterialTable
            data={ state.data }
            columns={ columns }
            options={{
                actionsColumnIndex: -1,
                showTitle: false,
                search: false
            }}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    )
}

export default CategoryTableForm
