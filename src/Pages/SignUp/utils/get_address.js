export default function get_address(info, setInfo){
    new window.daum.Postcode({
        oncomplete: function(data){
            const zcode_ = data.zonecode;
            const roadAddr_ = data.roadAddress;
            const jibunAddr_ = data.jibunAddress;
            setInfo({...info, roadAddr:roadAddr_,  zcode:zcode_, jibunAddr:jibunAddr_})
        }
    }).open();
}