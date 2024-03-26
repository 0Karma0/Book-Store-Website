import UseLocalStorage from "../Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";

const ListedBooks = () => {
    const { LocalData } = UseLocalStorage();
    console.log(LocalData);
    return (
        <div>
            {
                LocalData.map((data) => <ListCard key={data.id} data={data}></ListCard>)
            }
        </div>
    );
};

export default ListedBooks;