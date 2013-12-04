/**
 * 
 * @author natalia
 * @name gArtList
 */
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.singers.requery();
}
function editArtist(){
    var artst = new gArtist();
    artst.artID = self.singers.S_ID;
    artst.showModal(refresh);
}

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editArtist();
        }
}//GEN-LAST:event_modelGridMouseClicked
