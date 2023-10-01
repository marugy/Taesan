import React, { useEffect, useState } from 'react';
import Card from 'components/Common/Card';
import HistoryList from 'components/History/HistoryList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useInfiniteQuery } from 'react-query';
import { useAssetStore } from 'store/AssetStore';

const HistoryPage = () => {
  const { accessToken, refreshToken } = useUserStore();
  const [cardUser,setCardUser]= useState('')
  const [cardNumber,setCradNumber]=useState('')
  const [cardCompany,setCradCompany]=useState('')
  const [transactionDTOList,setTransactionDTOList]=useState([])
  const [page,setPage] = useState(null);
  const {selectedCardId} = useAssetStore()

  
  // const getHistory = async (page:number) => {
  //   try {
  //     const response = await axios.get(
  //       `https://j9c211.p.ssafy.io/mydata/card-management/cards/1/approval-domestic/test`,
  //       {
  //         params: {
  //           cardId: cardid,
  //           cursor: page,
  //           limit: 10
  //         },
  //         headers: {
  //           'ACCESS-TOKEN': accessToken,
  //           'REFRESH-TOKEN': refreshToken,
  //         },
  //       }
  //     );
  //     setCardUser(response.data.card.name)
  //     setCradNumber(response.data.card.cardNumber)
  //     setCradCompany(response.data.card.cardCompany)
  //     setTransactionDTOList(response.data.transactionDTOList)
  //     setPage(response.data.next_page)
  //     console.log(page)
  //     console.log(response.data)
  //     return response.data.transactionDTOList;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  const getHistory = async (page:any) => {
    try {
      const response = await axios.get(
        `https://j9c211.p.ssafy.io/mydata/card-management/cards/1/approval-domestic/test`,
        {
          params: {
            org_code: "ssafy101",
            from_date: "20230811",
            to_date: "20230811",
            next_page: page,
            limit: 10
          },
          headers: {
            'x-api-tran-id': "1",
            'x-api-type': "1",
          },
        }
      );
      setPage(response.data.next_page)
      console.log(page)
      console.log(response.data)
      return response.data.approved_list;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery('transactions', () => getHistory(page), {
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 10) {
        // 다음 페이지가 있는 경우 다음 페이지 번호 반환
        return lastPage[lastPage.length - 1].page + 1;
      } else {
        return false; // 더 이상 데이터가 없는 경우 false 반환
      }
    },
    refetchOnWindowFocus: false,
    cacheTime:0
  });
  
  return (
    <div>
      <ArrowBack pageName="거래내역" />
      <Card
        name="LEE JI HEON"
        cardNumber="6011 - 6175 - 8192 - 2346"
        cardCompany="신한은행"
        main=""
        cardId={123}
        cardType="Credit"
        />
      <HistoryList
        transactionDTOList={data ? data.pages.flat() : []}
        fetchNextPage={fetchNextPage}
        hasNextPage={!!hasNextPage}
        isFetching={isFetching}
      />
      <BottomNav />
    </div>
  );
};

export default HistoryPage;

// const getHistory = () =>{
//   axios.get(`https://j9c211.p.ssafy.io/api/transactions/hisotry/${selectedCardId}`, {
//   params: {
//     cardId: selectedCardId,
//     cursor: 0,
//     limit: 20,
//   },    
//   headers: {
//       'ACCESS-TOKEN': accessToken,
//       'REFRESH-TOKEN': refreshToken,
//       },
//   })
//   .then((response)=>{
//     setCardUser(response.data.card.name)
//     setCradNumber(response.data.card.cardNumber)
//     setCradCompany(response.data.card.cardCompany)
//     setTransactionDTOList(response.data.transactionDTOList)
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }

// useEffect(
//   getHistory
// ,[])