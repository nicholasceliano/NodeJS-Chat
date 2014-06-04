var chat = {

	addText: function(){
		var txtIn = $('#txtChatInput').val();
		
		$('#chatArea').append('<br />' + txtIn);
		
		chat.scrollToBottom($('#chatArea'));
	},
	scrollToBottom: function(element){
		element.scrollTop(element[0].scrollHeight);
	}
};