/**
 * 
 * @author natali
 * @name gMembers
 */
function gMembers(){
var self=this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.model.qSearchMembers.requery();
}
function editWin(){
    var artst = new gEditMember();
    artst.mID = self.model.qSearchMembers.Members_of_group_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.qSearchMembers.insert();
    self.model.save();
    Logger.info(self.model.qSearchMembers.Members_of_group_ID);
    var artst = new gAddMember();    
    artst.mID = self.model.qSearchMembers.Members_of_group_ID;
    artst.showModal(refresh);
}
function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed
//
function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        self.model.params.Param1="%" + self.textField.text + "%";
        self.model.qSearchMembers.requery();
       
}//GEN-LAST:event_searchActionPerformed
//
function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
         logout();
}//GEN-LAST:event_closeWinActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        try{
            addWin();
        }
         catch (ex){
            alert("Нет доступа") 
        }
}//GEN-LAST:event_addActionPerformed
//
function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
     var srv = new ServerModule("testServ"); 
   if(srv.getName() === "admin"){
        if (confirm('Действительно удалить?')) {
    qSearchMembers.deleteRow();
}
    }else{
                alert("Нет доступа");
            }
	
    
}//GEN-LAST:event_deleteActionPerformed
//
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        try {
            if (evt.clickCount>1){
            editWin();
            }
        }
         catch (ex){
            alert("Нет доступа") 
        }
}//GEN-LAST:event_modelGridMouseClicked

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.model.params.Param1 = "%%";
        self.model.qSearchMembers.requery();
        
}//GEN-LAST:event_formWindowOpened
}