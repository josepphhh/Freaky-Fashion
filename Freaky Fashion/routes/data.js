var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const products = [{
    "image": "https://img01.ztat.net/article/spp-media-p1/2878bc558e9b3aa1abc578107d0725b0/d169679819424294adb8a19725f4fcfd.jpg?imwidth=1800",
    "product_name": "Versace Byxor",
    "price": "€16,78",
    "Id": "a857d72d-a511-468c-8ddd-3186c77ddce7",
    "category": "byxor",

  }, {
    "image": "https://img01.ztat.net/article/spp-media-p1/be66f97111a03baabb4c18075c1ad4b0/33e1b5b2b9e14feca796db38556bef4a.jpg?imwidth=1800&filter=packshot",
    "product_name": "Versace Tröja",
    "price": "€1122,30",
    "Id": "e03a4eb0-15c9-4489-a5cc-a7bc7af87a37",
    "category": "tröjor",

  }, {
    "image": "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw683344b1/original/90_A83864-A201952_A1008_10_MedusaMotifLooseFitT-Shirt-T-shirts-versace-online-store_6_1.jpg?sw=748&sh=1050&sm=fit",
    "product_name": "Versace T-shirt",
    "price": "€898,65",
    "Id": "e9621546-d37b-4ec2-aada-1f41de606a51",
    "category": "t-shirt",

  }, {
    "image": "https://cdn-images.farfetch-contents.com/15/64/36/49/15643649_28307300_1000.jpg",
    "product_name": "Versace Byxor",
    "price": "€1784,30",
    "Id": "3bb7bc30-0b1d-4ba7-8303-eafd09d41cfa",
    "category": "byxor",

  }, {
    "image": "https://static.miinto.net/products/8e1209d56df4e651c8bba40b53e59519.jpg?width=400&height=600&title=sweatshirt",
    "product_name": "Versace Tröja",
    "price": "€811,07",
    "Id": "4e2cf289-13eb-43da-b608-0ff88c7fb817",
    "category": "tröjor",

  }, {
    "image": "https://img01.ztat.net/article/spp-media-p1/5878b4156cc135a89a027514a94dcba5/4d9cf73647bb44d8987da737a5d6809b.jpg?imwidth=762",
    "product_name": "Versace T-shirt",
    "price": "€1653,16",
    "Id": "056a4a7a-d2c5-4820-8963-c803978d94e0",
    "category": "t-shirt",

  }, {
    "image": "https://img01.ztat.net/article/spp-media-p1/2878bc558e9b3aa1abc578107d0725b0/d169679819424294adb8a19725f4fcfd.jpg?imwidth=1800",
    "product_name": "Versace Byxor",
    "price": "€43,17",
    "Id": "3c7bc10a-7df7-4ab0-8615-b3bbbfd4a68e",
    "category": "byxor",
  }, {
    "image": "https://cdn-images.farfetch-contents.com/14/13/49/88/14134988_20033715_1000.jpg",
    "product_name": "Versace Tröja",
    "price": "€1008,31",
    "Id": "8f7e290f-f663-469e-bb14-5419cd4c0a01",
    "category": "tröja",
  }, {
    "image": "https://cdn-images.farfetch-contents.com/14/13/49/88/14134988_20033715_1000.jpg",
    "product_name": "Versace Tröja",
    "price": "€1008,31",
    "Id": "8f7e290f-f663-469e-bb14-5419cd4c0a01",
    "category": "tröja",
  }, {
    "image": "https://cdn-images.farfetch-contents.com/14/13/49/88/14134988_20033715_1000.jpg",
    "product_name": "Versace Tröja",
    "price": "€1008,31",
    "Id": "8f7e290f-f663-469e-bb14-5419cd4c0a01",
    "category": "tröja",
  }
]

  res.json(products);
});

module.exports = router;
