import React, {useContext}  from "react"
import { Redirect, Route } from "react-router-dom"
import {MyContext} from "../context"

export default ({ component: Component, ...rest}) => {
    const {user} = useContext(MyContext)
return <Route
    {...rest}
    render={props =>
    user ? (
        <Component {...props} />
    ) :(
        <Redirect
        to={{
            pathname:"/login",
            state: { from: props.location}
        }}/>
        )}/>
    }