import { m } from "framer-motion";
import { atom } from "recoil";

const defaultChartProjectState: chartEditorType= {
    project:{
        name: "",
        type: "chart",
        metadata: {
            bpm: 0,
            composer: "",
            license: "",
            thumbnail: {
                data: new ArrayBuffer(0),
                mime: "image/png"
            },
            time: 0,
            created: 0,
            saved: 0,
            defaultMusic:"",
            demo:{
                start:0,
                end:0,
            },
        },
        music: [],
        chart: [],
        id: ""
    },
    page:"overview",
    saved:true,
    statusbar:[]
}

const chartProjectState = atom<chartEditorType>({
    key: "chartEditorState",
    default: defaultChartProjectState
})

export { defaultChartProjectState, chartProjectState }