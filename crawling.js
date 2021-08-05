  const axios = require("axios");
  const cheerio = require("cheerio");
  const fs = require("fs");
  const log = console.log;

  const webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;
  const chrome = require('selenium-webdriver/chrome');
  
  const driver = new webdriver.Builder().forBrowser('chrome').build();
  

  const getHtml = async () => {
    try {
      return await axios.get("https://kr.investing.com/crypto/currencies");
    } catch (error) {
      console.error(error);
    }
  };
  driver.sleep(7000)
  getHtml()
    .then(html => {
      let tdList = [];
      const $ = cheerio.load(html.data);
      const $bodyList = $("div.wrapper section.fullcolumn div div.js-plus-icon-popup.plusIconCont table.genTbl.openTbl.js-all-crypto-table.mostActiveStockTbl.crossRatesTbl.allCryptoTlb.wideTbl.elpTbl.elp15").children("tbody");

      $bodyList.each(function(i, elem) {
        tdList[i] = {
          name: $(this).find('td.left.bold.elp.name.cryptoName.first.js-currency-name a').text(),
          initial: $(this).find('td.left.noWrap.elp.symb.js-currency-symbol').text(),
          price: $(this).find('td.price.js-currency-price a').text(),
          change: $(this).find('td.js-currency-change-24h.redFont.pid-1057391-pcp').text()
        };
      });

      //const data = tdList.filter(n => n.title);
      return tdList;
    })
    .then(res => log(res));
