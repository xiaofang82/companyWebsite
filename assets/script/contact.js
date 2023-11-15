'use strict'



//validate contact form
$(document).ready(function () {
    $('#contactform').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstname: {
                validators: {
                    regexp: {
                        regexp: '^[a-zA-Z]{2,20}$',
                        message: 'Please input a-z or A-Z letters'
                    },
                    notEmpty: {
                        message: 'Please input your first name'
                    }
                }
            },
            lastname: {
                validators: {
                    regexp: {
                        regexp: '^[a-zA-Z]{2,20}$',
                        message: 'Please input a-z or A-Z letters'
                    },
                    notEmpty: {
                        message: 'Please input your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please input your email'
                    },
                    emailAddress: {
                        message: 'Please input correct email'
                    }
                    
                }
            },
            phone: {
                validators: {
                    regexp: {
                        regexp: /^[0-9]{10,11}$/,
                        message: "Please input correct phone number"
                    },
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Please input message'
                    }
                }
            }
            
        
        }

    });
});