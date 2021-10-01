export function merge(firstObject, secondObject) {
    if (typeof firstObject !== 'object' && typeof secondObject === 'object') {
        return { ...secondObject }
    }

    if (typeof secondObject !== 'object') {
        return secondObject
    }


    let first = { ...firstObject }
    let second = { ...secondObject }

    Object.entries(second).map(secondEntry => {
        let [attr, val] = secondEntry
        if (first.hasOwnProperty(attr)) {
            console.log(`first has attr: ${attr}`)
            first[attr] = merge(first[attr], val)
        } else {
            console.log(`first does not have attr: ${attr}`)
            first[attr] = val
        }
    })

    return first

}