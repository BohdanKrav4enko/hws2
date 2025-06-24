import React from 'react'
import NorthIcon from '@mui/icons-material/North';
import ImportExportIcon from '@mui/icons-material/ImportExport'
import SouthIcon from '@mui/icons-material/South';

const downIcon = NorthIcon
const upIcon = SouthIcon
const noneIcon = ImportExportIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string): string => {
    return sort === '' ? down : sort === down ? up : sort === up ? '' : down
}


const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const Icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
            <Icon />
        </span>
    )
}

export default SuperSort
