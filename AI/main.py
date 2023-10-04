import fasttext
from fastapi import FastAPI
from pydantic import BaseModel

info = {
"__label__fruit_vegetable"  : "과일_채소",
"__label__rice_grain_nut" : "곡류",
"__label__meat_egg" : "정육_계란류",
"__label__seafood_fresh_dry" : "수산물",
"__label__milk_dairy" : "우유_유제품",
"__label__convenience_food" : "간편식",
"__label__kimchi_side_delli" : "반찬류",
"__label__water_drink_alchol" : "생수_음료_주류",
"__label__coffee_beans_tea" : "커피_차",
"__label__sauce_oil" : "양념_오일",
"__label__snack" : "과자_간식",
"__label__bakery_jam" : "제과_잼",
"__label__healthy_food" : "건강식품",
"__label__tissue_sanitary" : "위생용품",
"__label__hair_body_beauty" : "뷰티",
"__label__clean_household" : "생활용품",
"__label__furniture_interior" : "인테리어",
"__label__kitchen" : "주방용품",
"__label__daily_tool" : "생활잡화",
"__label__pet" : "반려동물",
"__label__kid_toy" : "완구",
"__label__fashion_underware" : "의류",
"__label__stuff_luxury" : "잡화_명품",
"__label__sports_trip_car" : "스포츠_차",
"__label__digital_appliances_rental" : "디지털_가전",
"__label__stationery_hobby_book" : "문구_도서",
"__label__smoke" : "담배",
}


async def lifespan(app: FastAPI):
    global model
    model = fasttext.load_model("./final_model_02.bin")
    yield

app = FastAPI(lifespan=lifespan)

class receipt_req(BaseModel):
    productName: str
    price: int

class receipt_res(BaseModel):
    productName: str
    price: int
    category : str


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/")
def anal_receipt_list(receipts: list[receipt_req]):
    new_receipts = []
    print(type(info))
    for receipt_idx in receipts:
        category_name = info[model.predict(receipt_idx.productName)[0][0]]
        print(category_name)
        temp = receipt_res(productName=receipt_idx.productName, price=receipt_idx.price, category=category_name)
        new_receipts.append(temp)
    return new_receipts