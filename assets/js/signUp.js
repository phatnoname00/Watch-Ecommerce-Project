$(document).ready(function(){
    
    // check Name
    function check_surName(){
        
        var surName=$("#surName");
        var errorSurname= $("#errorSurname");
        var pattern = /^[A-Z][a-z]{1,}$/;
        if(surName.val()==""){
            errorSurname.text("* Bắt Buộc Nhập");
            surName.focus();
            return false;
        }
        if(!pattern.test(surName.val())){
            errorSurname.text("* Họ ở VN phải có 2 ký tử trở lên, Chữ Cái Đầu Viết Hoa");
            surName.focus();
            return false;
        }
        errorSurname.text("*");
        return true;
    }
    $("#surName").blur(check_surName);
    check_surName();

    // check Name
    function check_Name(){
        var Name= $("#name");
        var errorName =$("#errorName");
        var pattern = /^[A-Z][a-z]{0,}$/;
        if(Name.val()==""){
            errorName.text("* Bắt Buộc Nhập");
            Name.focus();
            return false;
        }

        if(!pattern.test(Name.val())){
            errorName.text("* Chữ Cái Đầu Viết Hoa");
            Name.focus();
            return false;
        }

        errorName.text("*");
        return true;
    }
    $("#name").blur(check_Name);
    check_Name();


    // check Email
    function check_Email(){
        var email =$("#email");
        var errorEmail = $("#errorEmail");
        var pattern = /^[a-zA-Z]+\d+\@gmail\.com$/;
        if(email.val()==""){
            errorEmail.text("Bắt Buộc Nhập");
            email.focus();
            return false;
        }
        if(!pattern.test(email.val())){
            errorEmail.text("Email Phải Có Chữ Số và theo Dạng XXXX@gmail.com");
            email.focus();
            return false;
        }
        errorEmail.text("*");
        
        return true;
    }
    $("#email").blur(check_Email);
    check_Email();

    // check Password
    function check_pass(){
        var pass= $("#pass");
        var errorPass = $("#errorPass"); 
        var pattern = /^[a-zA-Z\d]{5,}$/;
        if(pass.val()==""){
            errorPass.text("Bắt Buộc Nhập");
            pass.focus();
            return false;
        }
        if(!pattern.test(pass.val())){
            errorPass.text("Mật Khẩu Quá Ngắn");
            pass.focus();
            return false;
        }

        errorPass.text("*");
        
        return true;
    }

    $("#pass").blur(check_pass);
    check_pass();

    

    // Hoàn Thành Đăng Ký
    $("#btnDK").click(function checkInput(){
        if(!check_surName() || !check_Name() || !check_Email() || !check_pass()){
            alert("Vui Lòng Nhập Đầy Đủ Thông Tin");
            return false;
        }
        else{
            alert("Đăng Ký Thành Công");
            window.location.href="login.html";
            saveInfo();
            return false;

        }
    })

    function saveInfo(){
        
        let user = {
            email:$("#email").val(),
            pass:$("#pass").val(),
            Name:$("#name").val(),

        }
        
        localStorage.setItem('user',JSON.stringify(user));
    };





    // Đăng Nhập

    // Check Email
    $("#btnDN").click(function check_DN(){
        var email_new=$("#emailDN");
        var pass_new=$("#passDN");
            var user_new={
                email_new:$("#emailDN").val(),
                pass_new:$("#passDN").val(),
            }
        var user_DK= JSON.parse(localStorage.getItem('user'));
        if(email_new.val()==""||pass_new.val()==""){
            alert("Vui Lòng Không Để Trống");
        }
        else{
            if( user_new.email_new==user_DK.email&& user_new.pass_new==user_DK.pass){
                alert("Đăng Nhập Thành Công");
                window.location.href="cart.html";
                return false;
            }
            else{
                alert("Đăng Nhập Không Thành Công!!! Mời Đăng Nhập Lại");
            }
        }
    })
    
    
})



