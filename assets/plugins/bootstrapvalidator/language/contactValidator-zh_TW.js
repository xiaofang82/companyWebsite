$(document).ready(function() {
    $('#regform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			
			provider_name: {
                validators: {
                    notEmpty: {
                        message: '請輸入公司名稱，不可空白'
                    }
                }
            },
			provider_lxr: {
                validators: {
                        stringLength: {
                        min: 2,
						message: '請輸入至少2個字數'
                    },
                        notEmpty: {
                        message: '請輸入真實姓名，不可空白'
                    }
                }
            },
			account_lxr: {
                validators: {
                        stringLength: {
                        min: 2,
						message: '請輸入至少2個字數'
                    },
                        notEmpty: {
                        message: '請輸入真實姓名，不可空白'
                    }
                }
            },
			provider_tel2: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入公司電話，不可填數字以外的文字"
　　　　　　　　　　},
                    notEmpty: {
                        message: '請輸入公司電話，不可空白'
                    },
                }
            },	
			fax2: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入傳真電話，不可填數字以外的文字"
　　　　　　　　　　},
                    notEmpty: {
                        message: '請輸入傳真電話，不可空白'
                    },
                }
            },			
			account_mobile: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入手機號碼，不可填數字以外的文字"
　　　　　　　　　　},
					stringLength: {
                        min: 10,
						max: 10,
						message: '請輸入手機10碼'
					},
                    notEmpty: {
                        message: '請輸入手機號碼，不可空白'
                    },
                }
            },
			account_tel: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入市話號碼，不可填數字以外的文字"
　　　　　　　　　　},
                    notEmpty: {
                        message: '請輸入市話號碼，不可空白'
                    },
                }
            },
			provider_type: {
                validators: {
                    notEmpty: {
                        message: '請選擇公司或個人'
                    }
                }
            },
			invoice_num: {
                validators: {
                        notEmpty: {
                        message: '請輸入統編或身份證字號，不可空白'
                    }
                }
            },
			provider_post: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入郵遞區號，不可填數字以外的文字"
　　　　　　　　　　},
                        notEmpty: {
                        message: '請輸入郵遞區號，不可空白'
                    }
                }
            },
			provider_addr: {
                validators: {
                        notEmpty: {
                        message: '請輸入地址，不可空白'
                    }
                }
            },
			invoice_post: {
                validators: {
					regexp: {
　　　　　　　　　　	regexp: /^[0-9]+$/,
　　　　　　　　　　　　message: "請輸入郵遞區號，不可填數字以外的文字"
　　　　　　　　　　},
                        notEmpty: {
                        message: '請輸入郵遞區號，不可空白'
                    }
                }
            },
			invoice_addr: {
                validators: {
                        notEmpty: {
                        message: '請輸入地址，不可空白'
                    }
                }
            },
			provider_content: {
                validators: {
                        notEmpty: {
                        message: '請輸入公司及品牌簡述，不可空白'
                    }
                }
            },
			account_mail: {
                validators: {
                    notEmpty: {
                        message: '請輸入Email，不可空白'
                    },
                    emailAddress: {
                        message: 'Email無效'
                    }
                }
            },
			
			company: {
                validators: {
                    notEmpty: {
                        message: '請輸入公司名稱，不可空白'
                    }
                }
            },
            username: {
                validators: {
                        stringLength: {
                        min: 2,
						message: '請輸入至少2個字數'
                    },
                        notEmpty: {
                        message: '請輸入真實姓名，不可空白'
                    }
                }
            },
			companyname: {
                validators: {
                        stringLength: {
                        min: 2,
						message: '請輸入真實姓名，不可空白'
                    },
                        notEmpty: {
                        message: '請輸入真實姓名，不可空白'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '請輸入Email，不可空白'
                    },
                    emailAddress: {
                        message: 'Email無效'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '請輸入電話，不可空白'
                    },
                }
            },
			tel_two: {
                validators: {
                    notEmpty: {
                        message: '請輸入電話，不可空白'
                    },
                }
            },
			mobile:	{
                validators: {
                    notEmpty: {
                        message: '請輸入手機，不可空白'
                    },
                    /*phone: {
                        message: 'Please supply a vaild phone number with area code'
                    }*/
                }
            },
			content: {
                validators: {
                     stringLength: {
                        min: 4,
						message: '請填寫聯絡內容，不可少於4個字'
                    },
                    notEmpty: {
                        message: '請填寫聯絡內容'
                    }
                }
            },
			
			remark: {
                validators: {
                     stringLength: {
                        min: 4,
						message: '請輸入至少4個數字'
                    },
                    notEmpty: {
                        message: '請輸入備註內容'
                    }
                }
            },
			type: {
                validators: {
                    notEmpty: {
                        message: '請選擇聯絡事項'
                    }
                }
            },
			needcount: {
                validators: {
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: '請填寫數字'
                    }
                }
            },
            inputcode: {
                validators: {
                      stringLength: {
                        min: 5,
                        max: 5,
                        message:'請輸入5個字數'
                    },
                    notEmpty: {
                        message: '請輸入驗證碼，不可空白'
                    }
                }
            }
			
		}

        })
});