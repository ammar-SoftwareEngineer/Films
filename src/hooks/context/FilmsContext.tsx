import React, { createContext, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import getFilms from "@redux/slices/film/getFilms";
import getDetails from "@redux/slices/details/getDetails";
import getUsers from '@redux/slices/users/getUsers';

// interface Details
interface Details {
    id: number;
    url: string;
    thumbnailUrl: string;

}
// interface Users
interface Users{
    id: number;
    name: string;
    username: string;
}

// interface Films
interface Films {
    userId:number
    id: number;
    title: string;
    body: string;
    details: Details[]
    users: Users[]
}

//interface DataContext Type
interface DataContextType {
    filteredData: Films[];
    loadingFilm: string,
    loadingDetails: string,
    error: string | null
}
const DataContext = createContext<DataContextType>({
    filteredData: [],
    loadingFilm: "idle",
    loadingDetails: "idle",
    error: null
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatchFilms = useAppDispatch();
    const dispatchDetails = useAppDispatch();
    const dispatchUsers = useAppDispatch();
    const films = useAppSelector((state) => state.films)
    const details = useAppSelector((state) => state.details)
    const users=useAppSelector((state) => state.users)
    useEffect(() => {
        dispatchFilms(getFilms())
        dispatchDetails(getDetails())
        dispatchUsers(getUsers())
    }, [dispatchFilms, dispatchDetails,dispatchUsers])

    const filteredData = useMemo(() => films.records.map((film) => {
            const filmsDetails = details.records.filter(detail => detail.id == film.id);
            const usersFilm=users.records.filter(user => user.id == film.userId)
            return {
                ...film,
                details: filmsDetails,
                users: usersFilm
            };
        }),
        [films.records, details.records,users.records]
    )
    
    // Loading Data
    const loadingFilms = films.loading
    const loadingDetails = details.loading

    // Error Data
    const errorFilms = films.error
    const errorDetails = details.error

    // DataContext provider
    return (
        <DataContext.Provider value={{ filteredData, loadingFilm: loadingFilms, loadingDetails: loadingDetails, error: errorFilms || errorDetails }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataProvider, DataContext };