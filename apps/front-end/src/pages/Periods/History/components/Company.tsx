import { ColumnType, DataTable } from "@kosky/ui";

interface IData {
  id: string
  title: string
  date: string
  status: string
}

export function SpecialistPeriodsHistory() {
  const data: IData[] = [
    {
      id: '1',
      title: 'Período de qualificação Newton Paiva',
      date: '19/11',
      status: 'Encerrado'
    },
    {
      id: '2',
      title: 'Período de qualificação Newton Paiva 2',
      date: '21/11',
      status: 'Aberto para inscrições'
    },
  ]

  const columns: ColumnType<IData>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Título do período",
    },
    {
      accessorKey: "date",
      header: "Data do período",
    },
    {
      accessorKey: "status",
      header: "Situção",
    },

  ]
  return (
    <>
      <div className="max-w-[1000px] w-full">
        <DataTable
          data={data}
          columns={columns}
          title={'Histórico de Períodos'}>

        </DataTable>
      </div>
    </>
  )
}