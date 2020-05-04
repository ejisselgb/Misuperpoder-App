function getDataset(ds, datasets){
    
    const set = ds.dataset(datasets);
    const selectQuery = set
    .select()
    //.where(field => field("verified").isEqualTo(true));

    selectQuery.subscribe(records => { 
        console.log("Read Records: ", records);
      }, 
      error => { 
        console.log("Error: ", error);
    });
}

module.exports = {
    getDataset: getDataset 
}