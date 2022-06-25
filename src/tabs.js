const keys = {
    left: 37,
    right: 39
}

export const tabClickHandler = (tab, refs) => {
    for (let ref in refs) {
        if ( ref === tab ) {
            refs[ref].tab.current.setAttribute("aria-selected", true)
            refs[ref].tab.current.setAttribute("tabIndex", 0)
            refs[ref].panel.current.removeAttribute("hidden")
            continue
        }

        refs[ref].tab.current.setAttribute("aria-selected", false)
        refs[ref].tab.current.setAttribute("tabIndex", -1)
        refs[ref].panel.current.setAttribute("hidden", true)
    }
}

export const tabPressHandler = (e, tab, refs) => {
    let pressed = e.keyCode

    if ( keys.left !== pressed && keys.right !== pressed ) {
        return
    }

    refs[tab].tab.current.setAttribute("tabIndex", -1)

    const refsArray = Object.keys(refs)
    let pos = refsArray.indexOf(tab)

    if ( keys.left === e.keyCode ) {
        pos -= 1
    }

    if ( keys.right === e.keyCode ) {
        pos += 1
    }

    if ( pos < 0 ) {
        pos = refsArray.length - 1
    }

    if ( pos >= refsArray.length ) {
        pos = 0
    }

    refs[refsArray[pos]].tab.current.setAttribute("tabindex", 0)
    refs[refsArray[pos]].tab.current.focus()
}