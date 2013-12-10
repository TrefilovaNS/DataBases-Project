/**
 * 
 * @author natali
 * @name gSongList
 */
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.songsSearch.requery();
}
function editArtist(){
    var artst = new gSongs();
    artst.songID = self.songsSearch.S_ID;
    artst.showModal(refresh);
}
function addArtist(){
    self.songsSearch.insert();
    self.model.save();
    Logger.info("hello");
    Logger.info(self.songsSearch.S_ID);
    var artst = new gAddSong();
    
    artst.songID = self.songsSearch.S_ID;
    
    artst.showModal(refresh);
}
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editArtist();
        }
}//GEN-LAST:event_modelGridMouseClicked

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_button1ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        self.songsSearch.requery();
        self.songsSearch.last();
       
}//GEN-LAST:event_buttonActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        addArtist();
}//GEN-LAST:event_button2ActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
if (confirm('Действительно удалить?', title)) {
songsSearch.deleteRow();
}
	
}//GEN-LAST:event_button3ActionPerformed
