import { Meta, StoryObj } from "@storybook/react";
import { DataTable } from ".";
import { ColumnDef, TableOptions } from "@tanstack/react-table"

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

type DataType = {
  id: string,
  name: string,
  unity: string
}

const data: DataType[] = [
  {
    id: '1',
    name: 'Caio',
    unity: 'ASTIN'
  },
  {
    id: '2',
    name: 'Hans',
    unity: 'GEVIF'
  }
]

const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "unity",
    header: "Unidade",
  },
]

export const Template: Story = (args: { data: DataType[], columns: ColumnDef<DataType>[], children: React.ReactNode, rest: TableOptions<DataType>}) => <DataTable {...args} />;

Template.args = {
  data,
  columns,
};