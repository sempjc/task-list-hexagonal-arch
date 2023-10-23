"use client";

import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

export type TaskDataGridProps = {
  data: any[];
};

export function TaskDataGrid(props: TaskDataGridProps) {
  const { data } = props;

  return (
    <>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        rows={data}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
      />
    </>
  );
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 150,
  },
];
