"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type ElectricBill = {
  accountNumber: string;
  customerName: string;
  billingPeriod: string;
  meterId: string;
  usageKwh: number;
  peakKwh: number;
  offPeakKwh: number;
  ratePerKwh: number;
  supplyCharge: number;
  subtotal: number;
  gst: number;
  total: number;
  paid: boolean;
};

type BasicTableProps = {
  data: ElectricBill[];
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(value);

function getColumns(data: ElectricBill[]): ColumnDef<ElectricBill>[] {
  const totalUsage = data.reduce((sum, row) => sum + row.usageKwh, 0);
  const totalPeak = data.reduce((sum, row) => sum + row.peakKwh, 0);
  const totalOffPeak = data.reduce((sum, row) => sum + row.offPeakKwh, 0);
  const totalSubtotal = data.reduce((sum, row) => sum + row.subtotal, 0);
  const totalGst = data.reduce((sum, row) => sum + row.gst, 0);
  const grandTotal = data.reduce((sum, row) => sum + row.total, 0);

  return [
    {
      accessorKey: "accountNumber",
      header: "Account No.",
      footer: () => <span className="font-bold">Totals</span>,
    },
    {
      accessorKey: "customerName",
      header: "Customer",
      footer: () => null,
    },
    {
      accessorKey: "billingPeriod",
      header: "Billing Period",
      footer: () => null,
    },
    {
      accessorKey: "meterId",
      header: "Meter ID",
      footer: () => null,
    },
    {
      accessorKey: "usageKwh",
      header: "Usage (kWh)",
      cell: ({ row }) => row.original.usageKwh.toLocaleString(),
      footer: () => (
        <span className="font-bold">{totalUsage.toLocaleString()}</span>
      ),
    },
    {
      accessorKey: "peakKwh",
      header: "Peak (kWh)",
      cell: ({ row }) => row.original.peakKwh.toLocaleString(),
      footer: () => (
        <span className="font-bold">{totalPeak.toLocaleString()}</span>
      ),
    },
    {
      accessorKey: "offPeakKwh",
      header: "Off-Peak (kWh)",
      cell: ({ row }) => row.original.offPeakKwh.toLocaleString(),
      footer: () => (
        <span className="font-bold">{totalOffPeak.toLocaleString()}</span>
      ),
    },
    {
      accessorKey: "ratePerKwh",
      header: "Rate / kWh",
      cell: ({ row }) => formatCurrency(row.original.ratePerKwh),
      footer: () => null,
    },
    {
      accessorKey: "supplyCharge",
      header: "Supply Charge",
      cell: ({ row }) => formatCurrency(row.original.supplyCharge),
      footer: () => null,
    },
    {
      accessorKey: "subtotal",
      header: "Subtotal",
      cell: ({ row }) => formatCurrency(row.original.subtotal),
      footer: () => (
        <span className="font-bold">{formatCurrency(totalSubtotal)}</span>
      ),
    },
    {
      accessorKey: "gst",
      header: "GST",
      cell: ({ row }) => formatCurrency(row.original.gst),
      footer: () => (
        <span className="font-bold">{formatCurrency(totalGst)}</span>
      ),
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <span className="font-medium">
          {formatCurrency(row.original.total)}
        </span>
      ),
      footer: () => (
        <span className="font-bold">{formatCurrency(grandTotal)}</span>
      ),
    },
    {
      accessorKey: "paid",
      header: "Status",
      cell: ({ row }) => (row.original.paid ? "Paid" : "Unpaid"),
      footer: () => null,
    },
  ];
}

export default function BasicTable({ data }: BasicTableProps) {
  const columns = getColumns(data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer className="my-4">
      <Table>
        <TableCaption className="text-left">
          Electricity bills summary for the selected period. Totals include GST
          (10%).
        </TableCaption>

        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          {table.getFooterGroups().map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
