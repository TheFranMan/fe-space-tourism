import React, { useState, useContext } from 'react'
import PAGES from "./pages"

const NavContext = React.createContext()
const NavUpdateContext = React.createContext()
const NavClickContext = React.createContext()
const PageContext = React.createContext(PAGES.HOME)

export function useNav() {
    return useContext(NavContext)
}

export function useNavUpdate() {
    return useContext(NavUpdateContext)
}

export function useNavClick() {
    return useContext(NavClickContext)
}

export function usePage() {
    return useContext(PageContext)
}

export function NavProvider({ children }) {
    const [page, updatePage] = useState(PAGES.HOME)
    const [isNavOpen, updateIsNavOpen] = useState(false)

    function handleNavClick(e, dest) {
        e.target.blur() // Neccessary to close the mobile nav menu as it's elements retain focus.
        updateIsNavOpen(false)
        updatePage(dest)
        window.scrollTo(0, 0);
    }

    return (
        <PageContext.Provider value={ page }>
            <NavContext.Provider value={ isNavOpen }>
                <NavUpdateContext.Provider value={ updateIsNavOpen }>
                    <NavClickContext.Provider value={ handleNavClick }>
                        { children }
                    </NavClickContext.Provider>
                </NavUpdateContext.Provider>
            </NavContext.Provider>
        </PageContext.Provider>
    )
}