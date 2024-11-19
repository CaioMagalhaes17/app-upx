import {
  ColumnDef,
  TableOptions,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TablePagination,
  TableRow,
} from "@/components/Table/shadcn-ui-table"
import { Text } from "@/atoms/Text"
import { Input } from "@/atoms/Input"

export type { ColumnDef }

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  title: string
  query?: string
  handleOnChangeQuery?: (value: string) => void
  children?: React.ReactNode
  needSearch?: boolean
  rest?: TableOptions<TData>
}

export function DataTable<TData, TValue>({
  data,
  columns,
  title,
  handleOnChangeQuery = () => { },
  query = '',
  children,
  needSearch,
  ...rest
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...rest
  })

  return (
    <div className="w-full">
      <Text as='h5' className="flex flex-row gap-5 font-semibold text-lg dark:text-white-light mb-5">
        <Text as='span'>{title}</Text>
      </Text>
      <div className="flex md:items-center justify-between md:!flex-row flex-col mb-5 gap-5">
        <div className="flex items-center flex-wrap">{children}</div>
        {
          needSearch && (
            <Input
              id="search2"
              type="text"
              className="!w-auto"
              placeholder="Procurar..."
              value={query}
              onChange={(event) => handleOnChangeQuery(event.target.value)}
            />
          )
        }
      </div>
      <div className="rounded-md border">
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
                  )
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
                  Nenhum resultado encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination />
    </div>
  )
}
