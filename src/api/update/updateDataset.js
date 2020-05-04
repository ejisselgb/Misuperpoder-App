function updateDataset(ds, datasets, data, id){

    const set = ds.dataset(datasets);
    const updateQuery  = set
    .update(data)
    .where(field => field("id").isEqualTo(id));  

    updateQuery.subscribe(records => { 
        console.log("Updata Records: ", records);
        }, 
        error => { 
            console.log("Error: ", error);
    });
}

module.exports = {
    updateDataset: updateDataset 
}