"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EllipsisVertical, Search } from "lucide-react";
import { DataTable } from "./components/data-table/data-table";
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { columns, Payment } from "./components/data-table/columns";

const data: Payment[] = [
  {
    id: "m5gr8s4i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1freuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "dervg1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kmha53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqetcj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gj84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1rbeuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "dervv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma5c3ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecjx4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const getData = async (
  pageSize: number,
  existantData: Payment[] = []
): Promise<Payment[]> => {
  if (existantData.length > 0) {
    return existantData.slice(0, pageSize);
  }
  console.log(`Page size: to fetch ${pageSize}`);
  console.log(`data length: ${data.length}`);
  return data.slice(0, pageSize);
};

export function Dashboard() {
  const [data, setData] = useState<Payment[]>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

  const states = {
    pagination: { pagination, setPagination },
    sorting: { state: sorting, setSorting },
    columnFilters: { state: columnFilters, setColumnFilters },
    columnVisibility: { state: columnVisibility, setColumnVisibility },
    rowSelection: { state: rowSelection, setRowSelection },
  };

  const fetchData = async (pageSize: number) => {
    console.log(`Page size: ${pageSize}`);

    console.log("fetching data");
    const result = await getData(pageSize, data);
    console.log(result);

    setData(result);
  };

  useEffect(() => {
    fetchData(pagination.pageSize);
  }, [pagination.pageSize]);

  return (
    <div>
      <div className="mb-2">
        <div>
          <DataTable data={data} columns={columns} states={states} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
