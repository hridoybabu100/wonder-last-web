import DestinationCard from "@/components/DestinationCard/DestinationCard";


const DestinationPage = async() => {

    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    // console.log("data Comming", data);
    
    return (
        <div className="my-10">

            <h1 className="text-4xl font-bold">Explore All Destinations</h1>
            <p>Find your perfect travel experience from our curated collection</p>
           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                destinations.map((data) => <DestinationCard key={data._id} data={data}></DestinationCard>)
            }
           </div>
        </div>
    );
};

export default DestinationPage;