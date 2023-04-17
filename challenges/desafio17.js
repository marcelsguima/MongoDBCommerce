db.produtos.aggregate([
  {
    $group: {
      _id: null,
      totalProdutos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      franquia: "McDonalds",
      totalProdutos: 1
    }
  },
  {
    $out: "resumoProdutos"
  }
])


db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 })

