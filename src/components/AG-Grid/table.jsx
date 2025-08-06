"use client";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { IoIosSearch } from "react-icons/io";

import { employees } from "@/lib/data";

export const Table = () => {
  ModuleRegistry.registerModules([AllCommunityModule]);

  const [rowData, setRowData] = useState([]);
  const [quickFilterText, setQuickFilterText] = useState("");
  const paginationPageSize = 15;
  const paginationPageSizeSelector = [15, 20, 50, 100];

  const [colDefs] = useState([
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First Name", filter: true, editable: true },
    { field: "lastName", headerName: "Last Name", filter: true, editable: true },
    { field: "email", headerName: "Email", filter: true, editable: true },
    { field: "department", headerName: "Department", filter: true },
    { field: "position", headerName: "Position", filter: true, editable: true },
    { field: "salary", headerName: "Salary", filter: true, editable: true },
    { field: "hireDate", headerName: "Hire Date", filter: true },
    { field: "age", headerName: "Age", filter: true },
    { field: "location", headerName: "Location", filter: true, editable: true },
    { field: "performanceRating", headerName: "Performance Rating", filter: true, editable: true },
    { field: "projectsCompleted", headerName: "Projects Completed", filter: true },
    { field: "isActive", headerName: "Is Active", filter: true, editable: true },
    { field: "skills", headerName: "Skills", filter: true, editable: true },
    { field: "manager", headerName: "Manager", filter: true, editable: true, valueFormatter: (params) => {return params.value ? params.value.name : "-"}},
  ]);

  useEffect(() => {
    setRowData(employees);
  }, []);

  const handleChange = (e) => {
    setQuickFilterText(e.target.value);
  };

  return (
    <div className="m-2 flex flex-col gap-4">
      <div className="font-bold text-2xl text-black text-center py-2 border-y-1 border-gray-300 font-sans">
        Employees Detail
      </div>
      {/* Global Search Section */}
      <div className="flex items-center justify-start gap-1 bg-gray-200 w-1/5 px-2 py-1 rounded-xl">
        <IoIosSearch className="text-gray-700 size-7" />
        <input
          id="global-search"
          className="text-black/80 w-full border-b-amber-700 py-0.5 px-1 text-lg outline-none rounded"
          type="search"
          value={quickFilterText}
          placeholder="Global Search..."
          onChange={handleChange}
        />
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "750px", overflowY: "auto" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={quickFilterText}
        />
      </div>
    </div>
  );
};
