/**
 * 
 * @author natali
 * @name Add
 */

function textField122ActionPerformed(evt) {//GEN-FIRST:event_textField122ActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textField122ActionPerformed

function ДобавитьActionPerformed(evt) {//GEN-FIRST:event_ДобавитьActionPerformed
	if (model.modified) {
    var message = validate();
    if (!message) {
model.save(function() {
close(owner.OWNERS_ID);
});
} else {
alert(message, title);
}
}

}//GEN-LAST:event_ДобавитьActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	close();
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	if (model.modified) {
    var message = validate();
    if (!message) {
model.save(function() {
close(owner.OWNERS_ID);
});
} else {
alert(message, title);
}
}
}//GEN-LAST:event_button2ActionPerformed

function button11ActionPerformed(evt) {//GEN-FIRST:event_button11ActionPerformed
	close();
}//GEN-LAST:event_button11ActionPerformed

function button21ActionPerformed(evt) {//GEN-FIRST:event_button21ActionPerformed
		if (model.modified) {
    var message = validate();
    if (!message) {
model.save(function() {
close(owner.OWNERS_ID);
});
} else {
alert(message, title);
}
}
}//GEN-LAST:event_button21ActionPerformed

function button111ActionPerformed(evt) {//GEN-FIRST:event_button111ActionPerformed
	close();
}//GEN-LAST:event_button111ActionPerformed

function button22ActionPerformed(evt) {//GEN-FIRST:event_button22ActionPerformed
		if (model.modified) {
    var message = validate();
    if (!message) {
model.save(function() {
close(owner.OWNERS_ID);
});
} else {
alert(message, title);
}
}
}//GEN-LAST:event_button22ActionPerformed

function button112ActionPerformed(evt) {//GEN-FIRST:event_button112ActionPerformed
	close();
}//GEN-LAST:event_button112ActionPerformed
