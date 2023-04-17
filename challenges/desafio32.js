db.produtos.find({
    $expr: {
      $gt: [{ $subtract: ["$curtidas", "$vendidos"] }, 0],
    },
  }, { nome: 1, _id: 0 });
