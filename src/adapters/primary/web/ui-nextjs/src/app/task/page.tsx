import { Box } from "@mui/material";
import { TaskDataGrid } from "./task-datagrid";

export default function Page() {
  return (
    <>
      <Box mt={2}>
        <h1>Tasks</h1>
        <TaskDataGrid data={dummyData} />
      </Box>
    </>
  );
}

const dummyData = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: "Pending",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "Pending",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "Pending",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
];
