/**
 * 
 * @author natali
 * @name GUI
 */
var self = this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
      var windowAdd = new Add();
      windowAdd.showModal();
        
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_button1ActionPerformed

function button11ActionPerformed(evt) {//GEN-FIRST:event_button11ActionPerformed
	// TODO Добавьте свой код:
        model.save();
       
}//GEN-LAST:event_button11ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	  Param1="%" + textField.text + "%";
        test.requery();
        test.last();
}//GEN-LAST:event_button2ActionPerformed
