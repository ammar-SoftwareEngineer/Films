// React Hooks
import { useContext } from "react"
import { DataContext } from "@hooks/context/FilmsContext"
import { useParams } from "react-router-dom";

// Moment Date & Time
import moment from "moment";

// Spinner
import { Watch } from 'react-loader-spinner'
function FilmDetails() {
  const { filteredData, loadingDetails } = useContext(DataContext)
  const { id } = useParams()
  const date = moment().subtract(10, 'days').calendar();

  const dataCards = filteredData.filter((f) => String(f.id) === id).map((f) => {
    const url = f.details.map((d) => d.url)
    return (
      <div key={f.id} className="grid grid-row-1  mx-auto lg:w-4/6">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-7 backdrop-blur-sm bg-white/15 md:py-6 md:px-6  px-2 py-4 rounded-lg text-white ">
        
          <div className="image col-span-3 lg:col-span-4 md:mx-0 mx-3 lg:mx-0 ">
          <img className=" w-full rounded-lg " src={String(url)} alt={`Movie ${f.id}`} />
          </div>
         
          <div className="lg:col-span-8 col-span-3 ">
          <div className="content p-3 ">
            <div className="title mb-4">
              <h1 className=" font-medium capitalize mb-1">Title Film:</h1>
              <h2 className=" font-bold capitalize w-full ">{f.title}</h2>
            </div>
            <div className="description mb-4">
              <h3 className=" font-medium capitalize mb-1">Description:</h3>
              <p className="" style={{ lineHeight: "1.5" }}>{f.body}</p>
            </div>
            <div className="cast mb-4">
              <h3 className=" font-medium capitalize mb-1">Cast:</h3>
              <p className="lg:w-2/3" style={{ lineHeight: "1.5" }}>{f.users.map(u=>u.name)}</p>
            </div>
            <div className="date flex gap-2">
              <h3 className=" font-medium capitalize mb-1">Release Date:</h3>
              <p style={{ lineHeight: "1.5" }}>{date}</p>
            </div>

          </div>
        </div>
        </div>
       
      </div>
    )
  })

  if (loadingDetails == "loading") {
    return (
        <div className="flex justify-center items-center w-full h-screen fixed top-0 right-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.589)" }}>
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
        </div>
    )
} else {
  return (
    <div className="py-4">
      {dataCards}
    </div>
  )
}
}

export default FilmDetails
