import { InstrumentTagData } from "../../../Models/InstrumentTagData"
import { TableRow } from "../../JIP33Table/RowData/TableRow"

export const operatingConditionsMaximumFlowRowData = (datasheet: InstrumentTagData): TableRow[] => {
    return [
        {
            refClause: "",
            description: "Flow rate",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumFlowRate,
            purchaserReqUOM: "kg/h",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Velocity",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumOperatingVelocity,
            purchaserReqUOM: "m/s",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "Note 3",
            property: "",
        },
        {
            refClause: "",
            description: "Temperature",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumOperatingTemperature,
            purchaserReqUOM: "°C",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "Note 1",
            property: "",
        },
        {
            refClause: "",
            description: "Inlet Pressure",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumInletPressure,
            purchaserReqUOM: "bara",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Density at T and P",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumDensityAtTAndP,
            purchaserReqUOM: "kg/m3",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "Note 1",
            property: "",
        },
        {
            refClause: "",
            description: "Viscosity at T",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumViscosityAtT,
            purchaserReqUOM: "cP",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "Note 1",
            property: "",
        },
        {
            refClause: "",
            description: "Vapour molecular weight",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumOperatingVapourMolecularWeight,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Vapour compress. factor",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumVapourCompressFactor,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
        {
            refClause: "",
            description: "Vapour specific heat ratio",
            purchaserReq: datasheet.instrumentPurchaserRequirement?.maximumVapourSpecificHeatRatio,
            purchaserReqUOM: "",
            supplierOfferedVal: "",
            supplierOfferedValUOM: "",
            additionalNotes: "",
            property: "",
        },
    ]
}
