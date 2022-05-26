import { Button, Input, message } from 'antd'
import React, { useState } from 'react'
import classes from "../Commands.module.scss"
import useInvite from "../../../module/auth/hooks/useInvite"
const InvitedPeople = () => {
    const { mutate } = useInvite()
    const [email, setEmail] = useState()
    return (
        <>
            <div className={classes.wrapper}>
                <Input.Group compact>
                    <Input onChange={(e) => setEmail(e.target.value)} style={{ width: "calc(100% - 100px)" }} placeholder="Enter email" type="email" />
                    <Button onClick={() => {
                        if (email) {
                            return mutate({ email })
                        } else {
                            message.error("Field must not be empty!")
                        }
                    }} style={{ width: "100px" }} type="primary">Invite</Button>
                </Input.Group>
            </div>
        </>
    )
}

export default InvitedPeople