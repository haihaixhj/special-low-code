import { ELEMENT_TYPE } from "../types"

const INIT_PROPS_MAP: any = {
    [ELEMENT_TYPE.BASIC]: {
        'button': {
            size: 'default',
            type: 'primary',
            style: {
                width: '80px',
                height: '30px',
                border: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'input': {
            placeholder: '请输入',
            clearable: true,
            size: 'default',
            style: {
                width: '150px',
                height: '30px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'rate': {
            max: 5,
            style: {
                width: '150px',
                height: '50px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'checkbox': {
            modelValue:true,
            style: {
                width: '100px',
                height: '20px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'colorPicker': {
            modelValue:'#409EFF',
            style: {
                width: '50px',
                height: '20px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'datePicker': {
            modelValue:new Date(),
            style: {
                width: '150px',
                height: '20px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
        'switch': {
            modelValue:true,
            style: {
                width: '40px',
                height: '20px',
                border: '',
                borderRaduis: '',
                fontSize: '',
                fontWeight: '',
                lineHeight: '',
                position: 'absolute'
            }
        },
    },
    [ELEMENT_TYPE.LAYOUT]: {
        'card': {
            style:{
                width: '200px',
                height: '150px',
                position:'absolute',
            }
        },
        'row': {
            columnNum:1,
            style:{
                width: '100%',
                height: '75px',
                position:'absolute',
            }
        },
        'col':{
            span:24,
            style:{
                width: '50%',
                height: '100%',
            }
        }
    }

}


export default function useInitProps(type: string, element: string) {
    return INIT_PROPS_MAP[type]?.[element]
}