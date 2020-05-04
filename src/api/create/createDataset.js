function createDataset(ds, datasets, data){
    
    const set = ds.dataset(datasets);
    const insertQuery = set.insert(data);  
    insertQuery.subscribe(records => { 
        console.log("Record Insert: ", records);
        }, 
        error => { 
        console.log(error);
    });
}

module.exports = {
    createDataset: createDataset 
}