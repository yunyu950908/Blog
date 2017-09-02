import React from "react"

export const Utils = {
    // JSON 拷贝
    JSONCopy(obj) {
        return JSON.parse(JSON.stringify(obj))
    }
};