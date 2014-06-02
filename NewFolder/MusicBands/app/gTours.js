/**
 * 
 * @author natali
 * @name gTours
 */
function gTours(){
var self=this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.qSearchTour.requery();
}
function editWin(){
    var artst = new gEditTour();
    artst.shID = self.qSearchTour.SCHEDULE_OF_TOUR_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.qSearchTour.insert();
    self.model.save();
    Logger.info(self.qSearchTour.SCHEDULE_OF_TOUR_ID);
    var artst = new gAddTour();    
    artst.shedID = self.qSearchTour.SCHEDULE_OF_TOUR_ID;
    artst.showModal(refresh);
}
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editWin();
        }
}//GEN-LAST:event_modelGridMouseClicked

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
//        Param1="%" + textField.text + "%";
//        self.qSearchTour.requery();
               
}//GEN-LAST:event_searchActionPerformed

function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_closeWinActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
//        addWin();
}//GEN-LAST:event_addActionPerformed

function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
//    if (confirm('Действительно удалить?', title)) {
//    qSearchTour.deleteRow();
//}
	
}//GEN-LAST:event_deleteActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.model.Param1 = "%%"
        self.model.qSearchTour.requery();
}//GEN-LAST:event_formWindowOpened
}