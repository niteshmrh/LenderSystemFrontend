import React, { createContext, useState, useEffect } from "react";
export const JWTContext = createContext();

function JWTStroage(props){
    const { JWTdata, setJWTData } = useContext(JWTContext);
}