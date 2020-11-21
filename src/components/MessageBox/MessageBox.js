import React from 'react'
import {Alert} from './style'
export default function MessageBox(props) {
    return (
        <Alert>
            {props.children}
        </Alert>
    )
}
