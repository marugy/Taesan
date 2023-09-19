export interface HistoryData {
    cursor: number,
    card_number: number,
    name: string,
    card_company: string,
    history_num: number,
    history_list: {
        transaction_id: string,
        approved_num: number,
        shop_name: stirng,
        date: string,
        approved_amount: number,
        after_trans_amt: number,
        location_category: string
    }[]
}