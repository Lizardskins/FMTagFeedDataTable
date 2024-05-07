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

function addDataToTable(params) {

  console.log(params);
}
window.addDataToTable = addDataToTable()
let rows = [
  {
    "BuildingName": "",
    "FloorName": "",
    "HumidityPercent": 0,
    "IRID": 0,
    "LBIValue": 944,
    "Probe1TempStatus": 0,
    "Probe2TempStatus": 0,
    "RSSI": -91,
    "ReceivedStarID": 456,
    "TemperatureProbe1": 0,
    "TemperatureProbe2": 0,
    "X": 0,
    "Y": 0,
    "_id": "6601e3297da4664207ccc3cb",
    "buttons": "",
    "inMotion": 0,
    "lastSeenByMonitor": "2024-03-25T20:48:41.901Z",
    "monitorId": 745610,
    "monitorName": "5100-4-4410 NS 4",
    "offline": false,
    "reportTime": "2024-03-25T20:48:41.000Z",
    "starName": "5150-LL2-Hallway by EVS Closet",
    "tagid": 1479664
  }, {
    "BuildingName": "5150-Rehab",
    "FloorName": "LL2",
    "HumidityPercent": 0,
    "IRID": 0,
    "LBIValue": 890,
    "Probe1TempStatus": 0,
    "Probe2TempStatus": 0,
    "RSSI": -128,
    "ReceivedStarID": 100,
    "TemperatureProbe1": 0,
    "TemperatureProbe2": 0,
    "X": 64.8000030517578,
    "Y": 66.6999969482422,
    "_id": "6601e30f7da4664207ccb326",
    "buttons": "",
    "inMotion": 0,
    "offline": false,
    "reportTime": "2024-03-25T20:48:12.000Z",
    "starName": "Wi-Fi",
    "tagid": 1479664
  }
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 600, width: '100%', overflow: 'hidden' }}>
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
      />
    </Box>
  );
}