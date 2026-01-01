"use client";

import { rankItem } from "@tanstack/match-sorter-utils";
import {
  type ColumnDef,
  type FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";

/** ======================
 * Types
 * ====================== */
type UserStatus = "active" | "inactive" | "pending";
type UserRole = "admin" | "editor" | "viewer";

type User = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  status: UserStatus;
  role: UserRole;
};

/** ======================
 * Mock data
 * ====================== */
const USERS: User[] = Array.from({ length: 257 }).map((_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `+61 400 000 ${String(i % 100).padStart(2, "0")}`,
  status: ["active", "inactive", "pending"][i % 3] as UserStatus,
  role: ["admin", "editor", "viewer"][i % 3] as UserRole,
}));

/** ======================
 * Utils
 * ====================== */
function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// Single-column fuzzy
const fuzzyFilter: FilterFn<User> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(String(row.getValue(columnId) ?? ""), value);
  addMeta?.({ itemRank });
  return itemRank.passed;
};

// Global fuzzy (only search certain columns to reduce CPU)
const searchableColumns: (keyof User)[] = ["username", "name", "email"];
const fuzzyGlobalFilter: FilterFn<User> = (row, _columnId, value) => {
  const v = String(value ?? "").trim();
  if (!v) return true;

  return searchableColumns.some((col) =>
    fuzzyFilter(row, col as string, v, () => {}),
  );
};

/** ======================
 * UI bits
 * ====================== */
function FilterButton<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T[];
  onChange: (v: T[]) => void;
}) {
  const toggle = (opt: T) => {
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt],
    );
  };

  return (
    <details className="relative">
      <summary className="cursor-pointer select-none rounded border px-3 py-2 text-sm">
        {label}
        {value.length > 0 ? ` (${value.length})` : ""}
      </summary>

      <div className="absolute left-0 z-10 mt-2 w-48 rounded border bg-white p-2 shadow">
        <div className="space-y-1">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2 capitalize"
            >
              <input
                type="checkbox"
                checked={value.includes(opt)}
                onChange={() => toggle(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        <button
          type="button"
          className="mt-2 text-xs underline"
          onClick={() => onChange([])}
          disabled={value.length === 0}
        >
          Reset
        </button>
      </div>
    </details>
  );
}

function ViewButton({
  columnVisibility,
  toggleColumn,
}: {
  columnVisibility: VisibilityState;
  toggleColumn: (colId: string) => void;
}) {
  return (
    <details className="relative">
      <summary className="cursor-pointer select-none rounded border px-3 py-2 text-sm">
        View
      </summary>

      <div className="absolute left-0 z-10 mt-2 w-56 rounded border bg-white p-2 shadow">
        {(["email", "phone"] as const).map((col) => (
          <label
            key={col}
            className="flex cursor-pointer items-center gap-2 capitalize"
          >
            <input
              type="checkbox"
              checked={Boolean(columnVisibility[col])}
              onChange={() => toggleColumn(col)}
            />
            <span>{col === "phone" ? "Phone Number" : "Email"}</span>
          </label>
        ))}
      </div>
    </details>
  );
}

/** ======================
 * Main component
 * ====================== */
export default function UserListTableDemo() {
  // Search input (fast), table uses debounced+deferred (non-blocking)
  const [searchInput, setSearchInput] = React.useState("");
  const debouncedSearch = useDebouncedValue(searchInput, 250);
  const deferredSearch = React.useDeferredValue(debouncedSearch);

  // Multi-select filters
  const [statusFilter, setStatusFilter] = React.useState<UserStatus[]>([]);
  const [roleFilter, setRoleFilter] = React.useState<UserRole[]>([]);

  // Column visibility (View menu)
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      email: true,
      phone: true,
    });

  const toggleColumn = React.useCallback((colId: string) => {
    setColumnVisibility((prev) => ({ ...prev, [colId]: !prev[colId] }));
  }, []);

  // Memoize filters so they don't recreate on every render
  const columnFilters = React.useMemo(
    () => [
      { id: "status", value: statusFilter },
      { id: "role", value: roleFilter },
    ],
    [statusFilter, roleFilter],
  );

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "username", header: "Username" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Phone Number" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => (
          <span className="inline-flex rounded-full border px-2 py-0.5 text-xs capitalize">
            {String(getValue())}
          </span>
        ),
        filterFn: (row, id, value: UserStatus[]) =>
          value.length === 0 || value.includes(row.getValue(id)),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ getValue }) => (
          <span className="inline-flex rounded-full border px-2 py-0.5 text-xs capitalize">
            {String(getValue())}
          </span>
        ),
        filterFn: (row, id, value: UserRole[]) =>
          value.length === 0 || value.includes(row.getValue(id)),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: USERS,
    columns,
    state: {
      globalFilter: deferredSearch,
      columnFilters,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: fuzzyGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const totalRows = table.getFilteredRowModel().rows.length;

  return (
    <div className="w-full space-y-3">
      {/* Top controls - responsive */}
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search (fuzzy): username, name, email..."
          className="w-full rounded border px-3 py-2 text-sm sm:w-80"
        />

        <div className="flex flex-wrap gap-2">
          <FilterButton<UserStatus>
            label="Status"
            options={["active", "inactive", "pending"]}
            value={statusFilter}
            onChange={setStatusFilter}
          />

          <FilterButton<UserRole>
            label="Role"
            options={["admin", "editor", "viewer"]}
            value={roleFilter}
            onChange={setRoleFilter}
          />

          <ViewButton
            columnVisibility={columnVisibility}
            toggleColumn={toggleColumn}
          />
        </div>

        <div className="text-xs text-gray-600 sm:ml-auto">
          Showing <span className="font-medium">{totalRows}</span> result(s)
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border">
        <table className="min-w-190 w-full text-sm">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-3 py-2 text-left font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  className="px-3 py-6 text-center text-gray-500"
                  colSpan={columns.length}
                >
                  No results.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3 py-2 align-middle">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination bar */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm">Rows per page</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="rounded border px-2 py-1 text-sm"
          >
            {[5, 10, 20, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="rounded border px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            type="button"
            className="rounded border px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>

          <span className="text-sm">
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} /{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <button
            type="button"
            className="rounded border px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            type="button"
            className="rounded border px-2 py-1 text-sm disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
