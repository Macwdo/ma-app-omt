"use client";
import { Button } from "@/components/ui/button";

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
import { Dispatch, SetStateAction } from "react";
import { Payment } from "./columns";

type PaginationStateProps = {
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
};

type SortingStateProps = {
  state: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
};

type ColumnFiltersStateProps = {
  state: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
};

type VisibilityStateProps = {
  state: VisibilityState;
  setColumnVisibility: Dispatch<SetStateAction<VisibilityState>>;
};

type RowSelectionStateProps = {
  state: Record<string, boolean>;
  setRowSelection: Dispatch<SetStateAction<Record<string, boolean>>>;
};

type StateProps = {
  pagination: PaginationStateProps;
  sorting: SortingStateProps;
  columnFilters: ColumnFiltersStateProps;
  columnVisibility: VisibilityStateProps;
  rowSelection: RowSelectionStateProps;
};

type DataTableProps<T> = {
  states: StateProps;
  data: T[];
  columns: ColumnDef<T>[];
};

export function DataTable({
  states: {
    pagination,
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
  },
  data,
  columns,
}: DataTableProps<Payment>) {
  const table = useReactTable({
    data,
    columns,
    onSortingChange: sorting.setSorting,
    onColumnFiltersChange: columnFilters.setColumnFilters,
    onPaginationChange: pagination.setPagination, // Pagination change will update the parent state
    onColumnVisibilityChange: columnVisibility.setColumnVisibility,
    onRowSelectionChange: rowSelection.setRowSelection,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting: sorting.state,
      columnFilters: columnFilters.state,
      columnVisibility: columnVisibility.state,
      rowSelection: rowSelection.state,
      pagination: pagination.pagination, // Use the pagination state from props
    },
  });

  return (
    <div className="w-full">
      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mr-2"
        />
      </div> */}
      <div className="rounded-md border bg-white z-0">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} items selecionados.
        </div>
        <div className="space-x-2 flex">
          <div className="flex items-center space-x-2">
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
