function deleteDataset(ds, datasets, id){
    
    const set = ds.dataset(datasets);
    const deleteQuery = set
    .delete()
    .where(field => field("id").isEqualTo(id));  

    deleteQuery.subscribe(records => { 
        console.log("Delete Records: ", records);
        }, 
        error => { 
            console.log("Error: ", error);
    });
}

module.exports = {
    deleteDataset: deleteDataset 
}