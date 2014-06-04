/**
 * 
 * @author natali
 * @name gTour
 */
function gTour() {
    var self = this;
    
    // TODO : place your code here
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.model.qNewSearchTour.requery();
}
function editWin(){
    var artst = new gEditTour();
    artst.shID = self.model.qNewSearchTour.SCHEDULE_OF_TOUR_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.model.qNewSearchTour.insert();
    self.model.save();
    Logger.info(self.model.qNewSearchTour.SCHEDULE_OF_TOUR_ID);
    var artst = new gAddTour();    
    artst.shedID = self.model.qNewSearchTour.SCHEDULE_OF_TOUR_ID;
    artst.showModal(refresh);
}

    function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
    }//GEN-LAST:event_textFieldActionPerformed

    function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        try{
            addWin();
        }catch(ex){
            alert("Нет доступа");
        }
    }//GEN-LAST:event_addActionPerformed

    function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
   var srv = new ServerModule("testServ"); 
   if(srv.getName() === "admin"){
        if (confirm('Действительно удалить?')) {
    qNewSearchTour.deleteRow();
}
    }else{
                alert("Нет доступа");
            }

	
    }//GEN-LAST:event_deleteActionPerformed

    function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        self.model.params.Param1="%" + self.textField.text + "%";
        self.model.qNewSearchTour.requery();
               
    }//GEN-LAST:event_searchActionPerformed
function formWindowOpened(evt) {                                  
	// TODO Добавьте свой код:
        self.model.Param1 = "%%";
        self.model.qNewSearchTour.requery();
}     
    function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        logout();
    }//GEN-LAST:event_closeWinActionPerformed
}
