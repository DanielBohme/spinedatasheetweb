import { ColDef, SideBarDef } from "@ag-grid-community/core"
import { AgGridReact } from "@ag-grid-community/react"
import useStyles from "@equinor/fusion-react-ag-grid-styles"
import React, {
    useCallback, useMemo, useRef, useState,
} from "react"
import { Button, Divider, Icon } from "@equinor/eds-core-react"
import { add, view_column } from "@equinor/eds-icons"
import { styled } from "styled-components"
import TextInput from "@equinor/fusion-react-textinput"
import { InstrumentTagData } from "../../Models/InstrumentTagData"
import { comparisonGeneralColumnDefs } from "./ColumnDefs/GeneralColumnDefs"
import { comparisonTR3111ColumnDefs } from "./ColumnDefs/TR3111ColumnDefs"
import { comparisonTagsColumnDefs } from "./ColumnDefs/TagsColumnDefs."
import { comparisonEquipmentConditionsColumnDefs } from "./ColumnDefs/EquipmentConditionColumnDefs"
import CustomFilterToolPanel from "./CustomFilterToolPanel"
import { comparisonOperatingConditionsColumnDefs } from "./ColumnDefs/OperatingConditionsColumnDefs"
// import { comparisonOperatingConditionsColumnDefs } from "./ColumnDefs/OperatingConditionsColumnDefs"

const TableContainer = styled.div`
    flex: 1 1 auto;
    width: 100%; 
    height: calc(100vh - 310px);
`

const FilterBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-right: 1rem;
    margin-top: 1rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 100;
`

interface Props {
    tags: InstrumentTagData[]
}

function TagComparisonTable({ tags }: Props) {
    const styles = useStyles()
    const gridRef = useRef<AgGridReact>(null)
    const [columnSideBarIsOpen, setColumnSideBarIsOpen] = useState<boolean>(false)
    const toggleColumnSideBar = () => setColumnSideBarIsOpen(!columnSideBarIsOpen)

    const [sheetWidth, setSheetWidth] = useState(0)
    const [open, setOpen] = useState(true)

    const onCloseReviewSideSheet = useCallback(() => {
        setOpen(false)
        setSheetWidth(0)
    }, [setOpen])

    const onOpenReviewSideSheet = useCallback((activatedTab: React.SetStateAction<number>) => {
        setOpen(true)
        setSheetWidth(620)
    }, [setOpen])

    const defaultColDef = useMemo<ColDef>(
        () => ({
            sortable: true,
            filter: "agMultiColumnFilter",
            resizable: true,
            editable: false,
            cellDataType: false,
        }),
        [],
    )

    const newColumns = [...comparisonTagsColumnDefs(),
        ...comparisonTR3111ColumnDefs(),
        ...comparisonGeneralColumnDefs(),
        ...comparisonEquipmentConditionsColumnDefs(),
        ...comparisonOperatingConditionsColumnDefs(),
    ]

    const tagRows = tags.map((tag) => ({ ...tag.instrumentPurchaserRequirement, ...tag, tagNumber: tag.tagNo }))

    const columnSideBar = useMemo<
        SideBarDef | string | string[] | boolean | null
    >(() => ({
        toolPanels: [
            {
                id: "columns",
                labelDefault: "Columns",
                labelKey: "columns",
                iconKey: "columns",
                toolPanel: "agColumnsToolPanel",
                toolPanelParams: {
                    suppressRowGroups: true,
                    suppressValues: true,
                    suppressPivots: true,
                    suppressPivotMode: true,
                    suppressColumnSelectAll: true,
                    suppressColumnExpandAll: true,
                },
            },
            {
                id: "filters",
                labelDefault: "Column Filters",
                labelKey: "filters",
                iconKey: "filter",
                toolPanel: "agFiltersToolPanel",
            },
            {
                id: "customFilters",
                labelDefault: "Custom Filters",
                labelKey: "customFilters",
                iconKey: "filter",
                toolPanel: CustomFilterToolPanel,
                width: 500,
            },
        ],
        defaultToolPanel: "columns",
    }), [])

    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current?.api.setQuickFilter(
            (document.getElementById("filter-text-box") as HTMLInputElement).value,
        )
    }, [])

    const toggleSideBar = () => {
        if (columnSideBarIsOpen) {
            console.log(gridRef)
            return columnSideBar
        }
        return undefined
    }

    return (
        <>
            <FilterBar style={{ gap: 10 }}>
                <TextInput
                    icon="search"
                    size={30}
                    dense
                    type="text"
                    id="filter-text-box"
                    placeholder="Search all properties"
                    onInput={onFilterTextBoxChanged}
                />
                <Button
                    variant={columnSideBarIsOpen ? "contained" : "outlined"}
                    onClick={toggleColumnSideBar}
                >
                    <Icon data={view_column} color={columnSideBarIsOpen ? "white" : "#007079"} />
                    Columns
                </Button>
            </FilterBar>
            <Divider />
            <div className={styles.root}>
                <TableContainer
                    className="ag-theme-alpine-fusion"
                >
                    <AgGridReact
                        ref={gridRef}
                        rowData={tagRows}
                        columnDefs={newColumns}
                        defaultColDef={defaultColDef}
                        animateRows
                        domLayout="normal"
                        enableCellChangeFlash
                        rowSelection="multiple"
                        suppressMovableColumns
                        headerHeight={48}
                        rowHeight={35}
                        enableRangeSelection
                        sideBar={toggleSideBar()}
                    />
                </TableContainer>
            </div>
        </>
    )
}

export default TagComparisonTable
