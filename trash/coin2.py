import csv
import requests
import re
from bs4 import BeautifulSoup

filename="암호화폐 시세.csv"
f=open(filename,"w",encoding="utf-8-sig",newline="")
writer=csv.writer(f)

headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"}
url="https://kr.investing.com/crypto/"
res=requests.get(url,headers=headers)
res.raise_for_status()
print("1실행완료")
soup=BeautifulSoup(res.text,"lxml")
#//*[@id="co_list"]/dl[1]/dd
title=["종목","기호","가격(KRW)","총 시가","거래량(24H)","총 거래량","변동(24H)","변동(7D)"]
writer.writerow(title)
data_rows=soup.find("table",attrs={"class":"genTbl js-top-crypto-table mostActiveStockTbl crossRatesTbl allCryptoTlb wideTbl elpTbl elp15"}).find("tbody").find_all("tr")
for row in data_rows:
    columns=row.find_all("td")
    data=[column.get_text().replace(",","") for column in columns[1:]]
    #print(data)
    '''
    data=[]
    for column in columns[1:]:
        n=1
        if(n!=0):
            data.append(column.get_text().replace(",",""))
        else:
            data.append(column.get_text())
        n=n+1
        '''
    writer.writerow(data)
#print("2실행완료")
print("길이 ",len(data_rows),"  ",len(columns)," ",len(data))
#for price in prices:
    #print("3실행완료")
    #print("가격",price.a.get_text())
