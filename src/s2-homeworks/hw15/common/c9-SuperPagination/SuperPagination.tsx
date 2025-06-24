import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        onChange(page, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        fontFamily: 'Roboto, sans-serif',
                        minWidth: 24,
                        height: 24,
                        fontSize: '14px',
                        borderRadius: '2px',
                        color: 'black',
                        '&.Mui-selected': {
                            backgroundColor: '#0066CC',
                            color: 'white',
                            fontWeight: 'bold',
                        },
                    },
                }}
            />


            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                style={{fontFamily: 'Roboto, sans-serif', width:'40px', height:'24px', borderWidth: '2px', border: '1px solid #ECEBEB'}}
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
