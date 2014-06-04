/**
 * 
 * @author natali
 * @name gSingers
 */
function gSingers(){
var self= this;

function refresh(some){
    Logger.info(some);
    self.model.qNewSearchSingers.requery();
}
function editArtist(){
    var artst = new gEditSinger();
    artst.singID = self.model.qNewSearchSingers.S_ID;
    artst.showModal(refresh);
}
function addArtist(){
    self.model.qNewSearchSingers.insert();
    self.model.save();
    Logger.info(self.model.qNewSearchSingers.S_ID);
    var artst = new gAddSinger();    
    artst.singID = self.model.qNewSearchSingers.S_ID;
    artst.showModal(refresh);
}
//
function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	// TODO Добавьте свой код:
        self.model.Param1="%" + self.textField.text + "%";
        self.model.qNewSearchSingers.requery();
               
}//GEN-LAST:event_SearchActionPerformed
//
function CloseWinActionPerformed(evt) {//GEN-FIRST:event_CloseWinActionPerformed
	// TODO Добавьте свой код:
//        self.close("hello from close");
            logout();
}//GEN-LAST:event_CloseWinActionPerformed
//
function AddActionPerformed(evt) {//GEN-FIRST:event_AddActionPerformed
        try{
            addArtist();
            }
        catch (ex){
            alert("Нет доступа") 
        }
}//GEN-LAST:event_AddActionPerformed
//
function DeleteActionPerformed(evt) {//GEN-FIRST:event_DeleteActionPerformed
   var srv = new ServerModule("testServ"); 
   if(srv.getName() === "admin"){
        if (confirm('Действительно удалить?')) {
    qNewSearchSingers.deleteRow();
}
    }else{
                alert("Нет доступа");
            }
	
}//GEN-LAST:event_DeleteActionPerformed
//
function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        // TODO Добавьте свой код:
        self.model.params.Param1 = "%%";
        self.model.qNewSearchSingers.requery();
}//GEN-LAST:event_formWindowOpened

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
      
           if (evt.clickCount>1){
               try{
                editArtist();
            }catch (ex){
                alert("Нет доступа");
            }
            
             
}

}//GEN-LAST:event_modelGridMouseClicked
//
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        var age = new gAge();
        age.showModal();
}//GEN-LAST:event_buttonActionPerformed
}