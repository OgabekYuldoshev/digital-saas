import { DeleteOutlined } from '@ant-design/icons'
import { Tooltip, Typography } from 'antd'
import React from 'react'
import { useDelete } from '../../../module/note/hooks/useDelete'
import classes from "../RightBar.module.scss"

const CardNote = ({ item }) => {
    const { mutation } = useDelete()
    return (
        <div className={classes.card}>
            <Typography>
                {item.description}
            </Typography>
            <hr />
            <div className={classes.action}>
                <span>{item.createdAt}</span>
                <Tooltip placement="left" title="Delete!">
                    <DeleteOutlined onClick={() => mutation.mutate({ id: item.id })} className={classes.icon} />
                </Tooltip>
            </div>
        </div>
    )
}

export default CardNote