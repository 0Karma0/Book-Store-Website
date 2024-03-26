export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem('savedList')) || [];

    const existedData = savedData.find(item => item.id == data.id);
    if (!existedData) {
    savedData.push(data);
    localStorage.setItem('savedList', JSON.stringify(savedData));
    alert('Added  to Saved List!'); 
    }
    else{
        alert("This product has already been added to the list!");
    }
};

export const getFromLOcalStorage = () => {
    const data = JSON.parse(localStorage.getItem('savedList')) || [];
    return data
}