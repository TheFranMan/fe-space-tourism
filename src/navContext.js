import React, { useState, useContext, useRef } from 'react'
import PAGES from "./pages"

const NavContext = React.createContext()
const NavUpdateContext = React.createContext()
const NavClickContext = React.createContext()
const PageContext = React.createContext(PAGES.HOME)
const HomeRefContext = React.createContext()

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

export function useHomeRef() {
    return useContext(HomeRefContext)
}

export function NavProvider({ children }) {
    const [page, updatePage] = useState(PAGES.HOME)
    const [isNavOpen, updateIsNavOpen] = useState(false)
    const homeRef = useRef(null)

    function handleNavClick(e, dest, ref) {
        document.title = getTitle(dest)

        // As React Router does not reset focus when clicking a link, we always change focus to the header logo.
        homeRef.current.focus()

        // Neccessary to close the mobile nav menu as it's elements retain focus.
        e.target.blur()

        updateIsNavOpen(false)
        updatePage(dest)
        window.scrollTo(0, 0);
    }

    return (
        <HomeRefContext.Provider value={ homeRef }>
            <PageContext.Provider value={ page }>
                <NavContext.Provider value={ isNavOpen }>
                    <NavUpdateContext.Provider value={ updateIsNavOpen }>
                        <NavClickContext.Provider value={ handleNavClick }>
                            { children }
                        </NavClickContext.Provider>
                    </NavUpdateContext.Provider>
                </NavContext.Provider>
            </PageContext.Provider>
        </HomeRefContext.Provider>
    )
}

function getTitle(dest) {
    return "Space Tourism | " + dest.charAt(0).toUpperCase() + dest.slice(1);
}