/**
 * 
 * @author natali
 * @name gSongs
 */
function gSongs() {
var self=this;
function refresh(some){
    Logger.info('here');
    Logger.info(some);
    self.model.qSearchSongs.requery();
}
function editWin(){
    var artst = new gEditSong();
    artst.song_ID = self.model.qSearchSongs.List_of_Songs_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.model.qSearchSongs.insert();
    self.model.save();
    Logger.info(self.model.qSearchSongs.List_of_Songs_ID);
    var artst = new gAddSong();    
    artst.song_ID = self.model.qSearchSongs.List_of_Songs_ID;
    artst.showModal(refresh);
}
function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
  var srv = new ServerModule("testServ"); 
   if(srv.getName() === "admin"){
        if (confirm('Действительно удалить?')) {
    qSearchSongs.deleteRow();
}
    }else{
                alert("Нет доступа");
            }
	
}//GEN-LAST:event_deleteActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        try {
            addWin();
        } catch (ex){
            alert("Нет доступа") 
        }
}//GEN-LAST:event_addActionPerformed

function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        logout();
}//GEN-LAST:event_closeWinActionPerformed

function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        self.model.params.Param1="%" + self.textField.text + "%";
        self.model.qSearchSongs.requery();
               
}//GEN-LAST:event_searchActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        try{
            if (evt.clickCount>1){
            editWin();
        }
    } catch (ex){
            alert("Нет доступа") 
        }
    
}//GEN-LAST:event_modelGridMouseClicked

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.model.params.Param1 = "%%";
        self.model.qSearchSongs.requery();
       
}//GEN-LAST:event_formWindowOpened
}