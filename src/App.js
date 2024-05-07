import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const columns = [
  { field: '_id', headerName: 'ID', hide: true },
  {
    field: 'reportTime',
    headerName: 'Time',
    // width: 180,
    editable: true,
    valueFormatter: (params) => {
      // Parse the ISO date string into a Date object
      // console.log(params);
      const date = new Date(params);
      // Format the time component
      const formattedTime = date.toLocaleString();
      return formattedTime;
    },
  },
  {
    field: 'monitorId',
    headerName: 'Monitor ID',
    // width: 100,
    editable: true,
  },
  {
    field: 'monitorName',
    headerName: 'Monitor Name',
    sortable: false,
    // width: 160,
  },
  {
    field: 'ReceivedStarID',
    headerName: 'StarID',
    sortable: false,
    // width: 60,
  },
  {
    field: 'starName',
    headerName: 'Star Name',
    sortable: false,
    // width: 160,
  },
  {
    field: 'BuildingName',
    headerName: 'Building Name',
    sortable: false,
    // width: 160,
  },
  {
    field: 'FloorName',
    headerName: 'Floor Name',
    sortable: false,
    // width: 160,
  },
  {
    field: 'xy',
    headerName: 'X, Y',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    // width: 160,
    valueGetter: (value, row) => `${Math.round(row.X) || ''}, ${Math.round(row.Y) || ''}`,
  },
  {
    field: 'inMotion',
    headerName: 'InMotion',
    sortable: false,
    // width: 160,
  },
  {
    field: 'buttons',
    headerName: 'Buttons',
    sortable: false,
    // width: 160,
  },
];


export default function DataGridDemo() {

  const [rows, setRows] = React.useState([]);
  const dataGridRef = React.useRef(null);

  function addDataToTable(params) {
    console.log(params);
    params = JSON.parse(params);
    // Map over the params array and update the _id property to id
    const updatedRows = params.map((row) => ({ ...row, id: row._id }));
    // Concatenate the updated rows with the existing rows
    setRows((prevRows) => [...updatedRows]);
    if (dataGridRef.current) {
      dataGridRef.current.api.resizeColumnsToFit();
    }
  }


  window.addDataToTable = addDataToTable
  return (
    <Box sx={{ height: 550, width: '100%', overflow: 'hidden' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        autosizeOnMount
        columnVisibilityModel={{
          _id: false,
        }}
        initialState={{
          sorting: {
            sortModel: [{ field: 'reportTime', sort: 'desc' }],
          },
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        pageSizeOptions={[100]}
        disableRowSelectionOnClick
        ref={dataGridRef}
      />
    </Box>
  );
}