'use client';

import getUnreadMessageCount from "@/app/actions/getUnreadMessageCount";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

// Create Provider
export function GlobalProvider({ children }) {
    const [unreadCount, setUnreadCount] = useState(0);

    const { data: session } = useSession();

    useEffect(() => {
        if (session && session.user) {
            getUnreadMessageCount().then((res) => {
                if (res.count) setUnreadCount(res.count);
            })
        }
    }, [getUnreadMessageCount, session])

    return (
        <GlobalContext.Provider value={{
            unreadCount,
            setUnreadCount
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(GlobalContext)
}