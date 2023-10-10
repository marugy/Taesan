import React, { useEffect, useState } from 'react';
import Card from 'components/Common/Card';
import HistoryList from 'components/History/HistoryList';
import ArrowBack from 'components/Common/ArrowBack';
import BottomNav from 'components/Common/BottomNav';
import axios from 'axios';
import { useUserStore } from 'store/UserStore';
import { useInfiniteQuery } from 'react-query';
import { useAssetStore } from 'store/AssetStore';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const [cardId, setCardId] = useState(0);
  const [cardNumber, setCradNumber] = useState('');
  const [cardCompany, setCradCompany] = useState('');
  const [transactionDTOList, setTransactionDTOList] = useState([]);
  const [cardType, setCardType] = useState('');
  const [page, setPage] = useState(null);
  const { selectedCardId } = useAssetStore();
  const { accessToken, refreshToken, connectedAsset, createdTikkle, name } = useUserStore();
  const navigate = useNavigate();
  const tokenCheck = () => {
    axios
      .post(
        'https://j9c211.p.ssafy.io/api/member-management/members/check/access-token',
        {},
        {
          headers: {
            'ACCESS-TOKEN': accessToken,
            'REFRESH-TOKEN': refreshToken,
          },
        },
      )
      .then((res) => {
        if (res.data.response === false) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      });
  };
  useEffect(() => {
    tokenCheck();
    if (connectedAsset === false) {
      navigate('/main');
    }
  }, []);

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

  const getHistory = async (page: any) => {
    try {
      const response = await axios.get(`https://j9c211.p.ssafy.io/api/transactions/history/${selectedCardId}`, {
        params: {
          cursor: page,
          limit: 10,
        },
        headers: {
          'ACCESS-TOKEN': accessToken,
          'REFRESH-TOKEN': refreshToken,
        },
      });
      setPage(response.data.response.cursor);
      setCradNumber(response.data.response.card.cardNumber);
      setCradCompany(response.data.response.card.cardCompany);
      setCardType(response.data.response.card.cardType);
      setCardId(response.data.response.card.cardId);

      console.log(response.data);
      return response.data.response.transactionDTOList;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  // const getHistory = async (page:any) => {
  //   try {
  //     const response = await axios.get(
  //       `https://j9c211.p.ssafy.io/mydata/card-management/cards/1/approval-domestic/test`,
  //       {
  //         params: {
  //           org_code: "ssafy101",
  //           from_date: "20230811",
  //           to_date: "20230811",
  //           next_page: page,
  //           limit: 10
  //         },
  //         headers: {
  //           'x-api-tran-id': "1",
  //           'x-api-type': "1",
  //         },
  //       }
  //     );
  //     setPage(response.data.next_page)
  //     console.log(page)
  //     console.log(response.data)
  //     return response.data.approved_list;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery('transactions', () => getHistory(page), {
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 10) {
        // 다음 페이지가 있는 경우 다음 페이지 번호 반환
        return lastPage[lastPage.length - 1].page + 1;
      } else {
        return false; // 더 이상 데이터가 없는 경우 false 반환
      }
    },
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  return (
    <div>
      <ArrowBack pageName="거래내역" />
      <Card name={name} cardNumber={cardNumber} cardCompany={cardCompany} main="" cardId={cardId} cardType={cardType} />
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
//     cardId: cardid,
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
