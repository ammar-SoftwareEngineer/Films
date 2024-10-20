// React Hooks
import { useContext, useEffect, useState } from "react"
import { DataContext } from "@hooks/context/FilmsContext"
// React Router Dom
import { Link } from "react-router-dom"
// Spinner
import { Watch } from 'react-loader-spinner'
// Material 
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
// Material Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// AOS Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

function FilmCard() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])
    const { filteredData, loadingFilm } = useContext(DataContext)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage: number = 10;
    const dataCards = filteredData.map((f) => {
        const url = f.details.map((d) => d.url)
        return <Link to={`/film/${f.id}`} >
            <div key={f.id} className="group rounded-lg shadow-md  relative overflow-hidden text-white" style={{ cursor: 'pointer' }} data-aos="fade-right">
                <img className=" w-full rounded-lg object-cover" src={String(url)} alt="" />
                <div className="content rounded-b-lg absolute w-full h-full inset-0 bg-gradient-to-b from-transparent via-transparent  to-black group-hover:from-black/60 group-hover:to-black/60 group-hover:via-black/50" >
                    <div className="absolute   p-4 inset-0   ">
                        <h2 className=" font-light capitalize lg:translate-y-52 lg:group-hover:translate-y-44 md:translate-y-44 md:group-hover:translate-y-32 transition-all translate-y-60 ">{f.title.split(" ").slice(0, 2).join(" ")}</h2>
                        <p className=" line-clamp-2 lg:translate-y-64 lg:group-hover:translate-y-44 md:translate-y-60 md:group-hover:translate-y-32 transition-all translate-y-60 " style={{ lineHeight: "1.5" }}>{f.body.split(" ").slice(0, 8).join(" ")}</p>

                    </div>

                </div>
            </div>
        </Link>
    })
    const totalPages = Math.ceil(dataCards.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = dataCards.slice(startIndex, startIndex + itemsPerPage);



    return (
        <>
            <div className="text-white py-8">
                {loadingFilm === "loading" ? <div className="flex justify-center items-center w-full h-screen fixed top-0 right-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.589)" }}>
                    <Watch
                        visible={true}
                        height="120"
                        width="120"
                        radius="48"
                        color="#903716"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div> :
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 " >
                        {paginatedData.map((item, index) => (
                            <div key={index} >{item}</div>
                        ))}
                    </div>
                }
                <div className="flex justify-center pt-10">
                    <Stack spacing={4} >
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            variant="outlined"
                            color="primary"
                            onChange={(_event, value) => setCurrentPage(value)}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
                                    {...item}
                                    sx={{ color: "white" }}
                                />
                            )}
                        />
                    </Stack>
                </div>
            </div>
        </>
    )


}

export default FilmCard
