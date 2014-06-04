var userName;

var chat = {
	joinChat: function(){
		userName = $('#txtUsername').val();
		$('#joinChat').hide();
		$('#inChat').show();
	},
	leaveChat:function(){
		$('#txtUsername').val('');
		$('#joinChat').show();
		$('#inChat').hide();
	},
	addText: function(){
		var txtIn = $('#txtChatInput').val();
		
		$('#chatArea').append('<br />' + userName + ': ' + txtIn);
		
		chat.scrollToBottom($('#chatArea'));
	},
	scrollToBottom: function(element){
		element.scrollTop(element[0].scrollHeight);
	}
};