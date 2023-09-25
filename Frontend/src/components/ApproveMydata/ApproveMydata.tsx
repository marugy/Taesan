import React,{useState} from 'react';
import { Button,Checkbox } from '@material-tailwind/react';
import ArrowBack from 'components/Common/ArrowBack';
import Swal2 from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const ApproveMydata = () => {
    const navigate = useNavigate();
    const [checkEntireApprove,setCheckEntireApprove] = useState(false);
    const [check1,setCheck1] = useState(false);
    const [check2,setCheck2] = useState(false);
    const [check3,setCheck3] = useState(false);

    const handleCheckAll = () => {
        setCheck1(!checkEntireApprove);
        setCheck2(!checkEntireApprove);
        setCheck3(!checkEntireApprove);
        setCheckEntireApprove(!checkEntireApprove);
      };

    const handleCheck1 = () => {
        setCheck1(!check1);
    }
    const handleCheck2 = () => {
        setCheck2(!check2);
    }
    const handleCheck3 = () => {
        setCheck3(!check3);
    }

    const handleNext = () => {
        if(check1 && check2 && check3){
            navigate('/main/asset/register');
        }else{
            Swal2.fire({
                icon: 'info',
                title: '필수 항목에 모두 동의해주세요.',
        })
    }
}
    return (
        <div className="font-main">
            <ArrowBack pageName="마이데이터 가입하기" />
            <div className="font-main font-semibold text-2xl mt-10 mx-3">
                태산에 가입하시면
                마이데이터와 <br/> 오픈뱅킹의  통합자산관리를 <br/> 이용하실 수 있습니다.                
            </div>
            <div>
                <img src="/AssetRegister/myData.png" className="h-64 my-10 mx-auto"/>
            </div>
            <div className="border border-gray-400 rounded-xl p-3 mx-3 ">
                <div className="font-semibold text-2xl"><Checkbox
    crossOrigin="anonymous"
    color="blue"
    checked={checkEntireApprove}
    onChange={handleCheckAll}
  />전체 동의</div>
                <hr/>
                <div className="text-gray-700 text-lg mt-3"><Checkbox color="blue" checked={check1} onChange={handleCheck1} crossOrigin="anonymous" />[필수] 통합자산관리서비스 이용약관</div>
                <div  className="text-gray-700 text-lg mt-3"><Checkbox color="blue" checked={check2} onChange={handleCheck2} crossOrigin="anonymous"  />[필수] 통합자산관리서비스 설명서</div>
                <div  className="text-gray-700 text-lg mt-3"><Checkbox color="blue" checked={check3} onChange={handleCheck3} crossOrigin="anonymous"  />[필수] 개인(신용)정보 수집•이용 동의서 (통합자산관리서비스)</div>
            </div>

            <div className="bg-gray-300 mt-5 mx-3 p-3 border rounded-lg text-md"> 
                <div className="mb-2">
                    내 정보를 안전하게 지키는 마이데이터 사용법
                </div>
                <div>
                    
                • 가입하기 전에 한번 더 고민해주세요.<br/>
                • 꼭 필요한 서비스만 가입해주세요.<br/>
                • 잘 이용하지 않는 서비스는 탈퇴 후 삭제해주세요
                </div>
            </div>

            <div className="mx-3 mt-5 text-gray-500">
                * 태산은 마이데이터를 통해 수집된 정보를 저장하지 않습니다.<br/>
                * 무분별한 마이데이터 서비스 가입으로 나의 개인정보가 너무 많은 곳에 전송, 보관될 수 있습니다.<br/>
            *  가입한 마이데이터 이용현황은 마이데이터 종합포털(www.mydatacenter.or.kr)에서 확인하실 수 있습니다.<br/>
        
            </div>
            <div className="flex justify-center mt-5  ">
            <Button color="blue" className="w-full text-xl" onClick={handleNext}>마이데이터 동의하기</Button>
            </div>
        </div>
            
    );
};

export default ApproveMydata;