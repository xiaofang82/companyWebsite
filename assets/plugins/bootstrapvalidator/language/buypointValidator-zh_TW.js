$(document).ready(function() {
    $('#refundform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
		//訂購人資訊
            bank: {
                validators: {
                        
                        notEmpty: {
                        message: '請輸入轉帳銀行'
                    }
                }
            },
			bankcode: {
                validators: {
                        
                        notEmpty: {
                        message: '請輸入銀行代號'
                    }
                }
            },
			accountname: {
                validators: {
                        stringLength: {
                        min: 2,
						message: '請輸入至少2個字數'
                    },
                        notEmpty: {
                        message: '請輸入真實戶名，不可空白'
                    }
                }
            },
			account: {
                validators: {
                        
                        notEmpty: {
                        message: '請輸入帳號'
                    }
                }
            },
			point: {
                validators: {
						regexp: { 
				　　　　regexp: /^[0-9]+$/, 
				　　　　message: "只能輸入數字" 
					},
                        
                        notEmpty: {
                        message: '請輸入退款金額'
                    }
                }
            }
			
		}

    })
});