function observableRTC(ds, datasets){

  ds.dataset(datasets)
  .watch("created", "updated", "deleted")
  .subscribe(messageObject => {
    console.log("Realtime message received:", messageObject.data);
  }, error => {
    console.log(error);
  });
}

module.exports = {
  observableRTC: observableRTC
}